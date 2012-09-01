#ifndef RANDOM_JS
#define RANDOM_JS 

(function() {
"use strict"; 

function Random(seed) {
	var MAX = 0xFFFF; 
	var num = seed | 0; 
	var mul = num; 

	function next() {
		return num = (mul * num) & MAX;
	}

	for(var i = 8; i--;) {
		next(); 
	}

	this.next = next; 
};

}()); 

#endif 
