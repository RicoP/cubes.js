#ifndef SPHERE_JS
#define SPHERE_JS

#include "debug.js" 
#include "assert.js" 
#include "math.js" 
#include "map.js" 

#define STATE_NONE   0 
#define STATE_MOVE   1

var Sphere = (function() { 
	var tmpvector  = vec3create();

	function Statemachine(sphere, map) {		
		"use strict"; 

		var speed = 8.0;

		var state       = STATE_NONE;  
		var direction   = vec3create(); 
		var startpos    = vec3create(); 
		var movetime    = 0; 

		this.tick = function(time) {		
			switch(state) {
				case STATE_NONE: 
				break; 

				case STATE_MOVE: 
				vec3add(sphere.position, vec3scale(direction, time.delta * speed, tmpvector)); 
				movetime += time.delta * speed;
				if(movetime >= 1) {				
					//we reached our destination.
					vec3set(vec3add(startpos, direction, tmpvector), sphere.position); 					

					//TODO: Grid 
					state = STATE_NONE; 
					movetime = 0.0; 
					//repeat process till we hit something 
					this.tap(time, direction); 
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
			assert( Math.abs((vec3length(dir) - 1.0)) < 0.0001); 

			switch(state) {
				case STATE_MOVE: 
				break; 

				case STATE_NONE: 
				//calculate if hit a cube
				var destx = Math.round(sphere.position[0] + dir[0]); 
				var desty = Math.round(sphere.position[1] + dir[1]); 
				var destz = Math.round(sphere.position[2] + dir[2]); 

				var obj = map.getObject(destx, desty, destz); 
				
				if(obj === MAP_AIR) { 
					vec3set(dir, direction); 
					vec3set(sphere.position, startpos); 
					movetime = 0.0; 
					state = STATE_MOVE; 
					break; 
				}

				if(obj === MAP_OUT_OF_BOUNDS) {
					dlog("dead"); 
				}
				if(obj === MAP_GOAL) {
					dlog("win"); 
				}				
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
		};
	}

	return function(position, map) {
		checkprop(position, x); 
		checkprop(position, y); 
		checkprop(position, z); 		
		assertNew(); 

		this.position = vec3create([position.x, position.y, position.z]); 

		var state  = new Statemachine(this, map); 

		this.tap = function(info, dir) {
			state.tap(info, dir); 
		}; 

		this.tick = function(info) {
			state.tick(info, map); 
		};		
	};
}());


#undef STATE_NONE  
#undef STATE_MOVE 

#endif 
