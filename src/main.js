#include <glconstants.js> 
#include <glmatrix.js> 
#include <gltoolbox.js>  
#include "debug.js" 

(function() {
"use strict"; 

var cube; 

var canvas = document.getElementByTagName("canvas")[0]; 
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
	"files" : ["cube.obj"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		dlog("LOADED"); 
		start(); 
	}
});

function start() {
	gl.enable( GL_DEPTH_TEST ); 
	//gl.enable( GL_CULL_FACE ); 
	gl.clearColor(0.0f / 255.0f, 68.0f / 255.0f, 153.0f / 255.0f, 1.0);
	
}

}());
