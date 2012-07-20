#ifndef ASSERT_JS 
#define ASSERT_JS 

#ifndef RELEASE 
	function __error(message, file, line) {
		throw new Error(message + "("  + file + ":" + line + ")"); 
	}

	#define assert(x)                                                             \
	do {                                                                          \
		if(!(x)) {                                                                \
			__error("assertion failed: " + #x + " = " + (x), __FILE__, __LINE__); \
		}                                                                         \
	} while(false) 

	#define checkprop(obj, prop)                                                 \
	do {                                                                         \
		if(typeof (obj . prop) === "undefined") {                                \
			__error("No property " + #prop + " in " + #obj, __FILE__, __LINE__); \
		}                                                                        \
	} while(false)

	#define checktype(obj, type)                                                 \
	do {                                                                         \
		if(typeof obj !== (#type).toLowerCase() && !(obj instanceof type)) {     \
			__error("Objct " + #obj + " is not from type " + #type, __FILE__, __LINE__); \
		}                                                                        \
	} while(false)




#else 
	#define assert(x)
	#define checkprop(obj, prop)
	#define checktype(obj, type)

#endif 

#endif 
