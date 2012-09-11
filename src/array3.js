#ifndef ARRAY3_JS
#define ARRAY3_JS 

function Array3(size, init) {
	var field = []; 
	for(var x = size; x--;) {
		field[x] = []; 
		for(var y = size; y--;) {
			field[x][y] = []; 
			for(var z = size; z--;) {
				field[x][y][z] = init; 
			}
		}
	}
	return field; 
}

#endif 
