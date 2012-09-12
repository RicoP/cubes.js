#ifndef MAP_JS
#define MAP_JS 

#include "assert.js" 
#include "random.js" 

#define MAP_OUT_OF_BOUNDS -1
#define MAP_AIR            0
#define MAP_CUBE           1
#define MAP_START          2
#define MAP_GOAL           3
#define MAP_PATH           4 

function MapCreate(seed) {
	"use strict"; 

	var MAX_ATTEMPTS = 16; 
	var X_PLUS = 0; 
	var X_MINUS = 1; 
	var Y_PLUS = 2; 
	var Y_MINUS = 3; 
	var Z_PLUS = 4; 
	var Z_MINUS = 5; 

	var directions = [];
	directions[X_PLUS]  = [1,0,0];
	directions[X_MINUS] = [-1,0,0];
	directions[Y_PLUS]  = [0,1,0];
	directions[Y_MINUS] = [0,-1,0];
	directions[Z_PLUS]  = [0,0,1];
	directions[Z_MINUS] = [0,0,-1];

	function clearField(dimension) { 
		var field = []; 
		for(var x = dimension; x--;) {
			field[x] = []; 
			for(var y = dimension; y--;) {
				field[x][y] = []; 
				for(var z = dimension; z--;) {
					field[x][y][z] = MAP_AIR; 
				}
			}
		}
		return field; 
	}

	function set(field, position, type) {
		assert(field); 
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 
		checkclass(type, Number); 

		assert(type === (type|0)); 

		var x = position[0];
		var y = position[1];
		var z = position[2];
		
		field[x][y][z] = type; 
	}

	function get(field, dimension, position) {
		assert(field); 
		assert(dimension > 0); 
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 

		var x = position[0];
		var y = position[1];
		var z = position[2];

		if(x<0 || y<0 || z<0 || x>= dimension || y>=dimension || z>=dimension) {
			return MAP_OUT_OF_BOUNDS; 
		}
		return field[x][y][z]; 
	}

	function getOppositeDirection(n) {
		if(n === -1) 
			return -1; 
		else 
			return [1,0,3,2,5,4][n]; 
	}

	function copyArray(array) {
		assert(array instanceof Array); 
		return array.slice(0); 
	}

	function step(position, dir) {
		assert(dir >= 0 && dir <= 5); 
		var direction = directions[dir]; 
		var array = copyArray(position); 

		array[0] += direction[0]; 
		array[1] += direction[1]; 
		array[2] += direction[2]; 
		return array; 
	}

	function getCoords(position, dir, steps) {
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 
		checkclass(dir, Number); 
		assert(steps >= 0); 

		if(steps === 0) return position; 
		return getCoords(step(position, dir), dir, steps-1); 
	}

	function nothingInBetween(field, dimension, position, dir, steps) {
		assert(field.length); 
		checkclass(dimension, Number); 
		checkclass(dir, Number); 
		checkclass(steps, Number); 
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 

		if(steps < 2) return true; 

		var newPos = getCoords(position, dir, 1);
		var type = get(field,dimension, newPos);
		if( type !== MAP_AIR ) return false; 
		return nothingInBetween(field, dimension, newPos, dir, steps-1); 
	}

	//markSpaceInBeteenAsPath(field, dimension, position, dir, steps); 
	function markSpaceInBeteenAsPath(field, dimension, position, dir, steps) {
		assert(field.length); 
		checkclass(dimension, Number); 
		checkclass(dir, Number); 
		checkclass(steps, Number); 
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 

		if(steps < 2) return true; 

		var newPos = getCoords(position, dir, 1);
		if( get(field,dimension, newPos) !== MAP_AIR ) return false; 
		set(field, newPos, MAP_PATH); 
		return nothingInBetween(field, dimension, newPos, dir, steps-1); 
		
	}

	// iterationsLeft > 1 -> CUBE, iterationsLeft === 1 -> GOAL, iterationsLeft === 0 -> done
	function fillRec(rand, position, iterationsLeft, attempt, directionICameFrom, path, field, dimension, setGoal) {
		checkclass(position[0], Number); 
		checkclass(position[1], Number); 
		checkclass(position[2], Number); 

		var type = iterationsLeft === 1 && setGoal ? MAP_GOAL : MAP_CUBE; 
		var dir = rand.next() % 6; 
		var steps = 3 + rand.next() % (dimension - 3); 

		//Enough iterations. OK
		if(iterationsLeft === 0) return true; 

		//To many attempts. fail
		if(attempt >= MAX_ATTEMPTS) return false; 

		//Don't go back from where you came from. retry
		if(dir === directionICameFrom || dir === getOppositeDirection(directionICameFrom)) { 
			return fillRec(rand, position, iterationsLeft, attempt, directionICameFrom, path, field, dimension, setGoal); 
		}

		if(!nothingInBetween(field, dimension, position, dir, steps)) {
			//Try next attempt with next random numbers
			return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom, path, field, dimension, setGoal);
		}

		var newObjectCoords = getCoords(position, dir, steps); 

		var obj = get(field, dimension, newObjectCoords); 
		if(obj === MAP_OUT_OF_BOUNDS) {			
			return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom, path, field, dimension, setGoal); 
		}

		//fill 
		markSpaceInBeteenAsPath(field, dimension, position, dir, steps); 

		set(field, newObjectCoords, type); 

		var newStartingPoint = getCoords(position, dir, steps-1); 
		path.push(newStartingPoint); 

		return fillRec(rand, newStartingPoint, iterationsLeft-1, 0, getOppositeDirection(dir), path, field, dimension, setGoal); 
	}

	function fill(seed) {
		var dimension = 16; //(rand.next() % 8 + 4) * 2; 
		var rand = new Random(seed); 
		var iterations = 2 + (rand.next() % 3);
		var startingPosition  = [ (dimension/2) | 0, (dimension/2) | 0, (dimension/2) | 0 ];  
		
		var field = clearField(dimension); 
		set(field, startingPosition, MAP_START); 

		var steps = 7 - iterations; 
	
		var lastpath = []; 
		var perfectpath = []; 
		var succeed = fillRec(rand, startingPosition, iterations, 0, -1, lastpath, field, dimension, false);
		for(var i = 0; i !== iterations; i++) {
			var tillPosition = rand.next() % lastpath.length;
			var newPosition = lastpath[tillPosition]; 

			for(var j = 0; j !== tillPosition+1; j++) {
				perfectpath.push( lastpath[j] );
			}

			lastpath = []; 				

			succeed = succeed && fillRec(rand, newPosition, iterations, 0, -1, lastpath, field, dimension, i === (iterations - 1));
		}

		for(var j = 0; j !== tillPosition; j++) {
			perfectpath.push( lastpath[j] );
		}


		if(succeed) {			
			return {
				"startingPosition" : { x : startingPosition[0], y : startingPosition[0], z : startingPosition[0] },  
				"getObject" : function(x,y,z) { return get(field, dimension, [x,y,z]); }, 
				"path" : perfectpath, 
				"dimension" : dimension 
			}; 
		}
		else { 
			return fill(seed+1);
		}
	}

	return fill(seed); 
}

#endif 
