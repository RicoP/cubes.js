#include <glt.createcontext.js>  
#include <glt.requestgameframe.js>  
#include <glt.loadmanager.js>  
#include <glt.shader.js>  
#include "input.js" 
#include "debug.js" 
#include "math.js" 
#include "assert.js"
#include "sphere.js"
#include "cube.js"
#include "random.js" 
#include "funkycube.js" 
#include "map.js" 
#include "glconstants.js"

var cube; 
var sphereData; 
var sphere; 
var sky; 
var goal; 
var goalBuffer; 
var program; 
var borderprogram; 
var cubeBuffer; 
var sphereBuffer; 
var skyBuffer; 
var borderBuffer; 
var map; 
var showPath = false; 
var render = true; 
var funkycube = new Funkycube(); 
var funkycubecolor = "#FF0000"; 
var funkyid = 0; 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = GLT.createContext(canvas); 

if(!gl) { 
	#ifdef RELEASE 
		location = "http://get.webgl.org";
		return; 
	#endif
}

#include "glcalls.js" 

var input = new Input(canvas); 

var projection = mat4perspective(75, canvas.width / canvas.height, 0.1, 1000); 
var cameraPos  = vec3create(); 
var cameraDir  = vec3create(); 
var cameraUp   = vec3create([0,1,0]); 
var camera     = mat4identity();  
var cameraScale = 15; 

canvas.onmousewheel = function(ev) {
	var d = ev.wheelDelta; 
	if(d>0) cameraScale -= 0.5; 
	if(d<0) cameraScale += 0.5; 
	cameraScale = Math.min(20, Math.max(10, cameraScale)); 
	recalcCamera(); 
};

var tmpmatrix = mat4create();  
var tmpvector = vec3create(); 

var cubetex = null; 
var skytex = null; 
var spheretex = null; 
var hearttex = null; 

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


var cubelist = [];
var goalpos = vec3create(); 

var tapped = false; 
var tapEvent = null; 
var dragged = false; 
var dragEvent = null; 
var eventPosition = { x : 0, y : 0 }; 

function recalcCamera() {
	var cameraWorldPos = tmpmatrix; 
	vec3set(cameraPos, cameraWorldPos); 
	vec3scale(cameraWorldPos, cameraScale); 
	vec3add(cameraWorldPos, cameraDir); 

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
	glEnable( GL_DEPTH_TEST ); 
	glEnable( GL_CULL_FACE ); 
	glLineWidth(4.5); 
	glClearColor(0,0,0,0); 
	glViewport(0,0,canvas.width, canvas.height);  

	cubeBuffer = glCreateBuffer(); 
	glBindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 
	glBufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);

	sphereBuffer = glCreateBuffer(); 
	glBindBuffer(GL_ARRAY_BUFFER, sphereBuffer); 
	glBufferData(GL_ARRAY_BUFFER, sphereData.rawData, GL_STATIC_DRAW);

	skyBuffer = glCreateBuffer(); 
	glBindBuffer(GL_ARRAY_BUFFER, skyBuffer); 
	glBufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);

	goalBuffer = glCreateBuffer(); 
	glBindBuffer(GL_ARRAY_BUFFER, goalBuffer); 
	glBufferData(GL_ARRAY_BUFFER, goal.rawData, GL_STATIC_DRAW); 
