#ifndef DEBUG_JS 
#define DEBUG_JS 

#ifndef RELEASE 
	#define dlog(...)   console.log("DEBUG (" + __FILE__ + ":" + __LINE__ + ")", __VA_ARGS__ )
	#define derr(...) console.error("ERROR (" + __FILE__ + ":" + __LINE__ + ")", __VA_ARGS__ )
	#define DEBUG 
#else 
	#define dlog(...) 
	#define derr(...) 
#endif 

#endif 
