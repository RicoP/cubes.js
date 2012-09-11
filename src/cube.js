#ifndef CUBE_JS
#define CUBE_JS 

#define FACE_NEUTRAL   0
#define FACE_HAPPY     1
#define FACE_LOVE      2
#define FACE_SAD       3
#define FACE_HOPE      4

function Cube(position) {	
	var that = this; 
	var face = FACE_NEUTRAL; 	

	//transactions
	function touch() {
		face = FACE_LOVE; 
		//play happy sound 
	}

	function view() {
		switch(face) {
			case FACE_NEUTRAL: 
			face = FACE_HAPPY; 
			break; 

			case FACE_HAPPY: 
			break; 

			case FACE_LOVE: 
			break; 

			case FACE_SAD: 
			face = FACE_HOPE; 
			break; 

			case FACE_HOPE: 
			break; 
		}
	}

	function leave() {
		switch(face) {
			case FACE_NEUTRAL: 			
			break; 

			case FACE_HAPPY: 
			break; 

			case FACE_LOVE: 
			face = FACE_SAD; 
			break; 

			case FACE_SAD: 
			break; 

			case FACE_HOPE: 
			face = FACE_SAD; 
			break; 
		}
	}

	function unview() {
		switch(face) {
			case FACE_NEUTRAL: 						
			break; 

			case FACE_HAPPY: 
			face = FACE_NEUTRAL; 
			break; 

			case FACE_LOVE: 			
			break; 

			case FACE_SAD: 			
			break; 

			case FACE_HOPE: 
			face = FACE_SAD;  
			break; 		
		}
	}

	that.position = position; 
	that.getFace = function() { return face; }; 
	that.view = view; 
	that.unview = unview; 
	that.touch = touch; 
	that.leave = leave; 
}

#endif 
