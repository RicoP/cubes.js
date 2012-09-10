#ifdef RELEASE 
!function(document, window, Float32Array, Uint32Array, Uint8Array) { 
#endif
#ifndef RELEASE
try { 
#endif

#include "src/main.js"

#ifdef RELEASE 
}(document, this, Float32Array || Array, Uint32Array || Array, Uint8Array || Array); 
#endif 
#ifndef RELEASE 
}
catch(e) {
	var m = e.message || e; 
	document.body.innerHTML = m; 
	alert(m); 
}
#endif 
