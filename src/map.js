#ifndef MAP_JS
#define MAP_JS 

#include "assert.js" 
#include "random.js" 

var Map = {
	"OUT_OF_BOUNDS" : -1, 
	"AIR" : 0, 
	"CUBE" : 1, 
	"START" : 2, 
	"GOAL" : 3
}; 

Map.create = function (seed, DIMENSION) {
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

	var field; // Array3
	var startingPosition = { x : (DIMENSION/2) | 0, y : (DIMENSION/2) | 0, z : (DIMENSION/2) | 0 };  
	var path = []; 

	function clearField() { 
		field = []; 
		for(var x = DIMENSION; x--;) {
			field[x] = []; 
			for(var y = DIMENSION; y--;) {
				field[x][y] = []; 
				for(var z = DIMENSION; z--;) {
					field[x][y][z] = Map.AIR; 
				}
			}
		}
	}

	function set(x, y, z, type) {
		checkclass(x, Number); 
		checkclass(y, Number); 
		checkclass(z, Number); 
		checkclass(type, Number); 

		assert(x === (x|0)); 
		assert(y === (y|0)); 
		assert(z === (z|0)); 
		assert(type === (type|0)); 
		
		field[x][y][z] = type; 
	}

	function get(x,y,z) {
		if(x<0 || y<0 || z<0 || x>= DIMENSION || y>=DIMENSION || z>=DIMENSION) {
			return Map.OUT_OF_BOUNDS; 
		}
		return field[x][y][z]; 
	}

	function getOppositeDirection(n) {
		if(n === -1) 
			return -1; 
		else 
			return [1,0,3,2,5,4][n]; 
	}

	function getCoords(position, dir, steps) {
		var pos = [position.x, position.y, position.z]; 
		var vec = directions[dir]; 
		for(var i = 0; i < steps; i++) {
			pos[0] += vec[0];
			pos[1] += vec[1];
			pos[2] += vec[2];
		}

		return { x : pos[0], y : pos[1], z : pos[2] }; 
	}

	function nothingInBetween(position, dir, steps) {
		for(var i = 1; i < steps; i++) {
			var pos = getCoords(position, dir, i); 
			var obj = get(pos.x, pos.y, pos.z); 
			if(obj !== Map.AIR) return false; 
		}

		return true; 
	}

	// iterationsLeft > 1 -> CUBE, iterationsLeft === 1 -> GOAL, iterationsLeft === 0 -> done
	function fillRec(rand, position, iterationsLeft, attempt, directionICameFrom) {
		checkprop(position, x);
		checkprop(position, y);
		checkprop(position, z);

		var type = iterationsLeft === 1 ? Map.GOAL : Map.CUBE; 
		var dir = rand.next() % 6; 
		var steps = 3 + rand.next() % 6; 

		//Enough iterations. OK
		if(iterationsLeft === 0) return true; 

		//To many attempts. fail
		if(attempt >= MAX_ATTEMPTS) return false; 

		//Don't go back from where you came from. retry
		if(dir === directionICameFrom || dir === getOppositeDirection(directionICameFrom)) { 
			return fillRec(rand, position, iterationsLeft, attempt, directionICameFrom); 
		}

		if(!nothingInBetween(position, dir, steps)) {
			//Try next attempt with next random numbers
			return fillRec(rand, position, iterationsLeft, attempt+1, dir);
		}

		var newObjectCoords = getCoords(position, dir, steps); 

		var obj = get(newObjectCoords.x, newObjectCoords.y, newObjectCoords.z); 
		if(obj === Map.OUT_OF_BOUNDS) {			
			return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom); 
		}

		set(newObjectCoords.x, newObjectCoords.y, newObjectCoords.z, type); 

		var newStartingPoint = getCoords(position, dir, steps-1); 
		path.push(newStartingPoint); 

		return fillRec(rand, newStartingPoint, iterationsLeft-1, 0, getOppositeDirection(dir)); 
	}

	function fill(seed) {
		var rand; 
		do { 
			rand = new Random(seed++); 
			clearField(); 
			set(startingPosition.x, startingPosition.y, startingPosition.z, Map.START); 
		} while(!fillRec(rand, startingPosition, 13, 0, -1)); 
	}

	fill(seed); 

	return {
		"startingPosition" : startingPosition,
		"getObject" : get, 
		"path" : path 
	}; 
}

#endif 
