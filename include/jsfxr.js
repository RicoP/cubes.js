#ifndef JSFXR_JS
#define JSFXR_JS

var Sfxr = (function() {
	var exports = {}; 

	function require() { return exports; }; 

	!function() { 
		#include "../jsfxr/riffwave.js"
	}(); 

	!function() { 
		#include "../jsfxr/sfxr.js"		
	}(); 

	return exports; 
}());

#endif 

