#ifndef ASSERT_JS 
#define ASSERT_JS 

#ifndef RELEASE 
	function __error(message, file, line) {
		throw new Error(message + " in"  + file + ":" + line); 
	}

	#define assert(x)                                         \
	do {                                                      \
		if(!(x)) {                                            \
			__error("assertion failed: " + #x + " = " + (x), __FILE__, __LINE__); \
		}                                                     \
	} while(false) 

#else 
	#define assert(x)  

#endif 

#endif 
