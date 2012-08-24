#ifndef CUBES_MAP_JS
#define CUBES_MAP_JS 
#include "cubes.js" 

#define MAP_HOLE  0 
#define MAP_WAY   64 
#define MAP_START 128
#define MAP_GOAL  192

cubes.Map = {}; 
cubes.Map.create = (function() {
"use strict"; 

var canvas = document.createElement("canvas"); 
var SIZE = 16; 
canvas.width = canvas.height = SIZE; 
var ctx = canvas.getContext("2d"); 

return function(image) {
	ctx.drawImage(image,0,0); 
	var imageData = ctx.getImageData(0, 0, SIZE, SIZE); 
	var data = imageData.data;

	var i = 0; 

	var map = []; 
	for(var x = SIZE; x--;) {
		map[x] = []; 
	}
	for(var y = 0; y < SIZE; y++) { 
		for(var x = 0; x < SIZE; x++) {			
			map[x][y] = data[i]; 
			i += 4; 
		}
	}

	return map; 
};
}()); 

#endif 
