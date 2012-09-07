#include <glconstants.js> 
#include <glt.createcontext.js>  
#include <glt.requestgameframe.js>  
#include <glt.loadmanager.js>  
#include <glt.shader.js>  
#include <hammer.js>  
#include "debug.js" 
#include "math.js" 
#include "assert.js"
#include "sphere.js"
#include "random.js" 
#include "funkycube.js" 
#include "map.js" 

#define PREVIEW_WIDTH 180
#define PREVIEW_HEIGHT 135
#define PREVIEW_BORDER 15

var cube; 
var sphereData; 
var sphere; 
var sky; 
var program; 
var borderprogram; 
var cubeBuffer; 
var sphereBuffer; 
var skyBuffer; 
var borderBuffer; 
var map; 
var funkycube = new Funkycube(); 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = GLT.createContext(canvas); 

var projection = mat4perspective(60, 4/3, 0.1, 1000); 
var cameraPos  = vec3create(); 
var cameraDir  = vec3create(); 
var cameraUp   = vec3create([0,1,0]); 
var camera     = mat4identity();  

var tmpmatrix = mat4create();  

var cubetex = null; 
var skytex = null; 

var asisX = vec3create([1,0,0]); 
var asisY = vec3create([0,1,0]); 
var asisZ = vec3create([0,0,1]); 

var cameraRotX = 0; 
var cameraRotY = 0; 
var cameraRotZ = 0; 

var cubeNormals = [
	vec3create([ 0, 0, 0]), //None 
	vec3create([ 1, 0, 0]), //1 +x
	vec3create([ 0, 1, 0]), //2 +y
	vec3create([ 0, 0, 1]), //3 +z
	vec3create([ 0, 0,-1]), //4 -z
	vec3create([ 0,-1, 0]), //5 -y
	vec3create([-1, 0, 0])  //6 -x
];


var cubeDragSides = [
	//U  L  R  D
	[ 0, 0, 0, 0], //0
	[ 2, 3, 4, 5], //1 +x
	[ 0, 0, 0, 0], //2 +y
	[ 2, 6, 1, 5], //3 +z
	[ 2, 1, 6, 5], //4 -z
	[ 0, 0, 0, 0], //5 -y
	[ 2, 4, 3, 5], //6 -x
];

var cubelist = [
];

var border = new Float32Array([
	-1, -1, 
	 1, -1, 
	 1,  1, 
	-1,  1 
]); 

var tapped = false; 
var tapEvent = null; 
var dragged = false; 
var dragEvent = null; 
var eventPosition = { x : 0, y : 0 }; 

function recalcCamera() {
	var cameraWorldPos = tmpmatrix; 
	vec3add(cameraDir, cameraPos, cameraWorldPos); 
	mat4lookAt(cameraWorldPos, cameraDir, cameraUp, camera); 
}

function spinHorz(angle) { 
	var q = quat4fromAngleAxis(angle, cameraUp); 
	quat4multiplyVec3(q, cameraPos); 
	recalcCamera(); 
}

function spinVert(angle) { 
	var tmpvec = tmpmatrix; 
	var camHorz = vec3normalize( vec3cross(cameraUp, cameraPos, tmpvec) ); 
	var q = quat4fromAngleAxis(angle, camHorz); 
	quat4multiplyVec3(q, cameraPos); 
	vec3normalize( vec3cross( cameraPos, camHorz, cameraUp ) ); 
	recalcCamera(); 
}

function setup() {
	gl.enable( GL_DEPTH_TEST ); 
	//gl.enable( GL_SCISSOR_TEST ); 
	gl.enable( GL_CULL_FACE ); 
	gl.lineWidth(4.5); 
	gl.clearColor(0,0,0,0); 
	gl.viewport(0,0,canvas.width, canvas.height);  

	cubeBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);

	sphereBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, sphereBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, sphereData.rawData, GL_STATIC_DRAW);

	skyBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);
	
	var path = new Float32Array( 3 * map.path.length ); 
	var j = 0; 
	path[j++] = map.startingPosition.x;
	path[j++] = map.startingPosition.y;
	path[j++] = map.startingPosition.z;

	for(var i = 0; i !== map.path.length; i++) {
		path[j++] = map.path[i].x;
		path[j++] = map.path[i].y;
		path[j++] = map.path[i].z;
	}

	pathBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, pathBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, path, GL_STATIC_DRAW); 

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

