#ifndef GAMESTATES_JS
#define GAMESTATES_JS 

#define GAME_LOADLEVEL 0 
#define GAME_ZOOM_IN   1
#define GAME_RUNNING   2
#define GAME_ZOOM_OUT  3
#define GAME_OVER      4 

function Gamestate(callbacks, level) {
	var state = GAME_LOADLEVEL; 

	function next(info) {
		switch(state) {
			case GAME_LOADLEVEL: 
			var newlevel = level.shift(); 
			if(!newlevel) {
				callbacks.darken(); 
				state = GAME_OVER; 
				return; 
			}

			callbacks.load(newlevel); 
			state = GAME_ZOOM_IN; 
			break; 

		}
	}

}

#endif 
