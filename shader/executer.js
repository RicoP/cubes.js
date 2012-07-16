"use strict"; 

var glsl = require("./glsl_parser.js").glsl; 
var fs = require("fs"); 
var shader = ""; 

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", function(data) {
	shader += data.toString(); 
}); 

process.stdin.on("end", function() {
	processShader(shader); 
}); 


function processShader(shader) { 
	"use strict"; 
	var node = glsl.parser.parse(shader); 
	var statements = node.statements; 

	var vertexParams = []; 
	var fragmentFound = false; 
	var vertexFound = false; 

	for(var i = 0; i != statements.length; i++) {
		var func = statements[i]; 
		if(!func.type || func.type !== "function_declaration") {
			continue; 
		}

		if(func.returnType.name !== "vec4") {
			continue; 
		}

		if(func.name == "vertex") {
			vertexFound = true; 
			for(var j = 0; j != func.parameters.length; j++) {
				var para = func.parameters[j]; 
				
				vertexParams.push({
					type : para.type_name, 
					name : para.name
				});
			}
		}

		if(func.name == "fragment") {
			if(func.parameters.length !== 0) {
				continue; 
			}
			fragmentFound = true; 		
		}
	}


	var obj = {}; 

	var vertexAttributeDeclarationString = 
		vertexParams
		.map(function(ele) {
			return "attribute " 
			  + ele.type 
			  + " " 
			  + ele.name 
			  + ";"; 
		}).join("");

	var vertexParameterString = 
		vertexParams
		.map(function(ele) { return ele.name; })
		.join(",");

	obj.header = [
		"#ifdef GL_ES",
		"precision highp float;", 
		"#endif",
		"#line 0"
	].join("\n");

	obj.source = shader; 

	obj.vertexMain = [
		vertexAttributeDeclarationString,
		"void main(){",
			"gl_Position=vertex(",
				vertexParameterString,
			");",
		"}"
	].join(""); 

	obj.fragmentMain = "void main(){gl_FragColor=fragment();}";

	var text = [ 
		obj.header, 

		obj.source, 

		"#ifdef VERTEX", 
		obj.vertexMain, 
		"#endif", 

		"#ifdef FRAGMENT", 
		obj.fragmentMain, 
		"#endif"
	].join("\n"); 

	if(!fragmentFound) {
		console.error("Fragment not found."); 
	}

	if(!vertexFound) {
		console.error("Vertex not found."); 
	}


	console.log(text); 
}
