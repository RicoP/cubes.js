#ifndef DIRECTIONS_JS 
#define DIRECTIONS_JS 

#include "math.js" 
#include "assert.js" 

#define DIRECTION_ZERO -1
#define DIRECTION_XP 0
#define DIRECTION_XM 1
#define DIRECTION_YP 2
#define DIRECTION_YM 3
#define DIRECTION_ZP 4
#define DIRECTION_ZM 5

var Directions = (function() { 
	var directions = [
		vec3create([ 1, 0, 0]),
		vec3create([-1, 0, 0]),
		vec3create([ 0, 1, 0]),
		vec3create([ 0,-1, 0]),
		vec3create([ 0, 0, 1]),
		vec3create([ 0, 0,-1])
	];	

	var zero = vec3create([0,0,0]); 

	function getVector(dir) {
		assert(dir >= -1 && dir <= 5); 
		if(dir === DIRECTION_ZERO) return zero; 

		return directions[dir]; 
	}

	function getOppositeDirection(dir) {	
		assert(dir >= -1 && dir <= 5); 
		if(dir === DIRECTION_ZERO) return DIRECTION_ZERO; 

		return [1,0,3,2,5,4][dir]; 
	}

	function getOppositeVector(dir) {
		return getVector( getOppositeDirection(dir) ); 
	}

	function getDirectionBasedOnVector(vec) {
		var norm = vec3create(vec); 
		vec3normalize(norm); 

		for(var i = 0; i !== 6; i++) {
			var vdir = getVector(i); 
			if(norm[0] === vdir[0] && norm[1] === vdir[1] && norm[2] === vdir[2]) { 
				return i; 
			}
		}

		if(norm[0] === 0 && norm[1] === 0 && norm[2] === 0) {
			return DIRECTION_ZERO; 
		}

		assert(false && "vector not in area"); 
	}

	return {
		getVector : getVector,  
		getOppositeDirection : getOppositeDirection,  
		getOppositeVector : getOppositeVector, 
		getDirectionBasedOnVector : getDirectionBasedOnVector 
	}
}());

#endif 
