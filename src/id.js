#ifndef CUBES_ID_JS
#define CUBES_ID_JS

function Id(id) {
	"use strict"; 
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

Id.fromColor = function (r,g,b) {
	"use strict"; 
	var id = 0; 
	id += b >> 1; 
	id += (g >> 1) * 128; 
	id += (r >> 1) * (128 * 128); 

	return new Id(id); 
};


Id.Generator = function() {
	"use strict"; 
	var id = 1; 
	this.reset = function() {
		id = 1; 
	};

	this.next = function() {
		return new Id(id++); 
	};
}


#endif 
