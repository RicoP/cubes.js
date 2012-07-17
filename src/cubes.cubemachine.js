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

	this.state = STATE_NONE;  
	this.direction = vec3.create([0,0,0]); 

	this.tick = function(ms) {		
		switch(state) {
			case STATE_NONE: 
			break; 

			case STATE_MOVE: 
			
			break; 

			case default: 
			derr("unknow state.", state); 
			break; 
		}
	};

	this.tap = function(dir) {
		assert(dir instanceof Float32Array); 
		this.direction = dir; 
			
	};
};

#endif 
