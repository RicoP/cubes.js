#ifdef GL_ES
precision highp float;
#endif
#line 0
uniform mat4 uModelview; 
uniform sampler2D uTexture; 

varying vec2 vTextureuv; 
varying vec3 vNormal; 



#ifdef VERTEX
attribute vec3 aVertex;attribute vec2 aTexture;attribute vec3 aNormal;

void main() {
	vNormal    = (uModelview * vec4(aNormal, 0.0)).xyz; 
	vTextureuv = aTexture; 
	gl_Position = uModelview * vec4(aVertex, 1.0);  
}
#endif
#ifdef FRAGMENT
vec4 fragment() {
	vec3 normal = normalize(vNormal); 
	vec2 uv     = vTextureuv; 
	vec3 color  = texture2D(uTexture, uv).rgb; 

	return vec4( color + normal, 1.0); 
}


void main(){gl_FragColor=fragment();}
#endif
