#include <glconstants.js> 
#include <glmatrix.js> 
#include <glt.createcontext.js>  
#include <glt.requestgameframe.js>  
#include <glt.loadmanager.js>  
#include <glt.shader.js>  
#include <hammer.js>  
#include "debug.js" 
#include "assert.js"
#include "id.js"
#include "cube.js"
#include "sphere.js"
#include "random.js" 
#include "statemachine.js" 
#include "funkycube.js" 

#define PREVIEW_WIDTH 180
#define PREVIEW_HEIGHT 135
#define PREVIEW_BORDER 15

var cube; 
var sphereData; 
var sphere; 
var sky; 
var program; 
var borderprogram; 
var idprogram; 
var cubeBuffer; 
var sphereBuffer; 
var skyBuffer; 
var borderBuffer; 
var funkycube = new Funkycube(); 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = GLT.createContext(canvas); 

var projection = mat4.perspective(60, 4/3, 0.1, 1000); 
var cameraPos  = vec3.create(); 
var cameraDir  = vec3.create(); 
var cameraUp   = vec3.create([0,1,0]); 
var camera     = mat4.identity();  

var tmpmatrix = mat4.create();  

var cubetex = null; 
var skytex = null; 

var asisX = vec3.create([1,0,0]); 
var asisY = vec3.create([0,1,0]); 
var asisZ = vec3.create([0,0,1]); 

var cameraRotX = 0; 
var cameraRotY = 0; 
var cameraRotZ = 0; 

var cubeNormals = [
	vec3.create([ 0, 0, 0]), //None 
	vec3.create([ 1, 0, 0]), //1 +x
	vec3.create([ 0, 1, 0]), //2 +y
	vec3.create([ 0, 0, 1]), //3 +z
	vec3.create([ 0, 0,-1]), //4 -z
	vec3.create([ 0,-1, 0]), //5 -y
	vec3.create([-1, 0, 0])  //6 -x
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
	//new cubes.Cube({ x : 0, y : 0, z : 0 }, idgen.next()), 
	//new cubes.Cube({ x : 0, y : 0, z : 1 }, idgen.next()) 
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
	vec3.add(cameraDir, cameraPos, cameraWorldPos); 
	mat4.lookAt(cameraWorldPos, cameraDir, cameraUp, camera); 
}

function spinHorz(angle) { 
	var q = quat4.fromAngleAxis(angle, cameraUp); 
	quat4.multiplyVec3(q, cameraPos); 
	recalcCamera(); 
}

function spinVert(angle) { 
	var tmpvec = tmpmatrix; 
	var camHorz = vec3.normalize( vec3.cross(cameraUp, cameraPos, tmpvec) ); 
	var q = quat4.fromAngleAxis(angle, camHorz); 
	quat4.multiplyVec3(q, cameraPos); 
	vec3.normalize( vec3.cross( cameraPos, camHorz, cameraUp ) ); 
	recalcCamera(); 
}

