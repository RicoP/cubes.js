#ifndef INPUT_JS 
#define INPUT_JS 

#include "assert.js" 

#define STATE_NONE 0 
#define STATE_DOWN 1 
#define STATE_POKE 2 
#define STATE_DRAG 3 
#define DRAG_DIV   3

var Input = function(canvas) {
	"use strict"; 
	assert(canvas); 
	var that = this; 

	//transactions 
	function press() {
		switch(state) {
			case STATE_NONE:
			state = STATE_DOWN; 
			break; 

			case STATE_DOWN:
			break; 

			case STATE_POKE:
			that.poke = false; 
			state = STATE_NONE; 
			break; 

			case STATE_DRAG:
			break; 

			default: 
			assert(false && "unknow state " + state); 
		}
	}

	function up() {
		switch(state) {
			case STATE_NONE:
			break; 

			case STATE_DOWN:			
			that.poke = true; 
			state = STATE_POKE; 
			break; 

			case STATE_POKE:
			case STATE_DRAG:
			that.drag = that.poke = false; 
			state = STATE_NONE; 
			break; 

			default: 
			assert(false && "unknow state " + state); 
		}
	}

	function tick() {
		switch(state) {
			case STATE_NONE:
			break; 

			case STATE_DOWN:
			break; 

			case STATE_POKE:
			that.poke = false; 
			state = STATE_NONE; 
			break; 

			case STATE_DRAG:
			break; 

			default: 
			assert(false && "unknow state " + state); 
		}
	}

	function move() {
		switch(state) {
			case STATE_NONE:
			break; 

			case STATE_DOWN:
			var divx = lastmousex - mousex; 
			var divy = lastmousey - mousey; 
			if(Math.sqrt(divx*divx + divy*divy) > DRAG_DIV) {
				that.dragDirection.x = divx; 
				that.dragDirection.y = divy; 
				that.drag = true; 
				state = STATE_DRAG; 
			}
			break; 

			case STATE_POKE:
			that.poke = false; 
			state = STATE_NONE; 
			break; 

			case STATE_DRAG:
				var divx = lastmousex - mousex; 
				var divy = lastmousey - mousey; 

				that.dragDirection.x = divx; 
				that.dragDirection.y = divy; 
			break; 

			default: 
			assert(false && "unknow state " + state); 
		}	
	}

	var state = STATE_NONE; 
	var mousedown = false; 
	var lastmousex = 0; 
	var lastmousey = 0; 
	var mousex = 0; 
	var mousey = 0; 

	canvas.onmousedown = press; 
	canvas.onmouseup = canvas.onmouseout = window.onblur = up; 
	canvas.onmousemove = function(ev) {
		lastmousex = mousex; 
		lastmousey = mousey; 
		mousex = ev.clientX; 
		mousey = ev.clientY; 
		move(); 
	} 
	that.update = tick; 

	that.drag = false; 
	that.poke = false; 
	that.dragDirection = {x:0,y:0}; 
};

#undef STATE_NONE  
#undef STATE_DOWN  
#undef STATE_POKE  
#undef STATE_DRAG  
#undef DRAG_DIV 

#endif 
