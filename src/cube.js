#ifndef CUBES_CUBE_JS
#define CUBES_CUBE_JS

#include <glmatrix.js> 
#include "debug.js" 
#include "id.js" 
#include "assert.js" 

#define STATE_NONE   0 
#define STATE_MOVE   1
#define STATE_MARKED 2

var Cube = (function() { 
	var tmpvector  = vec3.create();

	function Statemachine(cube) {		
		"use strict"; 

		var speed = 2.0;

		var state       = STATE_NONE;  
		var grid        = cube.grid;
		var direction   = vec3.create(); 
		var startpos    = vec3.create(); 
		var blingoffset = 0.0; 
		var movetime    = 0; 

		this.tick = function(time) {		
			switch(state) {
				case STATE_NONE: 
				break; 

				case STATE_MARKED: 
				cube.bling = 0.618 * Math.sin(2.0 * Math.PI * (time.total - blingoffset)); 	
				break; 

				case STATE_MOVE: 
				vec3.add(cube.vector, vec3.scale(direction, time.delta * speed, tmpvector)); 
				movetime += time.delta * speed;
				if(movetime >= 1) {
					//we reached our destination.
					state = STATE_NONE; 
					vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector); 
					//TODO: Grid 
					movetime = 0.0; 
					cube.bling = 0; 
				}
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
		};

		this.tap = function(time, dir) {		
			checkclass(time.delta, Number);  
			checkclass(dir, Float32Array); 
			assert( Math.abs((vec3.length(dir) - 1.0)) < 0.0001); 

			switch(state) {
				case STATE_NONE: 
				state = STATE_MARKED; 
				break; 

				case STATE_MOVE: 
				break; 

				case STATE_MARKED: 
				blingoffset = time.total; 
				direction = dir; 
				vec3.set(cube.vector, startpos); 
				cube.bling = 0; 
				movetime = 0.0; 
				state = STATE_MOVE; 
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
		};
	}

	return function(position, id) {
		checkprop(position, x); 
		checkprop(position, y); 
		checkprop(position, z); 
		checkclass(id, Id); 

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
