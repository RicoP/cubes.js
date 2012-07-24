#ifdef GL_ES
precision highp float;
#endif

uniform mat4 uModelviewprojection; 
uniform sampler2D uTexture; 
uniform float uBling; 

varying vec2 vTextureuv; 
varying vec3 vNormal; 

#ifdef VERTEX
attribute vec3 aVertex;
attribute vec2 aTextureuv;
attribute vec3 aNormal;

void main() {
	vTextureuv  = aTextureuv; 
	vNormal     = aNormal; 
	vec4 v      = uModelviewprojection * vec4(aVertex, 1.0);  
	gl_Position = v; 
}
#endif

#ifdef FRAGMENT
vec4 fragment() {
	vec2 uv    = vTextureuv; 
	vec3 color = texture2D(uTexture, uv).rgb + vNormal; 

	return vec4(color * (1.0 + uBling), 1.0); 
}


void main(){gl_FragColor=fragment();}
#endif
