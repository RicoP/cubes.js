#ifndef DEBUG_JS 
#define DEBUG_JS 

#ifndef RELEASE 
	#define dlog(...) console.log(__VA_ARGS__, __FILE__ + ":" + __LINE__)
	#define derr(...) console.error(__VA_ARGS__, __FILE__ + ":" + __LINE__)
	#define DEBUG 
#else 
	#define dlog(...) 
	#define derr(...) 
#endif 

#endif 
