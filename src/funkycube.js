#ifndef FUNKYCUBE_JS
#define FUNKYCUBE_JS
#include <assert.js> 

#define CUBE_WIDTH 64
#define FACE_WIDTH 16 

assert(CUBE_WIDTH === FACE_WIDTH * 4); 

var Funkycube;

!function() {
"use strict"; 

	/* DIMENSIONS: 
	+--------------+
	|   +--+       |
	|   | 0|       |
	|   |  |       |
	|+--+--+--+    |
	|| 1| 2| 3|    |
	||  |  |  |    |
	|+--+--+--+    |
	|   | 4|       |
	|   |  |       |
	|   +--+       |
	|   | 5|       |
	|   |  |       |
	|   +--+       |
	|              |
	|              |
	+--------------+
	*/

	function Point(x,y) {
		this.x = x; 
		this.y = y; 

		this.toString = function() {
			return "[" + x + ", " + y + "]"; 
		};
	}

	Funkycube = function() {
		var canvas = document.createElement("canvas");
		canvas.width = canvas.height = CUBE_WIDTH; 
		var ctx = canvas.getContext("2d"); 

		//Face coordinate to Canvas coordinate
		//e.g.: (2,17,0) -> (33, 16) 
		function getCanvasCoordinate(face, x, y) {
			assert(face >= 0 && face <= 5); 

			if(x < 0) {
				switch(face) {
					case 0: 
					return getCanvasCoordinate(1, y, -x-1); 
				
					case 1: 
					return getCanvasCoordinate(5, -x-1, FACE_WIDTH - 1 - y); 
					
					case 2:
					return getCanvasCoordinate(1, x + FACE_WIDTH, y); 

					case 3: 
					return getCanvasCoordinate(2, x + FACE_WIDTH, y); 

					case 4: 
					return getCanvasCoordinate(1, FACE_WIDTH - 1 - y, FACE_WIDTH + x);  

					case 5: 
					return getCanvasCoordinate(1, -x-1 ,FACE_WIDTH - 1 - y);

					default: throw new RangeError(); 
				}
			}

			if(y < 0) {
				switch(face) {
					case 0: 
					return getCanvasCoordinate(5, x, FACE_WIDTH + y); 
				
					case 1: 
					return getCanvasCoordinate(0, -y-1 ,x); 
					
					case 2:
					return getCanvasCoordinate(0, x, FACE_WIDTH + y); 

					case 3: 
					return getCanvasCoordinate(0, FACE_WIDTH + y, FACE_WIDTH - 1 - x);

					case 4: 
					return getCanvasCoordinate(2, x, FACE_WIDTH + y); 

					case 5: 
					return getCanvasCoordinate(4, x, FACE_WIDTH + y); 

					default: throw new RangeError(); 
				}
			}

			if(x >= FACE_WIDTH) {
				switch(face) {
					case 0: 
					return getCanvasCoordinate(3, FACE_WIDTH - 1 - y, x - FACE_WIDTH);
				
					case 1: 
					return getCanvasCoordinate(2, x - FACE_WIDTH, y); 
					
					case 2:
					return getCanvasCoordinate(3, x - FACE_WIDTH, y); 

					case 3: 
					return getCanvasCoordinate(5, 2*FACE_WIDTH-1 - x, FACE_WIDTH - 1 - y); 

					case 4: 
					return getCanvasCoordinate(3, y, 2*FACE_WIDTH-1 - x);

					case 5: 
					return getCanvasCoordinate(3, 2*FACE_WIDTH-1 - x, FACE_WIDTH - 1 - y);

					default: throw new RangeError(); 
				}
			}

			if(y >= FACE_WIDTH) {
				switch(face) {
					case 0: 
					return getCanvasCoordinate(2, x, y - FACE_WIDTH); 
				
					case 1: 
					return getCanvasCoordinate(4, y - FACE_WIDTH, FACE_WIDTH - 1 - x); 
					
					case 2:
					return getCanvasCoordinate(4, x, y - FACE_WIDTH); 

					case 3: 
					return getCanvasCoordinate(4, 2*FACE_WIDTH-1 - y ,x);

					case 4: 
					return getCanvasCoordinate(5, x, y - FACE_WIDTH); 

					case 5: 
					return getCanvasCoordinate(0, x, y - FACE_WIDTH); 

					default: throw new RangeError(); 
				}
			}

			//In range 
			switch(face) {
				case 0: return new Point(x + FACE_WIDTH  , y); 
				case 1: return new Point(x               , y + FACE_WIDTH);
				case 2: return new Point(x + FACE_WIDTH  , y + FACE_WIDTH);       
				case 3: return new Point(x + FACE_WIDTH*2, y + FACE_WIDTH);       
				case 4: return new Point(x + FACE_WIDTH  , y + FACE_WIDTH*2);       
				case 5: return new Point(x + FACE_WIDTH  , y + FACE_WIDTH*3);         
				default: throw new RangeError(); 
			}		
		}

		this.getCanvasCoordinate = getCanvasCoordinate; 
		this.canvas = canvas; 
		this.ctx = ctx; 
	};
}();


#undef CUBE_WIDTH
#undef FACE_WIDTH

#endif 
