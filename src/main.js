#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include <hammer.js>  
#include "debug.js" 
#include "assert.js"
#include "cubes.id.js"
#include "cubes.cube.js"

(function() {
"use strict"; 

var cube; 
var sky; 
var program; 
var idprogram; 
var cubeBuffer; 
var skyBuffer; 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = null; 

#ifdef DEBUG 
	gl = GLT.createSafeContext(canvas); 
#else 
	gl = GLT.createContext(canvas); 
#endif 

var projection = mat4.perspective(60, 4/3, 0.1, 1000); 
var cameraPos  = vec3.create([1,1,6]); 
var cameraDir  = vec3.create([0,0,0]); 
var cameraUp   = vec3.create([0,1,0]); 
var camera     = mat4.identity();  

var modelview = new Float32Array(16); 

var idgen = new cubes.Id.Generator(); 
var cubetex = null; 
var skytex = null; 

var cubeNormals = [
	vec3.create([ 0, 0, 0]), //None 
	vec3.create([ 1, 0, 0]), //1 
	vec3.create([ 0, 1, 0]), //2 
	vec3.create([ 0, 0, 1]), //3 
	vec3.create([ 0, 0,-1]), //4 
	vec3.create([ 0,-1, 0]), //5 
	vec3.create([-1, 0, 0])  //6 
];

var cubelist = [
	new cubes.Cube({ x : 0, y : 0, z : 0 }, idgen.next()), 
	new cubes.Cube({ x : 0, y : 0, z : 1 }, idgen.next()) 
];

var tapped = false; 
var tapEvent = null; 
var dragged = false; 
var dragEvent = null; 
var eventPosition = { x : 0, y : 0 }; 

function createTexture(img) {
	assert(img); 

	var tex = gl.createTexture(); 
	gl.bindTexture(GL_TEXTURE_2D, tex); 
	gl.pixelStorei(GL_UNPACK_FLIP_Y_WEBGL, 1); 
	gl.texImage2D(GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, img); 
	gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR); 
	gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR); 
	gl.bindTexture(GL_TEXTURE_2D, null); 		
	return tex; 
}

function recalcCamera() {
	camera = mat4.lookAt(cameraPos, cameraDir, cameraUp); 
}

function setup() {
	gl.enable( GL_DEPTH_TEST ); 
	gl.enable( GL_CULL_FACE ); 

	cubeBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);

	skyBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);

	var hammer = new Hammer(canvas); 
	/*var events = ["ondragstart", "ondrag", "ondraged", "onswipe", "ontap", "ondoubletap", "onhold", "ontransformstart", "ontransform", "ontransformed"]; 

	for(var i = 0; i != events.length; i++) { 
		(function(eventname) { 
			hammer[eventname] = function(ev) {
				dlog(eventname, ev); 
			}; 
		}(events[i])); 
	}*/
	hammer.ontap = function(ev) {
		tapped = true; 
		tapEvent = ev; 
		var x = ev.position[0].x; 
		var y = canvas.height - ev.position[0].y; 
		eventPosition.x = x; 		
		eventPosition.y = y; 		
	}; 

	hammer.ondrag = function(ev) {
		dragged = true; 
		dragEvent = ev; 
		var x = ev.position.x; 
		var y = canvas.height - ev.position.y; 
		eventPosition.x = x; 		
		eventPosition.y = y; 		
	};
}

function gameloop(info) {
	update(info); 
	draw(info); 
	GLT.requestGameFrame(gameloop); 
} 

function update(info) {
	var r = 0; 
	var g = 0; 
	var b = 0; 
	var a = 0; 
	var side = 0; 
	var selectedid = 0; 
	var touchedTheSky = false; 
	var touchedACube  = false; 

	if(tapped || dragged) {
		gl.clearColor(0,0,0,0); 
		gl.clear(GL_DEPTH_BUFFER_BIT | GL_COLOR_BUFFER_BIT); 
		drawCubes(idprogram); 

		var buf = new Uint8Array(4); 
		var x = eventPosition.x; 
		var y = eventPosition.y; 
		
		gl.readPixels(x, y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, buf); 
		r = buf[0]; 
		g = buf[1]; 
		b = buf[2]; 
		a = buf[3]; 

		side = r; 
	}

	touchedTheSky = (side === 0); 
	touchedACube  = !touchedTheSky; 

	if(tapped && touchedACube) { 
		selectedid = cubes.Id.fromColor(0,g,b).asNumber(); 
	
		dlog(cubeNormals[side]); 
		dlog(r,g,b,a); 
		dlog(selectedid); 

		var normal = cubeNormals[side];
	
		//translateCube(selectedid, normal); 
		var cube = getCubeById(selectedid); 
		cube.tap(info, normal); 
	}

	if(dragged && touchedTheSky) {		
		var rot = mat4.identity(); 
		dlog(2 * Math.PI * dragEvent.distanceX / canvas.width);
		mat4.rotateY(rot, (-2 * Math.PI * dragEvent.distanceX / canvas.width) / 50); 
		mat4.multiplyVec3(rot, cameraPos); 
		recalcCamera(); 
	}
	
	tapped = false; 
	dragged = false; 

	for(var i = 0; i != cubelist.length; i++) {
		var cube = cubelist[i]; 
		cube.tick(info); 
	}
}