var getClickDirection = (function() {
	var asisXMinus = vec3create([-1,0,0]); 
	var asisYMinus = vec3create([0,-1,0]); 
	var asisZMinus = vec3create([0,0,-1]); 

	var vectorNormals = [
		asisX,
		asisXMinus,	
		asisY,
		asisYMinus,	
		asisZ,
		asisZMinus
	]; 

	var cam = vec3create(); 
	var div = vec3create(); 

	return function(camPos) {
		vec3set(camPos, cam); 
		dlog("Pos", camPos); 
		vec3normalize(cam); 

		var lastLength = 99999; 
		var lastIndex = -1;

		for(var i = 0; i !== 6; i++) {
			var current = vectorNormals[i]; 
			vec3subtract(cam, current, div); 
			var length = vec3length(div); 
			if(lastLength > length) {
				lastLength = length; 
				lastIndex = i; 
			}
		} 	
		
		//return opposite direction 
		//so map 0->1, 2->3, 4->5, 1->0, 3->2, 5->4
		return vectorNormals[[1,0,3,2,5,4][lastIndex]];
	}; 
}()); 

function update(info) {
	var r = 0; 
	var g = 0; 
	var b = 0; 
	var a = 0; 
	var side = 0; 
	var selectedid = 0; 
	var touchedTheSky = false; 
	var touchedACube  = false; 

	if(tapped) {
		var dir = getClickDirection(cameraPos);
		dlog( dir ); 		
		sphere.tap(info, dir); 		
	} 

	if(dragged) {
		var disx = dragEvent.distanceX * 2 * Math.PI / canvas.width / -20; 
		var disy = dragEvent.distanceY * 2 * Math.PI / canvas.height / 20; 
		spinHorz(disx); 
		spinVert(disy); 
	}


	tapped = false; 
	dragged = false; 	

	sphere.tick(info); 
}

function draw(info) {
	gl.disable( GL_DEPTH_TEST ); 
	drawSky(program); 
	gl.enable( GL_DEPTH_TEST ); 

	gl.clear(GL_DEPTH_BUFFER_BIT); 
		
	drawCubes(program); 
	drawSphere(program); 
	drawPath(borderprogram, map.path); 
} 

function drawCubes(program) {
	gl.useProgram(program); 

	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	

	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 
	var aNormal    = gl.getAttribLocation(program, "aNormal"); 

	var modelviewprojection = tmpmatrix; 

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

		mat4multiply(projection, camera, modelviewprojection); 
		mat4translate(modelviewprojection, object.vector); 

		gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

		gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}	
}

function drawSphere(program) {
	gl.useProgram(program); 

	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	

	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 

	gl.bindBuffer(GL_ARRAY_BUFFER, sphereBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, sphereData.stride, sphereData.voffset); 
	gl.enableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sphereData.stride, sphereData.toffset); 
		gl.enableVertexAttribArray(aTextureuv); 
	}

	if(uTexture) {
		gl.bindTexture(GL_TEXTURE_2D, cubetex); 
		gl.uniform1i(uTexture, 0); 
	}

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, sphere.position); 

	gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	gl.drawArrays(GL_TRIANGLES, 0, sphereData.numVertices); 

}

function drawSky(program) {
	gl.useProgram(program); 

	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	
	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 
	
	assert(uModelviewprojection); 
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

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, cameraDir); 
	mat4translate(modelviewprojection, cameraPos); 

	gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	gl.drawArrays(GL_TRIANGLES, 0, sky.numVertices); 
}

