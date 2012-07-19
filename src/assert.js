#ifndef ASSERT_JS 
#define ASSERT_JS 

#ifndef RELEASE 
	#define assert(x)                        \
	do {                                     \
		if(!(x)) {                           \
			throw "assertion failed: " + #x; \
		}                                    \
	} while(false) 

#else 
	#define assert(x)  

#endif 

#endif 
