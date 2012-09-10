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
	alert(e.message || e); 
}
#endif 