function drawPath(program, path) {
	gl.useProgram(program); 

	var aVertex = gl.getAttribLocation(program, "aVertex"); 
	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var modelviewprojection = tmpmatrix; 
	
	assert(aVertex    !== -1); 
	assert(uModelviewprojection !== -1); 

	gl.bindBuffer(GL_ARRAY_BUFFER, pathBuffer); 

	gl.vertexAttribPointer(aVertex, 3, GL_FLOAT, false, 0, 0); 
	gl.enableVertexAttribArray(aVertex); 


	mat4multiply(projection, camera, modelviewprojection); 
	//mat4translate(modelviewprojection, object.vector); 

	gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 
	
	for(var i = 0; i !== map.path.length - 1; i++) { 
		gl.drawArrays(GL_LINES, i, 2); 
	}
}

function setCanvasForTexture(canvas, text) {
	gl.bindTexture(gl.TEXTURE_2D, text);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
}

function createTexture(img) {
	assert(img); 

	var tex = gl.createTexture(); 

	setCanvasForTexture(img, tex); 

	gl.bindTexture(GL_TEXTURE_2D, null); 		
	return tex; 
}

GLT.loadmanager.loadFiles({
	"files" : ["cube.obj", "sphere.obj", "diffuse.shader", "cube.png", "skybox.obj", "border.shader"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		sky  = files["skybox.obj"]; 
		sphereData = files["sphere.obj"]; 
		program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
		borderprogram = GLT.shader.compileProgram(gl,files["border.shader"]);
		cubetex = createTexture(files["cube.png"]);
		skytex = createTexture( funkycube.canvas );

		var MAX = 10; 

		var dotsposx = new Int32Array(MAX); 
		var dotsposy = new Int32Array(MAX); 
		var dotsdir  = new Int32Array(MAX); 
		var dotsface = new Int32Array(MAX); 

		for(var i = 0; i !== MAX; i++) {
			dotsposx[i] = (Math.random() * 16) | 0; //[0..15]
			dotsposy[i] = (Math.random() * 16) | 0; //[0..15]
			dotsdir[i]  = (Math.random() * 2) | 0;  //[0..1]
			dotsface[i] = (Math.random() * 6) | 0;  //[0..5]
		}

		setInterval(function() {
			funkycube.ctx.beginPath();
			funkycube.ctx.fillStyle = "#000000";
			funkycube.ctx.globalAlpha = 0.2; 
			funkycube.ctx.rect(0,0,64,64);        
			funkycube.ctx.fill();
			funkycube.ctx.globalAlpha = 1; 

			//Draw Dots
			for(var i = 0; i !== MAX; i++) {
				var posx = dotsposx[i]; 
				var posy = dotsposy[i]; 
				var dir = dotsdir[i]; 
				var face = dotsface[i]; 
				var posincanvas = funkycube.getCanvasCoordinate(face, posx, posy); 

				funkycube.ctx.beginPath();
				funkycube.ctx.fillStyle = "#FF0000"; 
				funkycube.ctx.rect(posincanvas.x,posincanvas.y, 1, 1); 
				funkycube.ctx.fill();

				if(dir) {
					dotsposx[i]++; 
				}
				else {			
					dotsposy[i]++; 
				}
			}

			setCanvasForTexture(funkycube.canvas, skytex); 	
		}, 100); 

		map = Map.create(49, 16);  

		for(var x = 0; x !== 16; x++) 
			for(var y = 0; y !== 16; y++) 
				for(var z = 0; z !== 16; z++) {
					var obj = map.getObject(x,y,z); 
					if(obj === Map.CUBE) { 
						cubelist.push( { vector : vec3create([x,y,z])} ); 
					}
				}

		cameraDir[0] = 8;
		cameraDir[1] = 8;
		cameraDir[2] = 8;

		sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }); 

		vec3set(cameraDir, cameraPos); 
		cameraPos[0] = 0; 	
		cameraPos[1] = 0;  	
		cameraPos[2] = 20; 	

		setup(); 
		recalcCamera(); 

		//(new GLT.Gameloop(gameloop)).start(); 
		GLT.requestGameFrame(gameloop); 
	}
});
	
dlog("DEBUG Build:", __DATE__, __TIME__); 

#undef PREVIEW_WIDTH  
#undef PREVIEW_HEIGHT 
#undef PREVIEW_BORDER 