/*	
	var path = new Float32Array( 3 * map.path.length ); 
	var j = 0; 
	path[j++] = map.startingPosition.x;
	path[j++] = map.startingPosition.y;
	path[j++] = map.startingPosition.z;

	for(var i = 0; i !== map.path.length; i++) {
		path[j++] = map.path[i][0];
		path[j++] = map.path[i][1];
		path[j++] = map.path[i][2];
	}

	pathBuffer = glCreateBuffer(); 
	glBindBuffer(GL_ARRAY_BUFFER, pathBuffer); 
	glBufferData(GL_ARRAY_BUFFER, path, GL_STATIC_DRAW); 
	*/
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
	if(GLT.keys.wasReleased(GLT.keys.codes.p)) {
		showPath = !showPath; 
	}

	if(input.poke || GLT.keys.wasPressed(GLT.keys.codes.space)) {
		var dir = getClickDirection(cameraPos);
		sphere.tap(info, dir);
	} 

	if(input.drag) {
		var disx = input.dragDirection.x * 2 * Math.PI / canvas.width; 
		var disy = input.dragDirection.y * 2 * Math.PI / canvas.height; 
		spinHorz(disx); 
		spinVert(disy); 
	}

	if(GLT.keys.isDown(GLT.keys.codes.left) || GLT.keys.isDown(GLT.keys.codes.a)) {
		spinHorz(info.delta * Math.PI); 
	} 
 	if(GLT.keys.isDown(GLT.keys.codes.right) || GLT.keys.isDown(GLT.keys.codes.d)) {
		spinHorz(-info.delta * Math.PI); 
	} 
 	if(GLT.keys.isDown(GLT.keys.codes.up) || GLT.keys.isDown(GLT.keys.codes.w)) {
		spinVert(info.delta * Math.PI); 
	} 
 	if(GLT.keys.isDown(GLT.keys.codes.down) || GLT.keys.isDown(GLT.keys.codes.s)) {
		spinVert(-info.delta * Math.PI); 
	} 
 

	if(sphere.isWinning()) {
		loadNextLevel(); 
	} 

	input.update(); 
	sphere.tick(info); 
}

function draw(info) {
	glDisable( GL_DEPTH_TEST ); 
	drawSky(program); 
	glEnable( GL_DEPTH_TEST ); 

	glClear(GL_DEPTH_BUFFER_BIT); 
	
	if(render) { 
	drawCubes(program); 
	drawSphere(program); 
	drawGoal(program, info); 
	#ifndef RELEASE 
		if(showPath) { 
			drawPath(borderprogram, map.path); 
		} 
	#endif 
	}
} 

function drawCubes(program) {
	glUseProgram(program); 

	var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = glGetUniformLocation(program, "uTexture"); 	
	//uniform vec2 uTextureOffset; 
	var uTextureOffset = glGetUniformLocation(program, "uTextureOffset"); 

	var aVertex    = glGetAttribLocation(program, "aVertex"); 
	var aTextureuv = glGetAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 

	glBindBuffer(GL_ARRAY_BUFFER, cubeBuffer); 

	glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset); 
	glEnableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, cube.stride, cube.toffset); 
		glEnableVertexAttribArray(aTextureuv); 
	}

	if(uTexture) {
		glBindTexture(GL_TEXTURE_2D, cubetex); 
		glUniform1i(uTexture, 0); 
	}

	for(var i = 0; i != cubelist.length; i++) { 
		var object = cubelist[i]; 

		if(uTextureOffset) {
			switch(object.getFace()) {
				case FACE_NEUTRAL: 
				glUniform2f(uTextureOffset, 0,0); 
				break; 

				case FACE_HAPPY: 
				glUniform2f(uTextureOffset, 10/32,0); 
				break; 

				case FACE_LOVE: 
				glUniform2f(uTextureOffset, 10/32,10/32); 
				break; 

				case FACE_SAD: 
				glUniform2f(uTextureOffset, 0,10/32); 
				break; 

				case FACE_HOPE: 
				glUniform2f(uTextureOffset, 20/32,0); 
				break; 
			}
		}

		mat4multiply(projection, camera, modelviewprojection); 
		mat4translate(modelviewprojection, object.position); 

		glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

		glDrawArrays(GL_TRIANGLES, 0, cube.numVertices); 
	}	
}

function drawSphere(program) {
	glUseProgram(program); 

	var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = glGetUniformLocation(program, "uTexture"); 	

	var aVertex    = glGetAttribLocation(program, "aVertex"); 
	var aTextureuv = glGetAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 

	glBindBuffer(GL_ARRAY_BUFFER, sphereBuffer); 

	glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, sphereData.stride, sphereData.voffset); 
	glEnableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sphereData.stride, sphereData.toffset); 
		glEnableVertexAttribArray(aTextureuv); 
	}

	if(uTexture) {
		glBindTexture(GL_TEXTURE_2D, spheretex); 
		glUniform1i(uTexture, 0); 
	}

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, sphere.position); 
	if(sphere.size !== 1.0) {  
		mat4scale(modelviewprojection, [sphere.size, sphere.size, sphere.size]); 
	}

	glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	glDrawArrays(GL_TRIANGLES, 0, sphereData.numVertices); 
}

