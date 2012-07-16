#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include "debug.js" 

(function() {
"use strict"; 

var cube; 
var program; 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = null; 

#ifdef DEBUG 
	gl = GLT.createSafeContext(canvas); 
#else 
	gl = GLT.createContext(canvas); 
#endif 

var projection = mat4.perspective(60, 4/3, 0.1, 1000); 
var cameraPos = vec3.create([0,0,0]); 
var cameraDir = vec3.create([0,0,0]); 
var cameraNormal = vec3.create([0,0,-1]); 
var cameraUp = vec3.create([0,1,0]); 
var camera = mat4.lookAt(cameraPos, vec3.add(cameraPos, cameraNormal, cameraDir), cameraUp); 


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
}

function draw(time) {
	GLT.requestGameFrame(draw); 
} 

}());
