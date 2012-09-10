#include <glconstants.js> 
#include <glt.createcontext.js>  
#include <glt.requestgameframe.js>  
#include <glt.loadmanager.js>  
#include <glt.shader.js>  
#include <jsfxr.js> 
#include "input.js" 
#include "debug.js" 
#include "math.js" 
#include "assert.js"
#include "sphere.js"
#include "random.js" 
#include "funkycube.js" 
#include "map.js" 

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
var funkycube = new Funkycube(); 

var canvas = document.getElementsByTagName("canvas")[0]; 
var gl = GLT.createContext(canvas); 

var input = new Input(canvas); 

var projection = mat4perspective(60, canvas.width / canvas.height, 0.1, 1000); 
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

var cubelist = [];
var goalpos = vec3create(); 

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

	goalBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, goalBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, goal.rawData, GL_STATIC_DRAW); 
	
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

	pathBuffer = gl.createBuffer(); 
	gl.bindBuffer(GL_ARRAY_BUFFER, pathBuffer); 
	gl.bufferData(GL_ARRAY_BUFFER, path, GL_STATIC_DRAW); 
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
	if(input.poke) {
		var dir = getClickDirection(cameraPos);
		sphere.tap(info, dir); 		
	} 

	if(input.drag) {
		var disx = input.dragDirection.x * 2 * Math.PI / canvas.width; 
		var disy = input.dragDirection.y * 2 * Math.PI / canvas.height; 
		spinHorz(disx); 
		spinVert(disy); 
	}

	input.update(); 
	sphere.tick(info); 
}

