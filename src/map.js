#ifndef MAP_JS
#define MAP_JS 

#include "assert.js" 

#define DIMENSION 16

function Map() {
	assert(this !== window); 

	var field = []; 
	for(var i = DIMENSION; i--;) {
		field.push([]); 
		for(var j = DIMENSION; j--;) {
			field.push(0); 
		}
	}

	this.set = function(x, y, z, n) {
		checkclass(x, Number); 
		checkclass(y, Number); 
		checkclass(z, Number); 
		checkclass(n, Number); 
		
		field[x][y][z] = n; 
	};

	this.get = function(x,y,z) {
		return field[x][y][z]; 
	}
}

#undef DIMENSION 

#endif 
