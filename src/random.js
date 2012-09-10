#ifndef RANDOM_JS
#define RANDOM_JS 

#include "assert.js" 

//http://en.wikipedia.org/wiki/Complementary-multiply-with-carry#Implementation
function Random(x) {
	"use strict"; 	
	assert(x === (x|0));

	var MAX = 0xFFFF; 
	var IntArray = Uint32Array || Array; 
	var Q = new IntArray(4096); 
	var c = 362436; 
	var PHI = 0x9e3779b9; 

	Q[0] = x; 
	Q[1] = x + PHI; 
	Q[2] = x + PHI + PHI;

	for (var j = 3; j < 4096; j++)
		Q[j] = Q[j - 3] ^ Q[j - 2] ^ PHI ^ j;
		
	var i = 4095;

	this.next = function() {
		var t, a = 18782;
		var x, r = 0xfffffffe;
		i = (i + 1) & 4095;
		t = a * Q[i] + c;
		c = (t >> 32);
		x = t + c;
		if (x < c) {
			x++;
			c++;
		}

		var ret = Q[i] = r - x;
		if(ret < 0) {
			return (-ret) % MAX; 
		}
	
		return ret % MAX; 
	};
};

#endif 