function setup() {
	gl.enable( GL_DEPTH_TEST ); 
	gl.enable( GL_SCISSOR_TEST ); 
	gl.enable( GL_CULL_FACE ); 
	gl.lineWidth(4.5); 
	gl.clearColor(0,0,0,0); 

	cubeBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);

	sphereBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, sphereBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, sphereData.rawData, GL_STATIC_DRAW);

	skyBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);

	borderBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, borderBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, border, GL_STATIC_DRAW); 

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
	var asisXMinus = vec3.create([-1,0,0]); 
	var asisYMinus = vec3.create([0,-1,0]); 
	var asisZMinus = vec3.create([0,0,-1]); 

	var vectorNormals = [
		asisX,
		asisXMinus,	
		asisY,
		asisYMinus,	
		asisZ,
		asisZMinus
	]; 

	var cam = vec3.create(); 
	var div = vec3.create(); 

	return function(camPos, camDir) {
		vec3.subtract(camPos, camDir, cam); 
		dlog("Pos", camPos, "dir", camDir); 
		vec3.normalize(cam); 

		var lastLength = 99999; 
		var lastIndex = -1;

		for(var i = 0; i !== 6; i++) {
			var current = vectorNormals[i]; 
			vec3.subtract(cam, current, div); 
			var length = vec3.length(div); 
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
		dlog( getClickDirection(cameraPos, cameraDir) ); 		
	} 

	if(dragged) {
		var disx = dragEvent.distanceX * 2 * Math.PI / canvas.width / -20; 
		var disy = dragEvent.distanceY * 2 * Math.PI / canvas.height / 20; 
		dlog(disx, disy); 
		spinHorz(disx); 
		spinVert(disy); 
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

	gl.clearDepth(1); 
	gl.clear(GL_DEPTH_BUFFER_BIT); 
	var viewport = gl.getParameter(GL_VIEWPORT); 
	var x = viewport[0]; 
	var y = viewport[1]; 
	var w = viewport[2]; 
	var h = viewport[3]; 

	gl.scissor(w - PREVIEW_WIDTH - PREVIEW_BORDER, PREVIEW_BORDER, PREVIEW_WIDTH, PREVIEW_HEIGHT); 
	gl.viewport(w - PREVIEW_WIDTH - PREVIEW_BORDER, PREVIEW_BORDER, PREVIEW_WIDTH, PREVIEW_HEIGHT); 
	drawBorder(borderprogram); 
	drawCubes(program); 

	gl.clearDepth(0); 
	gl.clear(GL_DEPTH_BUFFER_BIT); 

	gl.scissor(x,y,w,h);  
	gl.viewport(x,y,w,h);  

	drawCubes(program); 
	drawSphere(program); 
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

function drawCubes(program) {
	gl.useProgram(program); 

	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var uIdColor   = gl.getUniformLocation(program, "uIdColor"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	
	var uBling     = gl.getUniformLocation(program, "uBling");   	

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

		if(uIdColor) {
			gl.uniform3fv(uIdColor, object.id.asColor()); 
		}

		if(uBling) {
			gl.uniform1f(uBling, object.bling); 
		}

		mat4.multiply(projection, camera, modelviewprojection); 
		mat4.translate(modelviewprojection, object.vector); 

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

	mat4.multiply(projection, camera, modelviewprojection); 
	mat4.translate(modelviewprojection, sphere.position); 

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

	mat4.multiply(projection, camera, modelviewprojection); 
	mat4.translate(modelviewprojection, cameraDir); 
	mat4.translate(modelviewprojection, cameraPos); 

	gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	gl.drawArrays(GL_TRIANGLES, 0, sky.numVertices); 
}

function drawBorder(program) {
	gl.useProgram(program); 

	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	
	assert(aVertex    !== -1); 

	gl.bindBuffer(GL_ARRAY_BUFFER, borderBuffer); 

	gl.vertexAttribPointer(aVertex, 2, GL_FLOAT, false, 0, 0); 
	gl.enableVertexAttribArray(aVertex); 
	
	gl.drawArrays(GL_LINE_LOOP, 0, 4); 
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
	"files" : ["cube.obj", "sphere.obj", "diffuse.shader", "id.shader", "cube.png", "skybox3.obj", "border.shader", "map1.json"], 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		sky  = files["skybox3.obj"]; 
		sphereData = files["sphere.obj"]; 
		program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
		idprogram = GLT.shader.compileProgram(gl,files["id.shader"]);
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

		var mapdata = files["map1.json"]; 
		var idgen = new Id.Generator(); 

		for(var i = 0; i != mapdata.cubes.length; i++) {
			var cubepos = mapdata.cubes[i]; 
			cubelist.push( new Cube({ x : cubepos[0], y : cubepos[1], z : cubepos[2] }, idgen.next()) );
			//cubelist.push( new Cube(map.cubes[i].position, idgen.next()) ); 
		}

		cameraDir[0] = 8;
		cameraDir[1] = 8;
		cameraDir[2] = 8;

		sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }); 

		vec3.set(cameraDir, cameraPos); 
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


