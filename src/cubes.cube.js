#ifndef CUBES_CUBE_JS
#define CUBES_CUBE_JS

#include <glmatrix.js> 
#include "cubes.js" 
#include "cubes.id.js" 
#include "cubes.cubemachine.js" 
#include "assert.js" 

cubes.Cube = function(position, id) {
	assert("x" in position && "y" in position && "z" in position);
	assert(id instanceof cubes.Id); 

	var vect = vec3.create([position.x, position.y, position.z]);

	this.grid   = [position.x, position.y, position.z]; 
	this.id     = id; 	
	this.vector = vect; 
	this.state  = new cubes.Cubemachine(this); 
};

#endif 
