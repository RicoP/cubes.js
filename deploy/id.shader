#ifdef GL_ES
precision highp float;
#endif
uniform mat4 uModelview; 
uniform vec3 uIdColor; 

varying float vSide; // 1,2,3,4,5,6

#ifdef VERTEX
attribute vec3 aVertex;
attribute vec3 aNormal;

const vec3 ONE   = vec3( 1.0, 0.0, 0.0); 
const vec3 TWO   = vec3( 0.0, 1.0, 0.0); 
const vec3 THREE = vec3( 0.0, 0.0, 1.0); 
const vec3 FOUR  = vec3( 0.0, 0.0,-1.0); 
const vec3 FIVE  = vec3( 0.0,-1.0, 0.0); 
const vec3 SIX   = vec3(-1.0, 0.0, 0.0); 

void main() {
	float side = 0.0; 
	const float e = 0.0001; 

	if(length(aNormal - ONE) < e) { 
		side = 1.0;
	} else if(length(aNormal - TWO) < e) { 
		side = 2.0;
	} else if(length(aNormal - THREE) < e) { 
		side = 3.0;
	} else if(length(aNormal - FOUR) < e) { 
		side = 4.0;
	} else if(length(aNormal - FIVE) < e) { 
		side = 5.0;
	} else if(length(aNormal - SIX) < e) { 
		side = 6.0; 
	} 

	vSide = side; 

	gl_Position = uModelview * vec4(aVertex, 1.0);  
}
#endif

#ifdef FRAGMENT
vec4 fragment() {
	return vec4(vSide / 255.0, uIdColor.yz, 1.0); 
}

void main(){gl_FragColor=fragment();}
#endif
