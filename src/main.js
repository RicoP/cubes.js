#include <glconstants.js> 
#include <glmatrix.js> 
#include <glt.createcontext.js>  
#include <glt.requestgameframe.js>  
#include <glt.loadmanager.js>  
#include <glt.shader.js>  
#include "debug.js" 
#include "assert.js"
#include "cubes.cube.js"
#include "cubes.map.js" 

(function() {
"use strict"; 

var tmpmatrix = mat4.create(); 
var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = GLT.createContext(canvas); 

function start(files) {
	var projection = mat4.perspective(60, 4/3, 0.1, 1000); 
	var cameraPos  = vec3.create([1,1,6]); 
	var cameraDir  = vec3.create([0,0,0]); 
	var cameraUp   = vec3.create([0,1,0]); 
	var camera     = mat4.create();  

	function renderPlanes(info) {
		var program = files.diffuseprogram; 
		var plane = files.plane; 

		var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
		var uTexture   = gl.getUniformLocation(program, "uTexture"); 	

		var aVertex    = gl.getAttribLocation(program, "aVertex"); 
		var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 

		var modelviewprojection = tmpmatrix; 

		gl.useProgram(program); 
		gl.bindBuffer(GL_ARRAY_BUFFER, plane.buffer); 

		gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, plane.stride, plane.voffset); 
		gl.enableVertexAttribArray(aVertex); 
		
		gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, plane.stride, plane.toffset); 
		gl.enableVertexAttribArray(aTextureuv); 

		gl.bindTexture(GL_TEXTURE_2D, files.texcube); 
		gl.uniform1i(uTexture, 0); 

		mat4.multiply(projection, camera, modelviewprojection); 
		mat4.translate(modelviewprojection, [0,-1,0]); 

		gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

		gl.drawArrays(GL_TRIANGLES, 0, plane.numVertices); 
	}

	function recalcCamera() {
		mat4.lookAt(cameraPos, cameraDir, cameraUp, camera); 
	}

	function update(info) {
			
	}

	function render(info) {
		gl.clearColor(1,1,1,1); 
		gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT ); 
		//renderPlanes(info); 
	}

	function gameloop(info) {
		render(info); 
		update(info); 

		GLT.requestGameFrame(gameloop); 
	}

	gl.enable( GL_DEPTH_TEST ); 
	gl.enable( GL_SCISSOR_TEST ); 
	gl.enable( GL_CULL_FACE ); 
	gl.clearColor(1,0,0,1); 
	gl.clear(GL_COLOR_BUFFER_BIT); 

	files.cube.buffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, files.cube.buffer); 
	gl.bufferData(GL_ARRAY_BUFFER, files.cube.rawData, GL_STATIC_DRAW);

	files.plane.buffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, files.plane.buffer); 
	gl.bufferData(GL_ARRAY_BUFFER, files.plane.rawData, GL_STATIC_DRAW); 

	recalcCamera(); 
	window.gl=gl; 
	GLT.requestGameFrame(gameloop); 
}

GLT.loadmanager.loadFiles({
	"files" : {
		cube : "cube.obj", 
		plane : "plane.obj", 
		diffuse : "diffuse.shader", 
		id : "id.shader", 
		icube : "cube.png", 
		skybox : "skybox.obj", 
		iskybox : "skybox2.png", 
		border : "border.shader", 
		imap : "map.gif"
	},
	"error" : function(err) { 
		derr(err); 
	}, 
	"finished" : function(files) {
		function createTexture(gl, img) {
			assert(img); 

			var tex = gl.createTexture(); 
			gl.bindTexture(GL_TEXTURE_2D, tex); 
			gl.pixelStorei(GL_UNPACK_FLIP_Y_WEBGL, 1); 
			gl.texImage2D(GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, img); 
			gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST); 
			gl.texParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST); 
			gl.bindTexture(GL_TEXTURE_2D, null); 		
			return tex; 
		}
	
		if(gl) {
			files.texcube = createTexture(gl, files.icube); 		
			files.texskybox = createTexture(gl, files.iskybox); 		
			files.map = cubes.Map.create(files.imap); 
			files.idprogram = GLT.shader.compileProgram(gl, files.id); 
			files.diffuseprogram = GLT.shader.compileProgram(gl, files.diffuse); 

			start(files);
		}
		else { 
			alert("WebGL Not supported");
		}
	}
});


}()); 


