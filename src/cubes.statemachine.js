#include "cubes.js" 
#include "cubes.cube.js" 
#include "debug.js" 
#include "assert.js" 

#define STATE_NONE        0 
#define STATE_SKY_DRAG    1
#define STATE_CUBE_MARKED 2 
#define STATE_CUBE_DRAG   3
#define STATE_CUBE_MOVE   4

(function() { 
"use strict";  

cubes.Statemachine = function(cameraPos, cameraDir) {
	checktype(cameraPos, Float32Array); 
	checktype(cameraDir, Float32Array); 
	assert(cameraPos.length === 3); 
	assert(cameraDir.length === 3); 

	var state = STATE_NONE; 
	var speed = 2.0; 
	var markedCube = null; 
	var blingoffset = 0.0; 
	var direction = vec3.create(); 
	var tmpmatrix = mat4.create(); 

	function switchTocube(cube) {
		if(markedCube !== null) {
			markedCube.bling = 0.0; 
		}
		markedCube = cube; 
	}

	this.tap = function(info, cube, dir) {
		//cube might be null -> Sky

		switch(state) {
			case STATE_NONE: 
			case STATE_SKY_DRAG: 
			if(cube !== null) {
				switchTocube(cube); 			
				state = STATE_CUBE_MARKED; 
			}
			break; 

			case STATE_CUBE_MARKED: 
			if(cube === markedCube) {
				checkType(dir, Float32Array); //dir is a Float Array
				assert(dir.length === 3);     //dir a vec3 
				assert( Math.abs((vec3.length(dir) - 1.0)) < 0.0001 ); //dir is a Normal 

				blingoffset = info.time.total; 
				vec3.set(dir, direction); 
				markedCube.bling = 0.0; 
			} else if(cube instanceof cubes.cube) {
				switchTocube(cube); 			
			} else {
				switchTocube(null); 			
				state = STATE_NONE; 
			}
			break; 

			case STATE_CUBE_DRAG: 
			case STATE_CUBE_MOVE: 
			break; 

			default: 
			derr("Tap: unknown State", state); 
			break; 
		}
	};

	this.drag = function(info, cube) {
		//cube might be null -> Sky

		switch(state) {
			case STATE_NONE: 
			if(cube === null) {
				//Sky
				state = STATE_SKY_DRAG; 
			} else {
				state = STATE_CUBE_DRAG; 
			}
			break; 

			case STATE_SKY_DRAG: 			
			var rot = mat4.identity(tmpmatrix); 
			var negDir = vec3.create(cameraDir); 
			vec3.scale(negDir, -1); 

			mat4.translate(rot, negDir); 
			mat4.rotateY(rot, (-2 * Math.PI * dragEvent.distanceX / canvas.width) / 50); 
			mat4.translate(rot, cameraDir); 

			mat4.multiplyVec3(rot, cameraPos); 
			break; 

			case STATE_CUBE_MARKED: 
			if(cube === markedCube) {
				state = STATE_CUBE_DRAG; 
			} else if(cube instanceof cubes.Cube){
				switchTocube(cube); 			
			} else {
				switchTocube(null); 			
				state = STATE_NONE; 	
			}
			break; 

			case STATE_CUBE_DRAG: 

			break; 
		}
	};

	this.dragStart = function(info, cube) {	
		//cube might be null -> Sky
	};

	this.dragEnd = function(info, cube) {	
		//cube might be null -> Sky
	};

	this.tick = function(info, cube) {	
		//cube might be null -> Sky
	};

};

}()); 
