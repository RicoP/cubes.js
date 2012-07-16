#ifndef CUBES_ID_JS
#define CUBES_ID_JS

#include "cubes.js" 

(function() {
"use strict"; 

cubes.Id = function(id) {
	this.asNumber = function() {
		return id; 
	};

	this.asColor = function() {
		var r,g,b; 
		b = (id % 128) / 128; 
		g = ((id >> 7) % 128) / 128; 
		r = ((id >> 14) % 128) / 128; 

		return [r,g,b]; 
	};
};

cubes.Id.fromColor = function (r,g,b) {
	var id = 0; 
	id += b >> 1; 
	id += (g >> 1) * 128; 
	id += (r >> 1) * (128 * 128); 

	return new cubes.Id(id); 
};


cubes.Id.Generator = function() {
	var id = 1; 
	this.reset = function() {
		id = 1; 
	};

	this.next = function() {
		return new cubes.Id(id++); 
	};
}

}());

#endif 
