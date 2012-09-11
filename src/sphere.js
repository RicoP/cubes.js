#ifndef SPHERE_JS
#define SPHERE_JS

#include "debug.js" 
#include "assert.js" 
#include "math.js" 
#include "map.js" 
#include "directions.js" 

#define STATE_NONE   0 
#define STATE_MOVE   1

var Sphere = (function() { 
	var tmpvector = vec3create();

	function Statemachine(sphere, cubelist, goalpos,  dimension) {		
		"use strict"; 

		var speed = 8.0;

		var state       = STATE_NONE;  
		var direction   = vec3create(); 
		var startpos    = vec3create(); 
		var movetime    = 0; 

		function markCubesWhoSeeMe(position, dir, view) {
			var x = position[0];
			var y = position[1];
			var z = position[2];
		

			if(x<0 || x>= dimension || y<0 || y>= dimension || z<0 || z>= dimension) {
				return; 
			}

			var cube = getCube(x,y,z); 
			if(cube) {
				if(view) { 
					cube.view(); 
				} else {
					cube.unview(); 
				}
				return; 
			}

			var v = Directions.getVector(dir); 
			markCubesWhoSeeMe( [ x + v[0], y + v[1], z + v[2] ], dir, view); 				
		}

		function markCubesWhoSeeMeAsWatching(position, directionIAmGoing) {
			for(var dir = 0; dir !== 6; dir++) {
				if(dir === directionIAmGoing) continue; 

				var vec = Directions.getVector(dir); 
				var pos = vec3create(sphere.position); 
				vec3add(pos, vec); 
				markCubesWhoSeeMe(position, dir, true); 
			}
		}
	
		function markCubesWhoSeeMeAsUnwatching(position, directionIAmGoing) {
			for(var dir = 0; dir !== 6; dir++) {
				if(dir === directionIAmGoing) continue; 

				var vec = Directions.getVector(dir); 
				var pos = vec3create(sphere.position); 
				vec3add(pos, vec); 
				markCubesWhoSeeMe(position, dir, false); 
			}
		}

		function getCube(x,y,z) {
			for(var i = 0, l = cubelist.length; i !== l; i++) {
				var cube = cubelist[i]
				var pos = cube.position; 
				if(pos[0] === x && pos[1] === y && pos[2] === z) {
					return cube; 
				}
			}

			return null; 
		}

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

					markCubesWhoSeeMeAsWatching(sphere.position, Directions.getDirectionBasedOnVector(direction)); 

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

				if(destx === goalpos[0] && desty === goalpos[1] && destz === goalpos[2]) {
					dlog("winning"); 
					return; 
				}

				if(destx < 0 || destx >= dimension || desty < 0 || desty >= dimension || destz < 0 || destz >= dimension) {
					dlog("dead"); 
					return; 
				} 

				var cube = getCube(destx, desty, destz); 

				if(cube) {
					//the cube I am going to touch. 
					cube.touch(); 

					if(sphere.lastCube && sphere.lastCube !== cube) {
						sphere.lastCube.leave(); 
					}
					sphere.lastCube = cube; 

					return; 
				}

				if(sphere.lastCube && sphere.lastCube !== cube) {
					sphere.lastCube.leave(); 
				}
				sphere.lastCube = cube; 

				vec3set(dir, direction); 
				vec3set(sphere.position, startpos); 
				movetime = 0.0; 

				//Tell old cubes who have seen me, that they don't see me 				
				markCubesWhoSeeMeAsUnwatching(sphere.position, Directions.getDirectionBasedOnVector(direction)); 

				state = STATE_MOVE; 
				break; 

				default: 
				derr("unknow state.", state); 
				break; 
			}
			
		};
		
		markCubesWhoSeeMeAsWatching(sphere.position, DIRECTION_ZERO); 
	}

	return function(position, cubelist, goalpos, dimension) {
		checkprop(position, x); 
		checkprop(position, y); 
		checkprop(position, z); 		
		assertNew(); 

		this.position = vec3create([position.x, position.y, position.z]); 

		var state  = new Statemachine(this, cubelist, goalpos, dimension); 

		this.tap = function(info, dir) {
			state.tap(info, dir); 
		}; 

		this.tick = function(info) {
			state.tick(info); 
		};		
		this.lastCube = null; 
	};
}());


#undef STATE_NONE  
#undef STATE_MOVE 

#endif 
