#ifdef RELEASE 
!function(document, window) { 
#endif
#ifndef RELEASE
try { 
#endif

#include "src/main.js"

#ifdef RELEASE 
}(document, this); 
#endif 
#ifndef RELEASE 
}
catch(e) {
	var m = e.message || e; 
	document.body.innerHTML = m; 
	alert(m); 
}
#endif 
