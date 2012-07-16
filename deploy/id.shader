#ifdef GL_ES
precision highp float;
#endif
uniform mat4 uModelview; 
uniform vec3 uIdColor; 

#ifdef VERTEX
attribute vec3 aVertex;

void main() {
	gl_Position = uModelview * vec4(aVertex, 1.0);  
}
#endif
#ifdef FRAGMENT
vec4 fragment() {
	return vec4(uIdColor, 1.0); 
}


void main(){gl_FragColor=fragment();}
#endif
