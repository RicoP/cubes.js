#ifndef CUBE_JS
#define CUBE_JS 

#define CUBE_FACE_NEUTRAL   0
#define CUBE_FACE_SAD       1
#define CUBE_FACE_HAPPY     2
#define CUBE_FACE_SURPRISED 3

function Cube(position) {	
	this.position = position; 
	this.face = CUBE_FACE_NEUTRAL; 	
}

#endif 
