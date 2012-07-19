#ifndef CUBES_CUBEMACHINE_JS
#define CUBES_CUBEMACHINE_JS

#include <glmatrix.js>  
#include "cubes.js" 
#include "debug.js" 
#include "assert.js" 

#define STATE_NONE 0 
#define STATE_MOVE 1

cubes.Cubemachine = function Cubemachine(cube) {		
	"use strict"; 

	var speed     = 1;

	var state     = STATE_NONE;  
	var direction = vec3.create([0,0,0]); 
	var startpos  = vec3.create([0,0,0]); 
	var grid      = cube.grid;

	var tmpvector    = vec3.create([0,0,0]); 

	this.tick = function(sec) {		
		assert(typeof sec === "number"); 

		switch(state) {
			case STATE_NONE: 
			break; 

			case STATE_MOVE: 
			vec3.add(cube.vector, vec3.scale(direction, sec * speed, tmpvector)); 
			vec3.subtract(cube.vector, startpos, tmpvector); 
			if(vec3.length(tmpvector) >= 1.0) {
				//we reached out destination.
				state = STATE_NONE; 
				vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector); 
				//TODO: Grid 
			}
			break; 

			default: 
			derr("unknow state.", state); 
			break; 
		}
	};

	this.tap = function(dir) {		
		assert(dir instanceof Float32Array); 
		assert(Math.abs((vec3.length(dir) - 1.0)) < 0.0001 ); 

		switch(state) {
			case STATE_NONE: 
			direction = dir; 
			vec3.set(cube.vector, startpos); 
			state = STATE_MOVE; 
			break; 

			case STATE_MOVE: 
			break; 

			default: 
			derr("unknow state.", state); 
			break; 
		}
			
	};
};

#undef STATE_NONE  
#undef STATE_MOVE 


#endif 