function draw(info) {
	gl.disable( GL_DEPTH_TEST ); 
	drawSky(program); 
	gl.enable( GL_DEPTH_TEST ); 

	gl.clear(GL_DEPTH_BUFFER_BIT); 
		
	drawCubes(program); 
	drawSphere(program); 
	drawGoal(program); 
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

function drawGoal(program) {
	gl.useProgram(program); 

	var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection"); 
	var uTexture   = gl.getUniformLocation(program, "uTexture"); 	

	var aVertex    = gl.getAttribLocation(program, "aVertex"); 
	var aTextureuv = gl.getAttribLocation(program, "aTextureuv"); 

	var modelviewprojection = tmpmatrix; 

	gl.bindBuffer(GL_ARRAY_BUFFER, goalBuffer); 

	gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, goal.stride, goal.voffset); 
	gl.enableVertexAttribArray(aVertex); 

	if(aTextureuv !== -1) {
		gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, goal.stride, goal.toffset); 
		gl.enableVertexAttribArray(aTextureuv); 
	}

	if(uTexture) {
		gl.bindTexture(GL_TEXTURE_2D, cubetex); 
		gl.uniform1i(uTexture, 0); 
	}

	mat4multiply(projection, camera, modelviewprojection); 
	mat4translate(modelviewprojection, goalpos); 

	gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection); 

	gl.drawArrays(GL_TRIANGLES, 0, goal.numVertices); 
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
	"files" : ["cube.obj", "sphere.obj", "diffuse.shader", "cube.png", "skybox.obj", "border.shader", "goal.obj"], 
	"update" : function(p,q) { dlog(p,q); }, 
	"error" : function(file, err) {
		derr(file, err); 
	}, 
	"finished" : function(files) {
		cube = files["cube.obj"]; 
		sky  = files["skybox.obj"]; 
		sphereData = files["sphere.obj"]; 
		goal = files["goal.obj"]; 
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

		var seed = (0xFFFF * Math.random()) & 0xFFFF; 
		dlog("SEED", seed); 
		map = MapCreate(seed);  

		for(var x = 0; x !== 16; x++) 
			for(var y = 0; y !== 16; y++) 
				for(var z = 0; z !== 16; z++) {
					var obj = map.getObject(x,y,z); 
					if(obj === MAP_CUBE) { 
						cubelist.push( { vector : vec3create([x,y,z])} ); 
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

		sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }, map); 

		vec3set(cameraDir, cameraPos); 
		cameraPos[0] = 0; 	
		cameraPos[1] = 0;  	
		cameraPos[2] = 20; 	

		setup(); 
		recalcCamera(); 

		//(new GLT.Gameloop(gameloop)).start(); 
		GLT.requestGameFrame(gameloop); 


		//TEST AUDIO 
		var params = {"oldParams":true,"wave_type":3,"p_env_attack":0,"p_env_sustain":0.3507373180706054,"p_env_punch":0.7507036675233394,"p_env_decay":0.1148287485120818,"p_base_freq":0.030365511453751274,"p_freq_limit":0,"p_freq_ramp":0,"p_freq_dramp":0,"p_vib_strength":0,"p_vib_speed":0,"p_arp_mod":0,"p_arp_speed":0,"p_duty":0,"p_duty_ramp":0,"p_repeat_speed":0.7296395279234276,"p_pha_offset":-0.2251016782131046,"p_pha_ramp":-0.2945099702104926,"p_lpf_freq":1,"p_lpf_ramp":0,"p_lpf_resonance":0,"p_hpf_freq":0,"p_hpf_ramp":0,"sound_vol":0.25,"sample_rate":44100,"sample_size":8};

		var pdead = {"oldParams":true,"wave_type":0,"p_env_attack":-0.031099240445367497,"p_env_sustain":0.7635753833033847,"p_env_punch":0.2816417110611466,"p_env_decay":-0.6867234703619033,"p_base_freq":-0.05417757730129136,"p_freq_limit":0,"p_freq_ramp":0.366020674391696,"p_freq_dramp":0.061304970543220046,"p_vib_strength":-0.13391388831049597,"p_vib_speed":-0.08958338294178247,"p_arp_mod":0.7950661345385015,"p_arp_speed":0.5519341775216162,"p_duty":0.6044134241528809,"p_duty_ramp":0.8909097971481785,"p_repeat_speed":0.2607004144228995,"p_pha_offset":-0.00018430166566930404,"p_pha_ramp":0.8547329901213455,"p_lpf_freq":0.9224470124042238,"p_lpf_ramp":0.007261712532774577,"p_lpf_resonance":0.8195562218315899,"p_hpf_freq":2.3264287110167006e-7,"p_hpf_ramp":-0.6950668630055059,"sound_vol":0.25,"sample_rate":44100,"sample_size":8}; 

		var pblob = {"oldParams":true,"wave_type":0,"p_env_attack":-0.018341900495896277,"p_env_sustain":0.3757311985941444,"p_env_punch":-0.003057873247569856,"p_env_decay":0.06331000293139369,"p_base_freq":0.1656650181731793,"p_freq_limit":0,"p_freq_ramp":-0.0589514924457087,"p_freq_dramp":0.030146547487526147,"p_vib_strength":-0.019250509277321262,"p_vib_speed":0.5508432540111242,"p_arp_mod":0.8034108052030207,"p_arp_speed":0.16075012690853327,"p_duty":-0.04733387050218882,"p_duty_ramp":0.46016203196294625,"p_repeat_speed":-0.17416390222497286,"p_pha_offset":0.14307537902977768,"p_pha_ramp":-0.421786501233935,"p_lpf_freq":0.41369926108195854,"p_lpf_ramp":-0.2612435719273578,"p_lpf_resonance":-0.9390350750647485,"p_hpf_freq":0.16551226912858946,"p_hpf_ramp":-0.10125760095251089,"sound_vol":0.25,"sample_rate":44100,"sample_size":8,"p_vib_delay":null}; 

		var pfreu = {"oldParams":true,"wave_type":0,"p_env_attack":-0.004527911166038838,"p_env_sustain":0.840333883056117,"p_env_punch":0.32125634341977,"p_env_decay":0.8337062487844378,"p_base_freq":0.9230462823158505,"p_freq_limit":0,"p_freq_ramp":0.054141002534628405,"p_freq_dramp":0.028436068801879585,"p_vib_strength":0.05286053257716272,"p_vib_speed":0.7490090135484934,"p_arp_mod":0.002945324592292308,"p_arp_speed":-0.2514595840359107,"p_duty":-0.538211698899977,"p_duty_ramp":-0.02350955880296343,"p_repeat_speed":-0.3621571579016745,"p_pha_offset":0.05005980333720715,"p_pha_ramp":0.03782556013502259,"p_lpf_freq":0.9357535395725334,"p_lpf_ramp":-0.7541079941455712,"p_lpf_resonance":0.6400827742181718,"p_hpf_freq":1.0007283491126555,"p_hpf_ramp":0.42763103001397496,"sound_vol":0.25,"sample_rate":44100,"sample_size":8,"p_vib_delay":null}; 


		var SOUND = new Sfxr.SoundEffect(pdead).generate(); 
		var audio = new Audio(); 
		audio.src = SOUND.dataURI
		//audio.play(); 
	}
});
	
dlog("DEBUG Build:", __DATE__, __TIME__); 