function drawGoal(program, info) {
	glUseProgram(program); 

	var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = glGetUniformLocation(program, "uTexture"); 	

	var aVertex    = glGetAttribLocation(program, "aVertex"); 
	var aTextureuv = glGetAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 

	glBindBuffer(GL_ARRAY_BUFFER, goalBuffer); 

	glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, goal.stride, goal.voffset); 
	glEnableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, goal.stride, goal.toffset); 
		glEnableVertexAttribArray(aTextureuv); 
	}

	if(uTexture) {
		glBindTexture(GL_TEXTURE_2D, hearttex); 
		glUniform1i(uTexture, 0); 
	}

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, goalpos); 
	mat4rotateY(modelviewprojection, info.total); 

	glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	glDrawArrays(GL_TRIANGLES, 0, goal.numVertices); 
}

function drawSky(program) {
	glUseProgram(program); 

	var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = glGetUniformLocation(program, "uTexture"); 	
	var aVertex    = glGetAttribLocation(program, "aVertex"); 
	var aTextureuv = glGetAttribLocation(program, "aTextureuv"); 
	var uTextureOffset = glGetUniformLocation(program, "uTextureOffset"); 

	var modelviewprojection = tmpmatrix; 
	
	assert(uModelviewprojection); 
	assert(uTexture); 
	assert(aTextureuv !== -1); 
	assert(aVertex    !== -1); 

	glBindBuffer(GL_ARRAY_BUFFER, skyBuffer); 

	glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, sky.stride, sky.voffset); 
	glEnableVertexAttribArray(aVertex); 

	glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sky.stride, sky.toffset); 
	glEnableVertexAttribArray(aTextureuv); 

	glBindTexture(GL_TEXTURE_2D, skytex); 
	glUniform1i(uTexture, 0); 

	var camPos = vec3set(cameraPos, tmpvector); 	
	vec3scale(camPos, cameraScale); 

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, cameraDir); 
	mat4translate(modelviewprojection, camPos); 

	glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 
	glUniform2f(uTextureOffset, 0,0); 

	glDrawArrays(GL_TRIANGLES, 0, sky.numVertices); 
}

function drawPath(program, path) {
	glUseProgram(program); 

	var aVertex = glGetAttribLocation(program, "aVertex"); 
	var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection"); 
	var modelviewprojection = tmpmatrix; 
	
	assert(aVertex    !== -1); 
	assert(uModelviewprojection !== -1); 

	glBindBuffer(GL_ARRAY_BUFFER, pathBuffer); 

	glVertexAttribPointer(aVertex, 3, GL_FLOAT, false, 0, 0); 
	glEnableVertexAttribArray(aVertex); 


	mat4multiply(projection, camera, modelviewprojection); 
	//mat4translate(modelviewprojection, object.vector); 

	glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 
	
	for(var i = 0; i !== map.path.length - 1; i++) { 
		glDrawArrays(GL_LINES, i, 2); 
	}
}

function setCanvasForTexture(canvas, text) {
	glBindTexture(GL_TEXTURE_2D, text);
	glPixelStorei(GL_UNPACK_FLIP_Y_WEBGL, true);
	glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, canvas);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
}

function createTexture(img) {
	assert(img); 

	var tex = glCreateTexture(); 

	setCanvasForTexture(img, tex); 

	glBindTexture(GL_TEXTURE_2D, null); 		
	return tex; 
}

/* Following canvas-based Perlin generation code originates from
 * iron_wallaby's code at: http://www.ozoneasylum.com/30982
 */
function randomNoise(mode, canvas, x, y, width, height, alpha) {
    x = x || 0;
    y = y || 0;
    width = width || canvas.width;
    height = height || canvas.height;
    alpha = alpha || 255;
    var g = canvas.getContext("2d"),
        imageData = g.getImageData(x, y, width, height),
        random = Math.random,
        pixels = imageData.data,
        n = pixels.length,
        i = 0;
    while (i < n) {
		if(mode === 1) { 
	        pixels[i+0] = (random() * 256) | 0;
			pixels[i+1] = 0; 
			pixels[i+2] = 0; 
			pixels[i+3] = alpha; 
		}
		else {
			pixels[i+0] = 0; 
		    pixels[i+1] = (random() * 256) | 0;
			pixels[i+2] = 0; 
			pixels[i+3] = alpha; 
		}
		i += 4; 
    }
    g.putImageData(imageData, x, y);
    return canvas;
}

