#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include "debug.js" 

(function() {
"use strict"; 

var cube; 
var program; 
var vtnBuffer; 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = null; 

#ifdef DEBUG 
	gl = GLT.createSafeContext(canvas); 
#else 
	gl = GLT.createContext(canvas); 
#endif 

var projection = mat4.perspective(60, 4/3, 0.1, 1000); 
var cameraPos = vec3.create([1,1,6]); 
var cameraDir = vec3.create([0,0,0]); 
var cameraNormal = vec3.create([0,0,-1]); 
var cameraUp = vec3.create([0,1,0]); 
var camera = mat4.lookAt(cameraPos, vec3.add(cameraPos, cameraNormal, cameraDir), cameraUp); 

var modelview = new Float32Array(16); 

var objects = [
	{
		position : [ 0,0,0 ] 
	}, 
	{
		position : [ 0,0,1 ]
	}
];


GLT.loadmanager.loadFiles({
	"files" : ["cube.obj", "diffuse.shader"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		program = GLT.SHADER.compileProgram(gl,files["diffuse.shader"]);
		dlog("LOADED"); 
		start(); 
		GLT.requestGameFrame(draw); 
	}
});

function start() {
	gl.enable( GL_DEPTH_TEST ); 
	//gl.enable( GL_CULL_FACE ); 
	gl.clearColor(0 / 255, 68 / 255, 153 / 255, 1);

	vtnBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, vtnBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);
}

function draw(time) {
	gl.useProgram(program); 
	var uModelview = gl.getUniformLocation(program, "uModelview"); 
	var aVertex = gl.getAttribLocation(program, "aVertex"); 
	var aNormal = gl.getAttribLocation(program, "aNormal"); 
	var stride = 0; 

	gl.bindBuffer(GL_ARRAY_BUFFER, vtnBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset); 
	gl.enableVertexAttribArray(aVertex); 
	if(aNormal !== -1) { 
		gl.vertexAttribPointer(aNormal, 4, GL_FLOAT, false, cube.stride, cube.noffset); 
		gl.enableVertexAttribArray(aNormal); 
	}
	
	for(var i = 0; i != objects.length; i++) { 
		mat4.multiply(projection, camera, modelview); 
		mat4.translate(modelview, objects[i].position); 

		gl.uniformMatrix4fv(uModelview, false, modelview); 

		gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}

	GLT.requestGameFrame(draw); 
} 

}());
