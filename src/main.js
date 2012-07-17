#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include <hammer.js>  
#include "debug.js" 
#include "assert.js"
#include "cubes.id.js"

#define PULL 0
#define PUSH 1 

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
var selectedid = 0; 
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

var objects = [
	{
		position : vec3.create([ 0,0,0 ]),
		id       : idgen.next()
	}, 
	{
		position : vec3.create([ 0,0,1 ]),
		id       : idgen.next()
	}
];

var tapped = false; 
var tapEvent = null; 

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
		start(); 
		GLT.requestGameFrame(draw); 
	}
});

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

function start() {
	gl.enable( GL_DEPTH_TEST ); 

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
	}; 
}


function draw(info) {
	var rot = mat4.identity(); 
	mat4.rotateY(rot, info.time.delta); 
	mat4.multiplyVec3(rot, cameraPos); 
	recalcCamera(); 

	if(tapped) { 
		tapped = false; 

		gl.clearColor(0,0,0,0); 
		gl.clear(GL_DEPTH_BUFFER_BIT | GL_COLOR_BUFFER_BIT); 
		drawCubes(idprogram); 

		var buf = new Uint8Array(4); 
		var x = tapEvent.position[0].x; 
		var y = canvas.height - tapEvent.position[0].y; 
		
		gl.readPixels(x, y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, buf); 
		var r,g,b,a; 
		r = buf[0]; 
		g = buf[1]; 
		b = buf[2]; 
		a = buf[3]; 

		var side = r; 

		selectedid = cubes.Id.fromColor(0,g,b).asNumber(); 
	
		dlog(cubeNormals[side]); 
		dlog(r,g,b,a); 
		dlog(selectedid); 



		var normal = cubeNormals[side];
	
		translateCube(selectedid, normal); 
	}

	gl.disable( GL_DEPTH_TEST ); 
	drawSky(program); 
	gl.enable( GL_DEPTH_TEST ); 

	gl.clear(GL_DEPTH_BUFFER_BIT); 
	drawCubes(program); 


	GLT.requestGameFrame(draw); 
} 

function translateCube(id, vec) {
	for(var i = 0; i != objects.length; i++) {
		var object = objects[i]; 		
		if(object.id.asNumber() === id) { 
			vec3.add(object.position, vec); 
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

	for(var i = 0; i != objects.length; i++) { 
		var object = objects[i]; 
		if(uIdColor) {
			gl.uniform3fv(uIdColor, object.id.asColor()); 
		}

		mat4.multiply(projection, camera, modelview); 
		mat4.translate(modelview, object.position); 

		gl.uniformMatrix4fv(uModelview, false, modelview); 

		gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}
}

function drawSky(program) {
	gl.useProgram(program); 

	var uModelview = gl.getUniformLocation(program, "uModelview"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	
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

	gl.drawArrays(GL_TRIANGLES, 0, sky.numVertices); 
}



}());

#undef PULL
#undef PUSH 
