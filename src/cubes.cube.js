#ifndef CUBES_CUBE_JS
#define CUBES_CUBE_JS

#include <glmatrix.js> 
#include "debug.js" 
#include "cubes.js" 
#include "cubes.id.js" 
#include "assert.js" 

#define STATE_NONE   0 
#define STATE_MOVE   1
#define STATE_MARKED 2

cubes.Cube = (function() { 
	function Statemachine(cube) {		
		"use strict"; 

		var speed     = 2;

		var state     = STATE_NONE;  
		var grid      = cube.grid;
		var direction = vec3.create(); 
		var startpos  = vec3.create(); 
		var tmpvector = vec3.create();
		var blingoffset = 0.0; 

		this.tick = function(info) {		
			assert(info.time); 

			switch(state) {
				case STATE_NONE: 
				break; 

				case STATE_MARKED: 
				cube.bling = Math.abs(Math.sin(2.0 * Math.PI * (info.time.total - blingoffset))); 	
				break; 

				case STATE_MOVE: 
				vec3.add(cube.vector, vec3.scale(direction, info.time.delta * speed, tmpvector)); 
				vec3.subtract(cube.vector, startpos, tmpvector); 
				if(vec3.length(tmpvector) >= 1.0) {
					//we reached our destination.
					state = STATE_NONE; 
					vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector); 
					//TODO: Grid 
					cube.bling = 0; 
				}
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
		};

		this.tap = function(info, dir) {		
			assert( info.time ); 
			assert( dir instanceof Float32Array ); 
			assert( Math.abs((vec3.length(dir) - 1.0)) < 0.0001); 

			switch(state) {
				case STATE_NONE: 
				state = STATE_MARKED; 
				break; 

				case STATE_MOVE: 
				break; 

				case STATE_MARKED: 
				blingoffset = info.time.total; 
				direction = dir; 
				vec3.set(cube.vector, startpos); 
				cube.bling = 0; 
				state = STATE_MOVE; 
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
		};
	}

	return function(position, id) {
		assert("x" in position && "y" in position && "z" in position);
		assert(id instanceof cubes.Id); 

		var vect = vec3.create([position.x, position.y, position.z]);

		this.grid   = [position.x, position.y, position.z]; 
		this.id     = id; 	
		this.vector = vect; 
		this.bling  = 0; 

		var state  = new Statemachine(this); 

		this.tap = function(info, dir) {
			state.tap(info, dir); 
		}; 

		this.tick = function(info) {
			state.tick(info); 
		};
	};
}());


#undef STATE_NONE  
#undef STATE_MOVE 
#undef STATE_MARKED 


#endif 
