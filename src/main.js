#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include <hammer.js>  
#include "debug.js" 
#include "cubes.id.js"

(function() {
"use strict"; 

var cube; 
var program; 
var idprogram; 
var vtnBuffer; 

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

var cubeSides = [
	vec3.create([ 0, 0, 0]), //None 
	vec3.create([ 0,-1, 0]), //1 
	vec3.create([ 0, 0,-1]), //2 
	vec3.create([ 1, 0, 0]), //3 
	vec3.create([-1, 0, 0]), //4 
	vec3.create([ 0, 0, 1]), //5 
	vec3.create([ 0, 1, 0])  //6 
];

var objects = [
	{
		position : [ 0,0,0 ],
		id       : idgen.next()
	}, 
	{
		position : [ 0,0,1 ],
		id       : idgen.next()
	}
];

var tapped = false; 
var tapEvent = null; 

GLT.loadmanager.loadFiles({
	"files" : ["cube.obj", "diffuse.shader", "id.shader"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		program = GLT.SHADER.compileProgram(gl,files["diffuse.shader"]);
		idprogram = GLT.SHADER.compileProgram(gl,files["id.shader"]);
		dlog("LOADED"); 
		start(); 
		GLT.requestGameFrame(draw); 
	}
});

function recalcCamera() {
	camera = mat4.lookAt(cameraPos, cameraDir, cameraUp); 
}

function start() {
	gl.enable( GL_DEPTH_TEST ); 

	vtnBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, vtnBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);

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
	
		dlog(cubeSides[side]); 
		dlog(r,g,b,a); 
		dlog(selectedid); 
	}

	gl.clearColor(0 / 255, 68 / 255, 153 / 255, 1);
	gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); 
	drawCubes(program); 


	GLT.requestGameFrame(draw); 
} 

function drawCubes(program) {
	gl.useProgram(program); 
	var uModelview = gl.getUniformLocation(program, "uModelview"); 
	var uIdColor   = gl.getUniformLocation(program, "uIdColor"); 
	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aNormal    = gl.getAttribLocation(program, "aNormal"); 

	gl.bindBuffer(GL_ARRAY_BUFFER, vtnBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset); 
	gl.enableVertexAttribArray(aVertex); 
	if(aNormal !== -1) { 
		gl.vertexAttribPointer(aNormal, 4, GL_FLOAT, false, cube.stride, cube.noffset); 
		gl.enableVertexAttribArray(aNormal); 
	} 	

	for(var i = 0; i != objects.length; i++) { 
		var object = objects[i]; 
		if(uIdColor) {
			gl.uniform3fv(uIdColor, object.id.asColor()); 
		}

		mat4.multiply(projection, camera, modelview); 
		mat4.translate(modelview, objects[i].position); 

		gl.uniformMatrix4fv(uModelview, false, modelview); 

		gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}
}

}());
