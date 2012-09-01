#include "cube.js" 
#include "debug.js" 
#include "assert.js" 

#define STATE_NONE        0 
#define STATE_SKY_DRAG    1
#define STATE_CUBE_MARKED 2 
#define STATE_CUBE_DRAG   3
#define STATE_CUBE_MOVE   4

#define TRANS_TAP         0
#define TRANS_DRAG        1
#define TRANS_DRAG_START  2
#define TRANS_DRAG_END    3
#define TRANS_TICK        4

(function() { 
"use strict";  

function Statemachine(canvas, cameraPos, cameraDir) {
	checkclass(cameraPos, Float32Array); 
	checkclass(cameraDir, Float32Array); 
	assert(cameraPos.length === 3); 
	assert(cameraDir.length === 3); 

	var speed = 2.0; 
	var DRAGDIST = 100; 

	var state = STATE_NONE; 
	var markedCube = null; 
	var blingoffset = 0.0; 
	var direction = vec3.create(); 
	var tmpvector = vec3.create(); 
	var tmpmatrix = mat4.create(); 
	var dragStartPosition = { x : 0, y : 0 }; 
	var diceSide = 0; // 1..6 

	function markCube(obj) {
		checkprop(obj, cube); 
		if(obj.cube !== null) {
			checkclass(obj.cube, Cube); 
			obj.cube.bling = 0.0; 
		}

		if(markedCube !== null) {
			markedCube.bling = 0.0;
		}
		markedCube = obj.cube; 

		checkprop(obj, info); 
		checkprop(obj.info, time); 

		markedTime = obj.time.total; 
	}

	function hasCube(obj) {
		checkprop(obj, cube); 
		if(obj.cube !== null) {
			checkclass(obj.cube, Cube); 
			return true; 
		}
		return false; 
	}

	function transaction(trans, obj) {
		switch(state) {
			case STATE_NONE: 
			state = stateNone(trans, obj); 
			break;

			case STATE_CUBE_MARKED: 
			state = stateCubeMarked(trans, obj); 
			break;

			case STATE_CUBE_DRAG: 
			state = stateCubeDrag(trans, obj); 
			break;

			case STATE_CUBE_MOVE: 
			state = stateCubeMove(trans, obj); 
			break;

			case STATE_SKY_DRAG: 
			state = stateSkyDrag(trans, obj); 
			break;

			default: 
			assert(false && ("unknown transaction " + trans)); 
			break; 
		}
	}

	function stateNone(trans, obj) {
		switch(trans) {
			case TRANS_TAP: 
			if(hasCube(obj)) {
				markCube(obj); 
				return STATE_CUBE_MARKED; 
			}
			break; 

			case TRANS_DRAG: 
			case TRANS_DRAG_START: 
			if(hasCube(obj)) {
				markCube(obj); 
				return STATE_CUBE_DRAG; 
			}
			else {
				return STATE_SKY_DRAG; 
			}
		}

		//Everything else means we keep our state. 
		return STATE_NONE; 
	}

	function stateCubeMarked(trans, obj) {
		switch(trans) {
			case TRANS_TAP: 
			if(hasCube(obj)) {
				if(markedCube === obj.cube) {				
					markedcube.bling = 0.0; 
					//TODO Calc Move.
					return STATE_CUBE_MOVE;
				}
				markCube(obj); 
				return STATE_CUBE_MARKED; 
			}
			return STATE_NONE; 
			break; 

			case TRANS_DRAG: 
			case TRANS_DRAG_START: 
			if(hasCube(obj)) {
				if(obj.cube === markedCube) { 
					return STATE_CUBE_DRAG; 
				}
				markCube(obj); 
			}
			return STATE_CUBE_MARKED; 
			break; 

			case TRANS_TICK: 
			checkprop(obj, info); 
			markedCube.bling = (1.0 + Math.sin(markedTime - info.time.total) ) / 2.0; 
			return STATE_CUBE_MARKED; 
			break; 
		}

		return STATE_CUBE_MARKED; 
	}

	function stateCubeDrag(trans, obj) {
		switch(trans) {
			case TRANS_TAP: 
			return stateCubeMarked(TRANS_TAP, obj); 
			break; 

			case TRANS_DRAG:
			//TODO: Calculate Side and Normal. 
			return STATE_CUBE_DRAG; 
			break; 

			case TRANS_DRAG_END: 
			return STATE_NONE; 
			break; 			
		}

		return STATE_CUBE_DRAG; 
	}

	function stateCubeMove(trans, obj) {
		switch(trans, obj) {
			case TRANS_TICK: 
			checkprop(obj, info); 
			var cube = markedCube; 
			var info = obj.info; 

			vec3.add(cube.vector, vec3.scale(direction, info.time.delta * speed, tmpvector)); 
			movetime += info.time.delta * speed;
			if(movetime >= 1) {
				//we reached our destination.
				vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector); 
				//TODO: Grid 
				movetime = 0.0; 
				cube.bling = 0; 
				return STATE_NONE; 
			}
			break; 
		}		

		return STATE_CUBE_MOVE; 
	}

	function stateSkyDrag(trans, obj) {
		switch(trans) {
			case TRANS_DRAG: 
			case TRANS_DRAG_START: 
			var rot = mat4.identity(tmpmatrix); 
			var negDir = vec3.create(cameraDir); 
			vec3.scale(negDir, -1); 

			mat4.translate(rot, negDir); 
			mat4.rotateY(rot, (-2 * Math.PI * dragEvent.distanceX / canvas.width) / 50); 
			mat4.translate(rot, cameraDir); 

			mat4.multiplyVec3(rot, cameraPos); 
			return STATE_SKY_DRAG; 
			break; 

			case TRANS_TAP: 
			return stateNone(trans, obj); 
			break; 

			case TRANS_TICK: 
			break; 

			case TRANS_DRAG_END: 
			return STATE_NONE; 
			break; 
		}

		return STATE_SKY_DRAG; 
	}

	this.tap = function(info, obj) {
		var oldstate = state; 
		transaction(TRANS_TAP, obj); 
		dlog("Tap",oldstate,"->",state); 
	};

	this.dragStart = function(info, obj) {	
		var oldstate = state; 
		transaction(TRANS_DRAG_START, obj); 
		dlog("DragStart",oldstate,"->",state); 
	};

	this.drag = function(info, obj) {
		var oldstate = state; 
		transaction(TRANS_DRAG, obj); 
		dlog("Drag",oldstate,"->",state); 
	};

	this.dragEnd = function(info, obj) {	
		var oldstate = state; 
		transaction(TRANS_DRAG_END, obj); 
		dlog("DragEnd",oldstate,"->",state); 
	};

	this.tick = function(info, obj) {	
		var oldstate = state; 
		transaction(TRANS_TICK, obj); 
		//dlog("Tick",oldstate,"->",state); 
	};
};

}()); 

#undef STATE_NONE        
#undef STATE_SKY_DRAG    
#undef STATE_CUBE_MARKED 
#undef STATE_CUBE_DRAG   
#undef STATE_CUBE_MOVE   

#undef TRANS_TAP         
#undef TRANS_DRAG        
#undef TRANS_DRAG_START  
#undef TRANS_DRAG_END    
#undef TRANS_TICK        