function draw(info) {
	gl.disable( GL_DEPTH_TEST ); 
	gl.disable( GL_CULL_FACE ); 
	drawSky(program); 
	gl.enable( GL_DEPTH_TEST ); 
	gl.enable( GL_CULL_FACE ); 

	gl.clear(GL_DEPTH_BUFFER_BIT); 
	drawCubes(program); 
} 

function getCubeById(id) {
	for(var i = 0; i != cubelist.length; i++) {
		var object = cubelist[i]; 		
		if(object.id.asNumber() === id) { 
			return object; 
		}
	}

	derr("id", id, "not found."); 
	return null; 
}

function translateCube(id, vec) {
	for(var i = 0; i != cubelist.length; i++) {
		var object = cubelist[i]; 		
		if(object.id.asNumber() === id) { 
			vec3.add(object.vector, vec); 
			return; 
		}
	}

	derr("id", id, "not found."); 
}

function drawCubes(program) {
	gl.useProgram(program); 
	var uModelview = gl.getUniformLocation(program, "uModelview"); 
	var uIdColor   = gl.getUniformLocation(program, "uIdColor"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	
	var uBling     = gl.getUniformLocation(program, "uBling");   	
	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 
	var aNormal    = gl.getAttribLocation(program, "aNormal"); 

	gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset); 
	gl.enableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, cube.stride, cube.toffset); 
		gl.enableVertexAttribArray(aTextureuv); 
	}

	if(aNormal !== -1) { 
		gl.vertexAttribPointer(aNormal, 4, GL_FLOAT, false, cube.stride, cube.noffset); 
		gl.enableVertexAttribArray(aNormal); 
	} 	

	if(uTexture) {
		gl.bindTexture(GL_TEXTURE_2D, cubetex); 
		gl.uniform1i(uTexture, 0); 
	}

	for(var i = 0; i != cubelist.length; i++) { 
		var object = cubelist[i]; 

		if(uIdColor) {
			gl.uniform3fv(uIdColor, object.id.asColor()); 
		}

		if(uBling) {
			gl.uniform1f(uBling, object.bling); 
		}

		mat4.multiply(projection, camera, modelview); 
		mat4.translate(modelview, object.vector); 

		gl.uniformMatrix4fv(uModelview, false, modelview); 

		gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}
}

function drawSky(program) {
	gl.useProgram(program); 

	var uModelview = gl.getUniformLocation(program, "uModelview"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	
	var uBling     = gl.getUniformLocation(program, "uBling");   	
	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 
	
	assert(uModelview); 
	assert(uTexture); 
	assert(aTextureuv !== -1); 
	assert(aVertex    !== -1); 

	gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, sky.stride, sky.voffset); 
	gl.enableVertexAttribArray(aVertex); 

	gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sky.stride, sky.toffset); 
	gl.enableVertexAttribArray(aTextureuv); 

	gl.bindTexture(GL_TEXTURE_2D, skytex); 
	gl.uniform1i(uTexture, 0); 

	mat4.multiply(projection, camera, modelview); 
	//mat4.identity(modelview); 
	mat4.translate(modelview, cameraPos); 
	//mat4.rotateY(modelview, Date.now() / 1000); 

	gl.uniformMatrix4fv(uModelview, false, modelview); 
	gl.uniform1f(uBling, 0); 

	gl.drawArrays(GL_TRIANGLES, 0, sky.numVertices); 
}

GLT.loadmanager.loadFiles({
	"files" : ["cube.obj", "diffuse.shader", "id.shader", "cube.png", "skybox.obj", "skybox2.png"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		sky  = files["skybox.obj"]; 
		program = GLT.SHADER.compileProgram(gl,files["diffuse.shader"]);
		idprogram = GLT.SHADER.compileProgram(gl,files["id.shader"]);
		cubetex = createTexture(files["cube.png"]);
		skytex = createTexture(files["skybox2.png"]);

		dlog("LOADED"); 
		setup(); 
		recalcCamera(); 
		GLT.requestGameFrame(gameloop); 
	}
});

}());

