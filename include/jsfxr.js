#ifndef JSFXR_JS
#define JSFXR_JS

var Sfxr = (function() {
	var exports = {}; 

	function require() { return exports; }; 

	!function() { 
		#include "riffwave.js"
	}(); 

	!function() { 
		#include "sfxr.js"		
	}(); 

	return exports; 
}());

#endif 