function createCanvas(w,h) {
	var c = document.createElement("canvas"); 
	c.width=w; 
	c.height=h; 
	return c; 
}

function perlinNoise(canvas, mode) {
    var noise = randomNoise(mode, createCanvas(canvas.width, canvas.height));
    var g = canvas.getContext("2d");
    g.save();
    
    /* Scale random iterations onto the canvas to generate Perlin noise. */
    for (var size = 4; size <= noise.width; size *= 2) {
        var x = (Math.random() * (noise.width - size)) | 0,
            y = (Math.random() * (noise.height - size)) | 0;
        g.globalAlpha = 4 / size;
        g.drawImage(noise, x, y, size, size, 0, 0, canvas.width, canvas.height);
    }

    g.restore();
    return canvas;
}

var level = [15905,26470,43162,62220,11365,10170,61515,54975,35340,14145,8364 ]; 

function loadNextLevel() {
	var seed = level.shift(); 

	if(!seed) {
		//alert("Congratulation. But beat every level!"); 
		render = false; 

	/*	var color = 255; 
		var interid = setInterval(function() {
			if(color <0) { 
				color = 0; 
				clearInterval(interid); 	
				clearInterval(funkyid); 
			}

			funkycubecolor = "#" + color.toString(16).toUpperCase() + "0000";
			//dlog(funkycubecolor); 

			color-=10;
		}, 100);*/

		return; 
	}

	dlog("SEED", seed); 
	map = MapCreate(seed);  

	cubelist = []; 

	for(var x = 0; x !== 16; x++) 
		for(var y = 0; y !== 16; y++) 
			for(var z = 0; z !== 16; z++) {
				var obj = map.getObject(x,y,z); 
				if(obj === MAP_CUBE) { 
					cubelist.push( new Cube( vec3create([x,y,z]) ) ); 
				}
				else if(obj === MAP_GOAL) {
					goalpos[0] = x; 
					goalpos[1] = y; 
					goalpos[2] = z; 
				}
			}

	cameraDir[0] = map.startingPosition.x;
	cameraDir[1] = map.startingPosition.x;
	cameraDir[2] = map.startingPosition.x;

	sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }, cubelist, goalpos, map.dimension); 

	vec3set(cameraDir, cameraPos); 
	cameraPos[0] = 0; 	
	cameraPos[1] = 0;  	
	cameraPos[2] = 1; 	

	recalcCamera(); 
}

GLT.loadmanager.loadFiles({
	"files" : ["cube.obj", "sphere.obj", "diffuse.shader", "faces.gif", "skybox.obj", "border.shader", "heart.obj"], 
	//"update" : function(p,q) { dlog(p,q); }, 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		sky  = files["skybox.obj"]; 
		sphereData = files["sphere.obj"]; 
		goal = files["heart.obj"]; 
		program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
		borderprogram = GLT.shader.compileProgram(gl,files["border.shader"]);
		cubetex = createTexture(files["faces.gif"]);
		skytex = createTexture( funkycube.canvas );

		var tmpcanvas = document.createElement("canvas"); 
		tmpcanvas.width = tmpcanvas.height = 8; 


		spheretex = createTexture( perlinNoise(tmpcanvas,2) );
		hearttex = createTexture( perlinNoise(tmpcanvas,1) );

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

		var color = 255; 
		var pleasestop = false; 
		funkyid = setInterval(function() {
			if(pleasestop) return; 

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
				funkycube.ctx.fillStyle = funkycubecolor; 
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

			if(!render) {
				if(color === 0) {
					clearInterval(funkyid); 

					gl.clearColor(0,0,0,0);
					gl.clear(GL_COLOR_BUFFER_BIT); 					
					GLT = 0; // UGLY!  
					pleasestop = true;
				}

				funkycubecolor = "#" + color.toString(16) + "0000"; 

				color -= 5; 
				if(color < 0) color = 0; 
			}
		}, 100); 

		loadNextLevel(); 

		//(new GLT.Gameloop(gameloop)).start(); 
		GLT.requestGameFrame(gameloop); 

		setup(); 
		spinHorz(3.14/4); 
		spinVert(-3.14/4); 
	}
});
	
dlog("DEBUG Build:", __DATE__, __TIME__); 



