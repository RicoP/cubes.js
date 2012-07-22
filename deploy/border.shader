#ifdef GL_ES
precision highp float;
#endif

#ifdef VERTEX
attribute vec2 aVertex;

void main() {
	gl_Position = vec4(aVertex, 0.0, 1.0);  
}
#endif

#ifdef FRAGMENT
void main() {
	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); 
}
#endif
