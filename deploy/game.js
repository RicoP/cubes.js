



try {
var GLT = {};
(function(GLT) {
"use strict";
var names = ["experimental-webgl", "webgl", "moz-webgl", "webkit-3d"];

function createContext(canvas) {
  var i;
  var name;
  var gl;
  for(i = 0; name = names[i++];) {
   gl = canvas.getContext(name, {alpha : false, preserveDrawingBuffer : true});
   if(gl) {
    return gl;
   }
  }

  return null;
}

GLT.createContext = createContext;
}(GLT));
(function(GLT) {
 "use strict";
 var SIZE = 256;
 var KeyArray = Uint8Array || Array;
 var keysDown = new KeyArray(SIZE);
 var keysDownOld = new KeyArray(SIZE);
 function cleanKeys() {
  for(var i = 0; i !== SIZE; i++) {
   keysDownOld[i] = 0;
   keysDown[i] = 0;
  }
 }
 function update() {
  for(var i = 0; i !== SIZE; i++) {
   keysDownOld[i] = keysDown[i];
  }
 }
 function isDown(key) {
  return keysDown[key] !== 0;
 }
 function isUp (key) {
  return keysDown[key] === 0;
 }
 function wasPressed (key) {
  return keysDown[key] !== 0 && keysDownOld[key] === 0;
 }
 function wasReleased (key) {
  return keysDown[key] === 0 && keysDownOld[key] !== 0;
 }
 cleanKeys();
 document.addEventListener("keydown", function(e) {
  var k = e.keyCode;
  if(k < SIZE) {
   keysDown[k] = 1;
  }
 }, false);
 document.addEventListener("keyup", function(e) {
  var k = e.keyCode;
  if(k < SIZE) {
   keysDown[k] = 0;
  }
 }, false);
 window.addEventListener("blur", function() {
  cleanKeys();
 }, false);
 var codes = {
  "backspace":8, "tab":9, "enter":13, "shift":16, "ctrl":17, "alt":18, "pause":19,
  "capslock":20, "escape":27, "space":32, "pageUp":33, "pageDown":34, "end":35, "home":36,
  "left":37, "up":38, "right":39, "down":40,
  "insert":45, "delete":46,
  "num0":48, "num1":49, "num2":50, "num3":51, "num4":52, "num5":53, "num6":54, "num7":55, "num8":56, "num9":57,
  "a":65, "b":66, "c":67, "d":68, "e":69, "f":70, "g":71, "h":72, "i":73, "j":74, "k":75, "l":76, "m":77,
  "n":78, "o":79, "p":80, "q":81, "r":82, "s":83, "t":84, "u":85, "v":86, "w":87, "x":88, "y":89, "z":90,
  "windowKeyLeft":91, "windowKeyRight":92, "select":93,
  "numpad0":96, "numpad1":97, "numpad2":98, "numpad3":99, "numpad4":100,
  "numpad5":101, "numpad6":102, "numpad7":103, "numpad8":104, "numpad9":105,
  "multiply":106, "add":107, "subtract":109, "decimalPoint":110, "divide":111,
  "f1":112, "f2":113, "f3":114, "f4":115, "f5":116, "f6":117,
  "f7":118, "f8":119, "f9":120, "f10":121, "f11":122, "f12":123,

  "numlock":144, "scrolllock":145, "semicolon":186, "equals":187, "comma":188,
  "dash":189, "period":190, "slash":191, "graveAccent":192, "openBracket":219,
  "backSlash":220, "closeBraket":221, "quote":222
 };

 GLT.keys = {
  codes : codes,
  update : update,
  isDown : isDown,
  isUp : isUp,
  wasPressed : wasPressed,
  wasReleased : wasReleased
 };
}(GLT));
(function(GLT) {
"use strict";
var win, raf, starttime, lasttime, time;
win = window;
raf =
 win.requestAnimationFrame ||
 win.webkitRequestAnimationFrame ||
 win.mozRequestAnimationFrame ||
 win.oRequestAnimationFrame ||
 win.msRequestAnimationFrame ||
 function( callback ) {
  win.setTimeout(callback, 16);
 };
function reset() {
 starttime = -1;
 time.total = 0;
 time.frame = 0;
}
starttime = -1;
lasttime = 0;
time = {
 "total" : 0,
 "delta" : 0,
 "frame" : 0,
 "reset" : reset
};
function requestGameFrame(callback) {
 function innerCall() {
  try {
  var now = Date.now();
  if(starttime === -1) {
   lasttime = now;
   starttime = now;
   time.frame = 0;
  }
  var delta = (now - lasttime) / 1000.0;
  time.delta = delta;
  time.total += delta;
  callback(time);
  time.frame++;
  lasttime = now;
  GLT.keys.update();
  }
  catch(e) {
   var m = e.message || e;
   document.body.innerHTML = m+"";
   alert(m);
  }
 }
 raf(innerCall);
}
GLT.requestGameFrame = requestGameFrame;
}(GLT));
(function(GLT) {
 "use strict";
 var SCHEMA_V = 0;
 var SCHEMA_VN = 1;
 var SCHEMA_VT = 2;
 var SCHEMA_VTN = SCHEMA_VN | SCHEMA_VT;
 var SIZEOFFLOAT = 4;
 var rgxWhitespace = /[\t\r\n ]+/g;
 function parse(text) {
  var lines = text.split("\n");
  var line = "";
  var linenum = 0;
  var vertice = [];
  var normals = [];
  var textureuv = [];
  var indiceV = [];
  var indiceN = [];
  var indiceT = [];
  var triangles = 0;
  var funcs = {
   "v" : function(s) {
    if(!s || s.length != 3) {
     throw new Error("Can't accept Vertic without 3 components. LINE:" + line);
    }
    var x = Number(s[0]);
    var y = Number(s[1]);
    var z = Number(s[2]);
    vertice.push(x,y,z);
   },
   "vn" : function(s) {
    if(!s || s.length != 3) {
     throw new Error("Can't accept Normal without 3 components. LINE:" + linenum);
    }
    var x = Number(s[0]);
    var y = Number(s[1]);
    var z = Number(s[2]);
    normals.push(x,y,z);
   },
   "vt" : function(s) {
    if(!s || s.length < 2) {
     throw new Error("Can't accept Texture with less than 2 components. LINE:" + linenum);
    }
    var u = Number(s[0]);
    var v = Number(s[1]);
    textureuv.push(u,v);
   },
   "f" : function pushFace(s) {
    if(!s || s.length < 3) {
     throw new Error("Can't accept Face with less than 3 components. LINE:" + linenum);
    }
    if(s.length > 3) {
     for(var n = s.length - 1; n !== 1; n--) {
      pushFace([s[0], s[n-1], s[n]]);
     }
     return;
    }
    triangles++;
    for(var i=0; i !== 3; i++) {
     var vtn = s[i].split("/");
     var v = parseInt(vtn[0], 10) - 1;
     var t = parseInt(vtn[1], 10) - 1;
     var n = parseInt(vtn[2], 10) - 1;
     indiceV.push(v);
     if(!isNaN(t)) indiceT.push(t);
     if(!isNaN(n)) indiceN.push(n);
    }
   }
  };
  for(linenum = 0; linenum != lines.length;) {
   line = lines[linenum++].trim();
   var elements = line.split(rgxWhitespace);
   var head = elements.shift();
   if(head in funcs) {
    funcs[head](elements);
   }
  }
  var schema = SCHEMA_V;
  if(textureuv.length !== 0 || indiceT.length !== 0) {
   schema |= SCHEMA_VT;
   if(indiceV.length !== indiceT.length) {
    throw new Error("Texture indice don't match Vertic indice.");
   }
  }
  if(normals.length !== 0 || indiceN.length !== 0) {
   schema |= SCHEMA_VN;
   if(indiceV.length !== indiceN.length) {
    throw new Error("Normal indice don't match Vertic indice.");
   }
  }
  var sizeArray = 0;
  var voffset = 0;
  var toffset = 0;
  var noffset = 0;
  var stride = 0;
  var packSize = 0;
  switch(schema) {
   case SCHEMA_V:
   stride = 4;
   break;
   case SCHEMA_VT:
   stride = 4+2;
            toffset = 4*SIZEOFFLOAT;
   break;
   case SCHEMA_VN:
   stride = 4+4;
            noffset = 4*SIZEOFFLOAT;
   break;
   case SCHEMA_VTN:
   stride = 4+2+4;
            toffset = 4*SIZEOFFLOAT;
            noffset = 6*SIZEOFFLOAT;
   break;
   default:
   throw new Error("Schema broken.");
  }
  sizeArray = triangles * 3 * stride;
  var rawData = new Float32Array(sizeArray);
  var p = 0;
  var vi = 0;
  var ti = 0;
  var ni = 0;
  for(var i = 0; i != indiceV.length; i++) {
   vi = 3*indiceV[i];
   rawData[p++] = vertice[ vi++ ];
   rawData[p++] = vertice[ vi++ ];
   rawData[p++] = vertice[ vi ];
   rawData[p++] = 1.0;
   if(schema & SCHEMA_VT) {
    ti = 2*indiceT[i];
    rawData[p++] = textureuv[ ti++ ];
    rawData[p++] = textureuv[ ti ];
   }
   if(schema & SCHEMA_VN) {
    ni = 3*indiceN[i];
    rawData[p++] = normals[ ni++ ];
    rawData[p++] = normals[ ni++ ];
    rawData[p++] = normals[ ni ];
    rawData[p++] = 0.0;
   }
  }
  return {
   "stride" : stride * SIZEOFFLOAT,
   "schema" : schema,
   "voffset" : voffset,
   "toffset" : toffset,
   "noffset" : noffset,
   "rawData" : rawData,
   "numVertices" : triangles * 3
  };
 }
 GLT.obj = {};
 GLT.obj.parse = parse;
 GLT.obj.SCHEMA_V = SCHEMA_V;
 GLT.obj.SCHEMA_VN = SCHEMA_VN;
 GLT.obj.SCHEMA_VT = SCHEMA_VT;
 GLT.obj.SCHEMA_VTN = SCHEMA_VN | SCHEMA_VT;
}(GLT));
(function(GLT) {
"use strict";
function mimeToType(mime) {
 mime = mime.toLowerCase();
 if(mime === "application/json") {
  return 2;
 }
 if(mime === "text/html") {
  return 7;
 }
 if(mime.indexOf("javascript") !== -1) {
  return 3;
 }
 if(mime.indexOf("xml") !== -1) {
  return 4;
 }
 if(mime.indexOf("image") !== -1) {
  return 5;
 }
 return 1;
}
function simpleAjaxCall(key, file, success, error) {
 function onReadyState() {
  if(abort) {
   return;
  }
  if(xhr.readyState === 2 || xhr.readyState === 3){
   mime = mimeToType(xhr.getResponseHeader("content-type"));
   if(file.toLowerCase().lastIndexOf(".json") + 5 === file.length) {
    mime = 2;
   }
   else if(file.toLowerCase().lastIndexOf(".obj") + 4 === file.length) {
    mime = 6;
   }
   if(mime === 5) {
    abort = true;
    xhr.abort();
    var image = new Image();
    image.onload = function() {
     success(key, image);
    };
    image.onerror = function() {
     error(file, "Loading image failed.");
    }
    image.src = file;
    return;
   }
  }
  if(xhr.readyState === 4) {
   var s = xhr.status;
   if(s >= 200 && s <= 299 || s === 304 || s === 0) {
    if(mime === 4) {
     success(key, xhr.responseXML);
    }
    else if(mime === 2) {
     try {
      success(key, JSON.parse(xhr.responseText));
     }
     catch(e) {
      error(file, e);
     }
    }
    else if(mime === 6) {
     try {
      success(key, GLT.obj.parse(xhr.responseText));
     }
     catch(e) {
      error(file, e);
     }
    }
    else {
     success(key, xhr.responseText);
    }
   }
   else {
    error(file, s || 0);
   }
  }
 }
 var mime = 0;
 var abort = false;
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = onReadyState;
 xhr.open('GET', file, true);
 xhr.send(null);
}
function nop() {
}
function loadFiles(options) {
 if(!options) throw new Error("Passed nothing in loadFiles");
 var files = options.files || {};
 var update = options.update || nop;
 var finished = options.finished || nop;
 var error = options.error || nop;
 var total = 0;
 var filesInLoadingQueue = 0;
 var result = Object.create(null);
 var fileLoaded = function(key, blob) {
  filesInLoadingQueue++;
  result[key] = blob;
  update(key, filesInLoadingQueue / total);
  if(filesInLoadingQueue === total) {
   finished(result);
  }
 };
 var fileFailed = function(file, message) {
  fileLoaded = nop;
  fileFailed = nop;
  error(file, message);
 }
 if(files instanceof Array) {
  total = files.length;
  for(var i = 0, file; file = files[i++];) {
   simpleAjaxCall(file, file, fileLoaded, fileFailed);
  }
 }
 else {
  var keys = Object.keys(files);
  total = keys.length;
  for(var i = 0, key; key = keys[i++];) if(files.hasOwnProperty(key)) {
   simpleAjaxCall(key, files[key], fileLoaded, fileFailed);
  }
 }
}
GLT.loadmanager = {};
GLT.loadmanager.loadFiles = loadFiles;
}(GLT));
(function(GLT) {
"use strict";
function compileProgram(gl, programsource) {
 var defines = ["#define VERTEX\n", "#define FRAGMENT\n"];
 var line0 = "#line 0\n";
 var shader = [gl.createShader(gl.VERTEX_SHADER), gl.createShader(gl.FRAGMENT_SHADER)];
 var program = gl.createProgram();
 var s = null;
 var info = "";
 for(var i = 0; i != defines.length; i++) {
  s = shader[i];
  gl.shaderSource(s, defines[i] + line0 + programsource);
  gl.compileShader(s);
  if( info = gl.getShaderInfoLog(s) ) {
   throw new Error(info);
  }
  gl.attachShader(program, s);
 }
 gl.linkProgram(program);
 if( info = gl.getProgramInfoLog(program) ) {
  console.error(info);
 }
 return program;
}
GLT.shader = {};
GLT.shader.compileProgram = compileProgram;
}(GLT));
 function __error(message, file, line) {
  throw new Error(message + "(" + file + ":" + line + ")");
 }
var Input = function(canvas) {
 "use strict";
 do { if(!(canvas)) { __error("assertion failed: " + "canvas" + " = " + (canvas), "src/input.js", 14); } } while(false);
 var that = this;
 function press() {
  switch(state) {
   case 0:
   state = 1;
   break;
   case 1:
   break;
   case 2:
   that.poke = false;
   state = 0;
   break;
   case 3:
   break;
   default:
   do { if(!(false && "unknow state " + state)) { __error("assertion failed: " + "false && \"unknow state \" + state" + " = " + (false && "unknow state " + state), "src/input.js", 36); } } while(false);
  }
 }
 function up() {
  switch(state) {
   case 0:
   break;
   case 1:
   that.poke = true;
   state = 2;
   break;
   case 2:
   case 3:
   that.drag = that.poke = false;
   state = 0;
   break;
   default:
   do { if(!(false && "unknow state " + state)) { __error("assertion failed: " + "false && \"unknow state \" + state" + " = " + (false && "unknow state " + state), "src/input.js", 57); } } while(false);
  }
 }
 function tick() {
  switch(state) {
   case 0:
   break;
   case 1:
   break;
   case 2:
   that.poke = false;
   state = 0;
   break;
   case 3:
   break;
   default:
   do { if(!(false && "unknow state " + state)) { __error("assertion failed: " + "false && \"unknow state \" + state" + " = " + (false && "unknow state " + state), "src/input.js", 78); } } while(false);
  }
 }
 function move() {
  switch(state) {
   case 0:
   break;
   case 1:
   var divx = lastmousex - mousex;
   var divy = lastmousey - mousey;
   if(Math.sqrt(divx*divx + divy*divy) > 3) {
    that.dragDirection.x = divx;
    that.dragDirection.y = divy;
    that.drag = true;
    state = 3;
   }
   break;
   case 2:
   that.poke = false;
   state = 0;
   break;
   case 3:
    var divx = lastmousex - mousex;
    var divy = lastmousey - mousey;
    that.dragDirection.x = divx;
    that.dragDirection.y = divy;
   break;
   default:
   do { if(!(false && "unknow state " + state)) { __error("assertion failed: " + "false && \"unknow state \" + state" + " = " + (false && "unknow state " + state), "src/input.js", 112); } } while(false);
  }
 }
 var state = 0;
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
var MatrixArray = Float32Array;
function mat4create(mat) {
 var dest = new MatrixArray(16);
 if (mat) {
  dest[0] = mat[0];
  dest[1] = mat[1];
  dest[2] = mat[2];
  dest[3] = mat[3];
  dest[4] = mat[4];
  dest[5] = mat[5];
  dest[6] = mat[6];
  dest[7] = mat[7];
  dest[8] = mat[8];
  dest[9] = mat[9];
  dest[10] = mat[10];
  dest[11] = mat[11];
  dest[12] = mat[12];
  dest[13] = mat[13];
  dest[14] = mat[14];
  dest[15] = mat[15];
 }
 return dest;
};
function mat4identity(dest) {
 if (!dest) { dest = mat4create(); }
 dest[0] = 1;
 dest[1] = 0;
 dest[2] = 0;
 dest[3] = 0;
 dest[4] = 0;
 dest[5] = 1;
 dest[6] = 0;
 dest[7] = 0;
 dest[8] = 0;
 dest[9] = 0;
 dest[10] = 1;
 dest[11] = 0;
 dest[12] = 0;
 dest[13] = 0;
 dest[14] = 0;
 dest[15] = 1;
 return dest;
};
function mat4multiply (mat, mat2, dest) {
 if (!dest) { dest = mat; }
 var a00 = mat[ 0], a01 = mat[ 1], a02 = mat[ 2], a03 = mat[3];
 var a10 = mat[ 4], a11 = mat[ 5], a12 = mat[ 6], a13 = mat[7];
 var a20 = mat[ 8], a21 = mat[ 9], a22 = mat[10], a23 = mat[11];
 var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
 var b0 = mat2[0], b1 = mat2[1], b2 = mat2[2], b3 = mat2[3];
 dest[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
 dest[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
 dest[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
 dest[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
 b0 = mat2[4];
 b1 = mat2[5];
 b2 = mat2[6];
 b3 = mat2[7];
 dest[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
 dest[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
 dest[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
 dest[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
 b0 = mat2[8];
 b1 = mat2[9];
 b2 = mat2[10];
 b3 = mat2[11];
 dest[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
 dest[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
 dest[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
 dest[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
 b0 = mat2[12];
 b1 = mat2[13];
 b2 = mat2[14];
 b3 = mat2[15];
 dest[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
 dest[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
 dest[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
 dest[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
 return dest;
};
function mat4multiplyVec3 (mat, vec, dest) {
 if (!dest) { dest = vec; }
 var x = vec[0], y = vec[1], z = vec[2];
 dest[0] = mat[0] * x + mat[4] * y + mat[8] * z + mat[12];
 dest[1] = mat[1] * x + mat[5] * y + mat[9] * z + mat[13];
 dest[2] = mat[2] * x + mat[6] * y + mat[10] * z + mat[14];
 return dest;
};
function mat4translate(mat, vec, dest) {
 var x = vec[0], y = vec[1], z = vec[2],
  a00, a01, a02, a03,
  a10, a11, a12, a13,
  a20, a21, a22, a23;
 if (!dest || mat === dest) {
  mat[12] = mat[0] * x + mat[4] * y + mat[8] * z + mat[12];
  mat[13] = mat[1] * x + mat[5] * y + mat[9] * z + mat[13];
  mat[14] = mat[2] * x + mat[6] * y + mat[10] * z + mat[14];
  mat[15] = mat[3] * x + mat[7] * y + mat[11] * z + mat[15];
  return mat;
 }
 a00 = mat[0]; a01 = mat[1]; a02 = mat[2]; a03 = mat[3];
 a10 = mat[4]; a11 = mat[5]; a12 = mat[6]; a13 = mat[7];
 a20 = mat[8]; a21 = mat[9]; a22 = mat[10]; a23 = mat[11];
 dest[0] = a00; dest[1] = a01; dest[2] = a02; dest[3] = a03;
 dest[4] = a10; dest[5] = a11; dest[6] = a12; dest[7] = a13;
 dest[8] = a20; dest[9] = a21; dest[10] = a22; dest[11] = a23;
 dest[12] = a00 * x + a10 * y + a20 * z + mat[12];
 dest[13] = a01 * x + a11 * y + a21 * z + mat[13];
 dest[14] = a02 * x + a12 * y + a22 * z + mat[14];
 dest[15] = a03 * x + a13 * y + a23 * z + mat[15];
 return dest;
};
function mat4scale(mat, vec, dest) {
        var x = vec[0], y = vec[1], z = vec[2];
        if (!dest || mat === dest) {
            mat[0] *= x;
            mat[1] *= x;
            mat[2] *= x;
            mat[3] *= x;
            mat[4] *= y;
            mat[5] *= y;
            mat[6] *= y;
            mat[7] *= y;
            mat[8] *= z;
            mat[9] *= z;
            mat[10] *= z;
            mat[11] *= z;
            return mat;
        }
        dest[0] = mat[0] * x;
        dest[1] = mat[1] * x;
        dest[2] = mat[2] * x;
        dest[3] = mat[3] * x;
        dest[4] = mat[4] * y;
        dest[5] = mat[5] * y;
        dest[6] = mat[6] * y;
        dest[7] = mat[7] * y;
        dest[8] = mat[8] * z;
        dest[9] = mat[9] * z;
        dest[10] = mat[10] * z;
        dest[11] = mat[11] * z;
        dest[12] = mat[12];
        dest[13] = mat[13];
        dest[14] = mat[14];
        dest[15] = mat[15];
        return dest;
    };
function mat4frustum(left, right, bottom, top, near, far, dest) {
        if (!dest) { dest = mat4create(); }
        var rl = (right - left),
            tb = (top - bottom),
            fn = (far - near);
        dest[0] = (near * 2) / rl;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 0;
        dest[4] = 0;
        dest[5] = (near * 2) / tb;
        dest[6] = 0;
        dest[7] = 0;
        dest[8] = (right + left) / rl;
        dest[9] = (top + bottom) / tb;
        dest[10] = -(far + near) / fn;
        dest[11] = -1;
        dest[12] = 0;
        dest[13] = 0;
        dest[14] = -(far * near * 2) / fn;
        dest[15] = 0;
        return dest;
    };
function mat4perspective(fovy, aspect, near, far, dest) {
 var top = near * Math.tan(fovy * Math.PI / 360.0),
  right = top * aspect;
 return mat4frustum(-right, right, -top, top, near, far, dest);
};
function mat4lookAt(eye, center, up, dest) {
 if (!dest) { dest = mat4create(); }
 var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
  eyex = eye[0],
  eyey = eye[1],
  eyez = eye[2],
  upx = up[0],
  upy = up[1],
  upz = up[2],
  centerx = center[0],
  centery = center[1],
  centerz = center[2];
 if (eyex === centerx && eyey === centery && eyez === centerz) {
  return mat4identity(dest);
 }
 z0 = eyex - centerx;
 z1 = eyey - centery;
 z2 = eyez - centerz;
 len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
 z0 *= len;
 z1 *= len;
 z2 *= len;
 x0 = upy * z2 - upz * z1;
 x1 = upz * z0 - upx * z2;
 x2 = upx * z1 - upy * z0;
 len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
 if (!len) {
  x0 = 0;
  x1 = 0;
  x2 = 0;
 } else {
  len = 1 / len;
  x0 *= len;
  x1 *= len;
  x2 *= len;
 }
 y0 = z1 * x2 - z2 * x1;
 y1 = z2 * x0 - z0 * x2;
 y2 = z0 * x1 - z1 * x0;
 len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
 if (!len) {
  y0 = 0;
  y1 = 0;
  y2 = 0;
 } else {
  len = 1 / len;
  y0 *= len;
  y1 *= len;
  y2 *= len;
 }
 dest[0] = x0;
 dest[1] = y0;
 dest[2] = z0;
 dest[3] = 0;
 dest[4] = x1;
 dest[5] = y1;
 dest[6] = z1;
 dest[7] = 0;
 dest[8] = x2;
 dest[9] = y2;
 dest[10] = z2;
 dest[11] = 0;
 dest[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
 dest[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
 dest[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
 dest[15] = 1;
 return dest;
};
function vec3subtract(vec, vec2, dest) {
        if (!dest || vec === dest) {
            vec[0] -= vec2[0];
            vec[1] -= vec2[1];
            vec[2] -= vec2[2];
            return vec;
        }
        dest[0] = vec[0] - vec2[0];
        dest[1] = vec[1] - vec2[1];
        dest[2] = vec[2] - vec2[2];
        return dest;
    };
function vec3set(vec, dest) {
        dest[0] = vec[0];
        dest[1] = vec[1];
        dest[2] = vec[2];
        return dest;
    };
function vec3create(vec) {
        var dest = new MatrixArray(3);
        if (vec) {
            dest[0] = vec[0];
            dest[1] = vec[1];
            dest[2] = vec[2];
        } else {
            dest[0] = dest[1] = dest[2] = 0;
        }
        return dest;
    };
function vec3add(vec, vec2, dest) {
 if (!dest || vec === dest) {
  vec[0] += vec2[0];
  vec[1] += vec2[1];
  vec[2] += vec2[2];
  return vec;
 }
 dest[0] = vec[0] + vec2[0];
 dest[1] = vec[1] + vec2[1];
 dest[2] = vec[2] + vec2[2];
 return dest;
};
function vec3scale(vec, val, dest) {
        if (!dest || vec === dest) {
            vec[0] *= val;
            vec[1] *= val;
            vec[2] *= val;
            return vec;
        }
        dest[0] = vec[0] * val;
        dest[1] = vec[1] * val;
        dest[2] = vec[2] * val;
        return dest;
    };
function vec3normalize (vec, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2],
            len = Math.sqrt(x * x + y * y + z * z);
        if (!len) {
            dest[0] = 0;
            dest[1] = 0;
            dest[2] = 0;
            return dest;
        } else if (len === 1) {
            dest[0] = x;
            dest[1] = y;
            dest[2] = z;
            return dest;
        }
        len = 1 / len;
        dest[0] = x * len;
        dest[1] = y * len;
        dest[2] = z * len;
        return dest;
    };
function vec3cross (vec, vec2, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2],
            x2 = vec2[0], y2 = vec2[1], z2 = vec2[2];
        dest[0] = y * z2 - z * y2;
        dest[1] = z * x2 - x * z2;
        dest[2] = x * y2 - y * x2;
        return dest;
    };
function vec3length (vec) {
        var x = vec[0], y = vec[1], z = vec[2];
        return Math.sqrt(x * x + y * y + z * z);
    };
function quat4multiplyVec3(quat, vec, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2],
            qx = quat[0], qy = quat[1], qz = quat[2], qw = quat[3],
            ix = qw * x + qy * z - qz * y,
            iy = qw * y + qz * x - qx * z,
            iz = qw * z + qx * y - qy * x,
            iw = -qx * x - qy * y - qz * z;
        dest[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return dest;
    };
function quat4fromAngleAxis(angle, axis, dest) {
        if (!dest) dest = new MatrixArray(4);
        var half = angle * 0.5;
        var s = Math.sin(half);
        dest[3] = Math.cos(half);
        dest[0] = s * axis[0];
        dest[1] = s * axis[1];
        dest[2] = s * axis[2];
        return dest;
    };
function Random(x) {
 "use strict";
 do { if(!(x === (x|0))) { __error("assertion failed: " + "x === (x|0)" + " = " + (x === (x|0)), "src/random.js", 9); } } while(false);
 var MAX = 0xFFFF;
 var IntArray = Uint32Array || Array;
 var Q = new IntArray(4096);
 var c = 362436;
 var PHI = 0x9e3779b9;
 Q[0] = x;
 Q[1] = x + PHI;
 Q[2] = x + PHI + PHI;
 for (var j = 3; j < 4096; j++)
  Q[j] = Q[j - 3] ^ Q[j - 2] ^ PHI ^ j;
 var i = 4095;
 this.next = function() {
  var t, a = 18782;
  var x, r = 0xfffffffe;
  i = (i + 1) & 4095;
  t = a * Q[i] + c;
  c = (t >> 32);
  x = t + c;
  if (x < c) {
   x++;
   c++;
  }
  var ret = Q[i] = r - x;
  if(ret < 0) {
   return (-ret) % MAX;
  }
  return ret % MAX;
 };
};
function MapCreate(seed) {
 "use strict";
 var MAX_ATTEMPTS = 16;
 var X_PLUS = 0;
 var X_MINUS = 1;
 var Y_PLUS = 2;
 var Y_MINUS = 3;
 var Z_PLUS = 4;
 var Z_MINUS = 5;
 var directions = [];
 directions[X_PLUS] = [1,0,0];
 directions[X_MINUS] = [-1,0,0];
 directions[Y_PLUS] = [0,1,0];
 directions[Y_MINUS] = [0,-1,0];
 directions[Z_PLUS] = [0,0,1];
 directions[Z_MINUS] = [0,0,-1];
 function clearField(dimension) {
  var field = [];
  for(var x = dimension; x--;) {
   field[x] = [];
   for(var y = dimension; y--;) {
    field[x][y] = [];
    for(var z = dimension; z--;) {
     field[x][y][z] = 0;
    }
   }
  }
  return field;
 }
 function set(field, position, type) {
  do { if(!(field)) { __error("assertion failed: " + "field" + " = " + (field), "src/map.js", 48); } } while(false);
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 49); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 50); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 51); } } while(false);
  do { if(!(type instanceof Number) && !("Number".toLowerCase() === typeof type)) { __error("Objct " + "type" + " is not from type " + "Number", "src/map.js", 52); } } while(false);
  do { if(!(type === (type|0))) { __error("assertion failed: " + "type === (type|0)" + " = " + (type === (type|0)), "src/map.js", 54); } } while(false);
  var x = position[0];
  var y = position[1];
  var z = position[2];
  field[x][y][z] = type;
 }
 function get(field, dimension, position) {
  do { if(!(field)) { __error("assertion failed: " + "field" + " = " + (field), "src/map.js", 64); } } while(false);
  do { if(!(dimension > 0)) { __error("assertion failed: " + "dimension > 0" + " = " + (dimension > 0), "src/map.js", 65); } } while(false);
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 66); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 67); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 68); } } while(false);
  var x = position[0];
  var y = position[1];
  var z = position[2];
  if(x<0 || y<0 || z<0 || x>= dimension || y>=dimension || z>=dimension) {
   return -1;
  }
  return field[x][y][z];
 }
 function getOppositeDirection(n) {
  if(n === -1)
   return -1;
  else
   return [1,0,3,2,5,4][n];
 }
 function copyArray(array) {
  do { if(!(array instanceof Array)) { __error("assertion failed: " + "array instanceof Array" + " = " + (array instanceof Array), "src/map.js", 88); } } while(false);
  return array.slice(0);
 }
 function step(position, dir) {
  do { if(!(dir >= 0 && dir <= 5)) { __error("assertion failed: " + "dir >= 0 && dir <= 5" + " = " + (dir >= 0 && dir <= 5), "src/map.js", 93); } } while(false);
  var direction = directions[dir];
  var array = copyArray(position);
  array[0] += direction[0];
  array[1] += direction[1];
  array[2] += direction[2];
  return array;
 }
 function getCoords(position, dir, steps) {
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 104); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 105); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 106); } } while(false);
  do { if(!(dir instanceof Number) && !("Number".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Number", "src/map.js", 107); } } while(false);
  do { if(!(steps >= 0)) { __error("assertion failed: " + "steps >= 0" + " = " + (steps >= 0), "src/map.js", 108); } } while(false);
  if(steps === 0) return position;
  return getCoords(step(position, dir), dir, steps-1);
 }
 function nothingInBetween(field, dimension, position, dir, steps) {
  do { if(!(field.length)) { __error("assertion failed: " + "field.length" + " = " + (field.length), "src/map.js", 115); } } while(false);
  do { if(!(dimension instanceof Number) && !("Number".toLowerCase() === typeof dimension)) { __error("Objct " + "dimension" + " is not from type " + "Number", "src/map.js", 116); } } while(false);
  do { if(!(dir instanceof Number) && !("Number".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Number", "src/map.js", 117); } } while(false);
  do { if(!(steps instanceof Number) && !("Number".toLowerCase() === typeof steps)) { __error("Objct " + "steps" + " is not from type " + "Number", "src/map.js", 118); } } while(false);
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 119); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 120); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 121); } } while(false);
  if(steps < 2) return true;
  var newPos = getCoords(position, dir, 1);
  if( get(field,dimension, newPos) !== 0 ) return false;
  return nothingInBetween(field, dimension, newPos, dir, steps-1);
 }
 function markSpaceInBeteenAsPath(field, dimension, position, dir, steps) {
  do { if(!(field.length)) { __error("assertion failed: " + "field.length" + " = " + (field.length), "src/map.js", 132); } } while(false);
  do { if(!(dimension instanceof Number) && !("Number".toLowerCase() === typeof dimension)) { __error("Objct " + "dimension" + " is not from type " + "Number", "src/map.js", 133); } } while(false);
  do { if(!(dir instanceof Number) && !("Number".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Number", "src/map.js", 134); } } while(false);
  do { if(!(steps instanceof Number) && !("Number".toLowerCase() === typeof steps)) { __error("Objct " + "steps" + " is not from type " + "Number", "src/map.js", 135); } } while(false);
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 136); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 137); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 138); } } while(false);
  if(steps < 2) return true;
  var newPos = getCoords(position, dir, 1);
  if( get(field,dimension, newPos) !== 0 ) return false;
  set(field, newPos, 4);
  return nothingInBetween(field, dimension, newPos, dir, steps-1);
 }
 function fillRec(rand, position, iterationsLeft, attempt, directionICameFrom, path, field, dimension, setGoal) {
  do { if(!(position[0] instanceof Number) && !("Number".toLowerCase() === typeof position[0])) { __error("Objct " + "position[0]" + " is not from type " + "Number", "src/map.js", 151); } } while(false);
  do { if(!(position[1] instanceof Number) && !("Number".toLowerCase() === typeof position[1])) { __error("Objct " + "position[1]" + " is not from type " + "Number", "src/map.js", 152); } } while(false);
  do { if(!(position[2] instanceof Number) && !("Number".toLowerCase() === typeof position[2])) { __error("Objct " + "position[2]" + " is not from type " + "Number", "src/map.js", 153); } } while(false);
  var type = iterationsLeft === 1 && setGoal ? 3 : 1;
  var dir = rand.next() % 6;
  var steps = 3 + rand.next() % (dimension - 3);
  if(iterationsLeft === 0) return true;
  if(attempt >= MAX_ATTEMPTS) return false;
  if(dir === directionICameFrom || dir === getOppositeDirection(directionICameFrom)) {
   return fillRec(rand, position, iterationsLeft, attempt, directionICameFrom, path, field, dimension, setGoal);
  }
  if(!nothingInBetween(field, dimension, position, dir, steps)) {
   return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom, path, field, dimension, setGoal);
  }
  var newObjectCoords = getCoords(position, dir, steps);
  var obj = get(field, dimension, newObjectCoords);
  if(obj === -1) {
   return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom, path, field, dimension, setGoal);
  }
  markSpaceInBeteenAsPath(field, dimension, position, dir, steps);
  set(field, newObjectCoords, type);
  var newStartingPoint = getCoords(position, dir, steps-1);
  path.push(newStartingPoint);
  return fillRec(rand, newStartingPoint, iterationsLeft-1, 0, getOppositeDirection(dir), path, field, dimension, setGoal);
 }
 function fill(seed) {
  var dimension = 16;
  var rand = new Random(seed);
  var iterations = 3 + (rand.next() % 4);
  var startingPosition = [ (dimension/2) | 0, (dimension/2) | 0, (dimension/2) | 0 ];
  var field = clearField(dimension);
  set(field, startingPosition, 2);
  var steps = 10 - iterations;
  var lastpath = [];
  var succeed = fillRec(rand, startingPosition, iterations, 0, -1, lastpath, field, dimension, false);
  for(var i = 0; i !== iterations; i++) {
   var newPosition = lastpath[rand.next() % lastpath.length];
   lastpath = [];
   succeed = succeed && fillRec(rand, newPosition, iterations, 0, -1, lastpath, field, dimension, i === (iterations - 1));
  }
  if(succeed) {
   return {
    "startingPosition" : { x : startingPosition[0], y : startingPosition[0], z : startingPosition[0] },
    "getObject" : function(x,y,z) { return get(field, dimension, [x,y,z]); },
    "path" : lastpath,
    "dimension" : dimension
   };
  }
  else {
   return fill(seed+1);
  }
 }
 return fill(seed);
}
var Directions = (function() {
 var directions = [
  vec3create([ 1, 0, 0]),
  vec3create([-1, 0, 0]),
  vec3create([ 0, 1, 0]),
  vec3create([ 0,-1, 0]),
  vec3create([ 0, 0, 1]),
  vec3create([ 0, 0,-1])
 ];
 var zero = vec3create([0,0,0]);
 function getVector(dir) {
  do { if(!(dir >= -1 && dir <= 5)) { __error("assertion failed: " + "dir >= -1 && dir <= 5" + " = " + (dir >= -1 && dir <= 5), "src/directions.js", 28); } } while(false);
  if(dir === -1) return zero;
  return directions[dir];
 }
 function getOppositeDirection(dir) {
  do { if(!(dir >= -1 && dir <= 5)) { __error("assertion failed: " + "dir >= -1 && dir <= 5" + " = " + (dir >= -1 && dir <= 5), "src/directions.js", 35); } } while(false);
  if(dir === -1) return -1;
  return [1,0,3,2,5,4][dir];
 }
 function getOppositeVector(dir) {
  return getVector( getOppositeDirection(dir) );
 }
 function getDirectionBasedOnVector(vec) {
  var norm = vec3create(vec);
  vec3normalize(norm);
  for(var i = 0; i !== 6; i++) {
   var vdir = getVector(i);
   if(norm[0] === vdir[0] && norm[1] === vdir[1] && norm[2] === vdir[2]) {
    return i;
   }
  }
  if(norm[0] === 0 && norm[1] === 0 && norm[2] === 0) {
   return -1;
  }
  do { if(!(false && "vector not in area")) { __error("assertion failed: " + "false && \"vector not in area\"" + " = " + (false && "vector not in area"), "src/directions.js", 60); } } while(false);
 }
 return {
  getVector : getVector,
  getOppositeDirection : getOppositeDirection,
  getOppositeVector : getOppositeVector,
  getDirectionBasedOnVector : getDirectionBasedOnVector
 }
}());
var Sphere = (function() {
 var tmpvector = vec3create();
 function Statemachine(sphere, cubelist, goalpos, dimension) {
  "use strict";
  var speed = 8.0;
  var state = 0;
  var direction = vec3create();
  var currentPosition = vec3create();
  var startingPosition = vec3create(sphere.position);
  var movetime = 0;
  function reset() {
   for(var i = 0; i !== cubelist.length; i++) {
    var cube = cubelist[i];
    cube.reset();
   }
   vec3set(startingPosition, sphere.position);
   state = 0;
   sphere.size = 1;
   markCubesWhoSeeMeAsWatching(sphere.position, -1);
  }
  function markCubesWhoSeeMe(position, dir, view) {
   var x = position[0];
   var y = position[1];
   var z = position[2];
   if(x<0 || x>= dimension || y<0 || y>= dimension || z<0 || z>= dimension) {
    return;
   }
   var cube = getCube(x,y,z);
   if(cube) {
    if(view) {
     cube.view();
    } else {
     cube.unview();
    }
    return;
   }
   var v = Directions.getVector(dir);
   markCubesWhoSeeMe( [ x + v[0], y + v[1], z + v[2] ], dir, view);
  }
  function markCubesWhoSeeMeAsWatching(position, directionIAmGoing) {
   for(var dir = 0; dir !== 6; dir++) {
    if(dir === directionIAmGoing) continue;
    var vec = Directions.getVector(dir);
    var pos = vec3create(sphere.position);
    vec3add(pos, vec);
    markCubesWhoSeeMe(position, dir, true);
   }
  }
  function markCubesWhoSeeMeAsUnwatching(position, directionIAmGoing) {
   for(var dir = 0; dir !== 6; dir++) {
    if(dir === directionIAmGoing) continue;
    var vec = Directions.getVector(dir);
    var pos = vec3create(sphere.position);
    vec3add(pos, vec);
    markCubesWhoSeeMe(position, dir, false);
   }
  }
  function getCube(x,y,z) {
   for(var i = 0, l = cubelist.length; i !== l; i++) {
    var cube = cubelist[i]
    var pos = cube.position;
    if(pos[0] === x && pos[1] === y && pos[2] === z) {
     return cube;
    }
   }
   return null;
  }
  this.tick = function(time) {
   switch(state) {
    case 0:
    break;
    case 2:
    sphere.size -= time.delta * .5;
    if(sphere.size < 0) {
     reset();
     return;
    }
    case 1:
    vec3add(sphere.position, vec3scale(direction, time.delta * speed, tmpvector));
    movetime += time.delta * speed;
    if(movetime >= 1 && state !== 2) {
     vec3set(vec3add(currentPosition, direction, tmpvector), sphere.position);
     markCubesWhoSeeMeAsWatching(sphere.position, Directions.getDirectionBasedOnVector(direction));
     state = 0;
     movetime = 0.0;
     this.tap(time, direction);
    }
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 129 + ")", "unknow state.", state );
    break;
   }
  };
  this.tap = function(time, dir) {
   do { if(!(time.delta instanceof Number) && !("Number".toLowerCase() === typeof time.delta)) { __error("Objct " + "time.delta" + " is not from type " + "Number", "src/sphere.js", 135); } } while(false);
   do { if(!(dir instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Float32Array", "src/sphere.js", 136); } } while(false);
   do { if(!(Math.abs((vec3length(dir) - 1.0)) < 0.0001)) { __error("assertion failed: " + "Math.abs((vec3length(dir) - 1.0)) < 0.0001" + " = " + (Math.abs((vec3length(dir) - 1.0)) < 0.0001), "src/sphere.js", 137); } } while(false);
   switch(state) {
    case 1:
    case 2:
    break;
    case 0:
    var destx = Math.round(sphere.position[0] + dir[0]);
    var desty = Math.round(sphere.position[1] + dir[1]);
    var destz = Math.round(sphere.position[2] + dir[2]);
    if(destx === goalpos[0] && desty === goalpos[1] && destz === goalpos[2]) {
     console.log("DEBUG (" + "src/sphere.js" + ":" + 151 + ")", "winning" );
     return;
    }
    if(destx < 0 || destx >= dimension || desty < 0 || desty >= dimension || destz < 0 || destz >= dimension) {
     state = 2;
     markCubesWhoSeeMeAsUnwatching(sphere.position, Directions.getDirectionBasedOnVector(direction));
     return;
    }
    var cube = getCube(destx, desty, destz);
    if(cube) {
     cube.touch();
     if(sphere.lastCube && sphere.lastCube !== cube) {
      sphere.lastCube.leave();
     }
     sphere.lastCube = cube;
     return;
    }
    if(sphere.lastCube && sphere.lastCube !== cube) {
     sphere.lastCube.leave();
    }
    sphere.lastCube = cube;
    vec3set(dir, direction);
    vec3set(sphere.position, currentPosition);
    movetime = 0.0;
    markCubesWhoSeeMeAsUnwatching(sphere.position, Directions.getDirectionBasedOnVector(direction));
    state = 1;
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 191 + ")", "unknow state.", state );
    break;
   }
  };
  markCubesWhoSeeMeAsWatching(sphere.position, -1);
 }
 return function(position, cubelist, goalpos, dimension) {
  do { if(typeof position === "undefined" || typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/sphere.js", 201); } } while(false);
  do { if(typeof position === "undefined" || typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/sphere.js", 202); } } while(false);
  do { if(typeof position === "undefined" || typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/sphere.js", 203); } } while(false);
  do { if(!(this !== window)) { __error("assertion failed: " + "this !== window" + " = " + (this !== window), "src/sphere.js", 204); } } while(false);
  this.position = vec3create([position.x, position.y, position.z]);
  this.size = 1;
  this.lastCube = null;
  var state = new Statemachine(this, cubelist, goalpos, dimension);
  this.tap = function(info, dir) {
   state.tap(info, dir);
  };
  this.tick = function(info) {
   state.tick(info);
  };
 };
}());
function Cube(position) {
 var that = this;
 var face = 0;
 function touch() {
  face = 2;
 }
 function view() {
  switch(face) {
   case 0:
   face = 1;
   break;
   case 1:
   break;
   case 2:
   break;
   case 3:
   face = 4;
   break;
   case 4:
   break;
  }
 }
 function leave() {
  switch(face) {
   case 0:
   break;
   case 1:
   break;
   case 2:
   face = 3;
   break;
   case 3:
   break;
   case 4:
   face = 3;
   break;
  }
 }
 function unview() {
  switch(face) {
   case 0:
   break;
   case 1:
   face = 0;
   break;
   case 2:
   break;
   case 3:
   break;
   case 4:
   face = 3;
   break;
  }
 }
 that.position = position;
 that.getFace = function() { return face; };
 that.view = view;
 that.unview = unview;
 that.touch = touch;
 that.leave = leave;
 that.reset = function() { face = 0; };
}
do { if(!(64 === 16 * 4)) { __error("assertion failed: " + "CUBE_WIDTH === FACE_WIDTH * 4" + " = " + (64 === 16 * 4), "src/funkycube.js", 8); } } while(false);
var Funkycube;
!function() {
"use strict";
 function Point(x,y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
   return "[" + x + ", " + y + "]";
  };
 }
 Funkycube = function() {
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  var ctx = canvas.getContext("2d");
  function getCanvasCoordinate(face, x, y) {
   do { if(!(face >= 0 && face <= 5)) { __error("assertion failed: " + "face >= 0 && face <= 5" + " = " + (face >= 0 && face <= 5), "src/funkycube.js", 52); } } while(false);
   if(x < 0) {
    switch(face) {
     case 0:
     return getCanvasCoordinate(1, y, -x-1);
     case 1:
     return getCanvasCoordinate(5, -x-1, 16 - 1 - y);
     case 2:
     return getCanvasCoordinate(1, x + 16, y);
     case 3:
     return getCanvasCoordinate(2, x + 16, y);
     case 4:
     return getCanvasCoordinate(1, 16 - 1 - y, 16 + x);
     case 5:
     return getCanvasCoordinate(1, -x-1 ,16 - 1 - y);
     default: throw new RangeError();
    }
   }
   if(y < 0) {
    switch(face) {
     case 0:
     return getCanvasCoordinate(5, x, 16 + y);
     case 1:
     return getCanvasCoordinate(0, -y-1 ,x);
     case 2:
     return getCanvasCoordinate(0, x, 16 + y);
     case 3:
     return getCanvasCoordinate(0, 16 + y, 16 - 1 - x);
     case 4:
     return getCanvasCoordinate(2, x, 16 + y);
     case 5:
     return getCanvasCoordinate(4, x, 16 + y);
     default: throw new RangeError();
    }
   }
   if(x >= 16) {
    switch(face) {
     case 0:
     return getCanvasCoordinate(3, 16 - 1 - y, x - 16);
     case 1:
     return getCanvasCoordinate(2, x - 16, y);
     case 2:
     return getCanvasCoordinate(3, x - 16, y);
     case 3:
     return getCanvasCoordinate(5, 2*16 -1 - x, 16 - 1 - y);
     case 4:
     return getCanvasCoordinate(3, y, 2*16 -1 - x);
     case 5:
     return getCanvasCoordinate(3, 2*16 -1 - x, 16 - 1 - y);
     default: throw new RangeError();
    }
   }
   if(y >= 16) {
    switch(face) {
     case 0:
     return getCanvasCoordinate(2, x, y - 16);
     case 1:
     return getCanvasCoordinate(4, y - 16, 16 - 1 - x);
     case 2:
     return getCanvasCoordinate(4, x, y - 16);
     case 3:
     return getCanvasCoordinate(4, 2*16 -1 - y ,x);
     case 4:
     return getCanvasCoordinate(5, x, y - 16);
     case 5:
     return getCanvasCoordinate(0, x, y - 16);
     default: throw new RangeError();
    }
   }
   switch(face) {
    case 0: return new Point(x + 16 , y);
    case 1: return new Point(x , y + 16);
    case 2: return new Point(x + 16 , y + 16);
    case 3: return new Point(x + 16*2, y + 16);
    case 4: return new Point(x + 16 , y + 16*2);
    case 5: return new Point(x + 16 , y + 16*3);
    default: throw new RangeError();
   }
  }
  this.getCanvasCoordinate = getCanvasCoordinate;
  this.canvas = canvas;
  this.ctx = ctx;
 };
}();
var GL_ARRAY_BUFFER = 34962;
var GL_CLAMP_TO_EDGE = 33071;
var GL_CULL_FACE = 2884;
var GL_DEPTH_BUFFER_BIT = 256;
var GL_DEPTH_TEST = 2929;
var GL_FLOAT = 5126;
var GL_LINES = 1;
var GL_NEAREST = 9728;
var GL_RGBA = 6408;
var GL_STATIC_DRAW = 35044;
var GL_TEXTURE_2D = 3553;
var GL_TEXTURE_MAG_FILTER = 10240;
var GL_TEXTURE_MIN_FILTER = 10241;
var GL_TEXTURE_WRAP_S = 10242;
var GL_TEXTURE_WRAP_T = 10243;
var GL_TRIANGLES = 4;
var GL_UNPACK_FLIP_Y_WEBGL = 37440;
var GL_UNSIGNED_BYTE = 5121;
var cube;
var sphereData;
var sphere;
var sky;
var goal;
var goalBuffer;
var program;
var borderprogram;
var cubeBuffer;
var sphereBuffer;
var skyBuffer;
var borderBuffer;
var map;
var funkycube = new Funkycube();
var canvas = document.getElementsByTagName("canvas")[0];
var gl = GLT.createContext(canvas);
if(!gl) {
 alert("Issues with WebGL :(");
}
var glAttachShader = gl.attachShader.bind(gl);
var glBindBuffer = gl.bindBuffer.bind(gl);
var glBindTexture = gl.bindTexture.bind(gl);
var glBufferData = gl.bufferData.bind(gl);
var glClear = gl.clear.bind(gl);
var glClearColor = gl.clearColor.bind(gl);
var glCompileShader = gl.compileShader.bind(gl);
var glCreateBuffer = gl.createBuffer.bind(gl);
var glCreateProgram = gl.createProgram.bind(gl);
var glCreateShader = gl.createShader.bind(gl);
var glCreateTexture = gl.createTexture.bind(gl);
var glDisable = gl.disable.bind(gl);
var glDrawArrays = gl.drawArrays.bind(gl);
var glEnable = gl.enable.bind(gl);
var glEnableVertexAttribArray = gl.enableVertexAttribArray.bind(gl);
var glGetAttribLocation = gl.getAttribLocation.bind(gl);
var glGetProgramInfoLog = gl.getProgramInfoLog.bind(gl);
var glGetShaderInfoLog = gl.getShaderInfoLog.bind(gl);
var glGetUniformLocation = gl.getUniformLocation.bind(gl);
var glLineWidth = gl.lineWidth.bind(gl);
var glLinkProgram = gl.linkProgram.bind(gl);
var glPixelStorei = gl.pixelStorei.bind(gl);
var glShaderSource = gl.shaderSource.bind(gl);
var glTexImage2D = gl.texImage2D.bind(gl);
var glTexParameteri = gl.texParameteri.bind(gl);
var glUniform1i = gl.uniform1i.bind(gl);
var glUniformMatrix4fv = gl.uniformMatrix4fv.bind(gl);
var glUseProgram = gl.useProgram.bind(gl);
var glVertexAttribPointer = gl.vertexAttribPointer.bind(gl);
var glViewport = gl.viewport.bind(gl);
var glUniform2f = gl.uniform2f.bind(gl);
var input = new Input(canvas);
var projection = mat4perspective(75, canvas.width / canvas.height, 0.1, 1000);
var cameraPos = vec3create();
var cameraDir = vec3create();
var cameraUp = vec3create([0,1,0]);
var camera = mat4identity();
var cameraScale = 15;
canvas.onmousewheel = function(ev) {
 var d = ev.wheelDelta;
 if(d>0) cameraScale -= 0.5;
 if(d<0) cameraScale += 0.5;
 cameraScale = Math.min(20, Math.max(10, cameraScale));
 recalcCamera();
};
var tmpmatrix = mat4create();
var tmpvector = vec3create();
var cubetex = null;
var skytex = null;
var asisX = vec3create([1,0,0]);
var asisY = vec3create([0,1,0]);
var asisZ = vec3create([0,0,1]);
var cameraRotX = 0;
var cameraRotY = 0;
var cameraRotZ = 0;
var cubeNormals = [
 vec3create([ 0, 0, 0]),
 vec3create([ 1, 0, 0]),
 vec3create([ 0, 1, 0]),
 vec3create([ 0, 0, 1]),
 vec3create([ 0, 0,-1]),
 vec3create([ 0,-1, 0]),
 vec3create([-1, 0, 0])
];
var cubelist = [];
var goalpos = vec3create();
var tapped = false;
var tapEvent = null;
var dragged = false;
var dragEvent = null;
var eventPosition = { x : 0, y : 0 };
function recalcCamera() {
 var cameraWorldPos = tmpmatrix;
 vec3set(cameraPos, cameraWorldPos);
 vec3scale(cameraWorldPos, cameraScale);
 vec3add(cameraWorldPos, cameraDir);
 mat4lookAt(cameraWorldPos, cameraDir, cameraUp, camera);
}
function spinHorz(angle) {
 var q = quat4fromAngleAxis(angle, cameraUp);
 quat4multiplyVec3(q, cameraPos);
 recalcCamera();
}
function spinVert(angle) {
 var tmpvec = tmpmatrix;
 var camHorz = vec3normalize( vec3cross(cameraUp, cameraPos, tmpvec) );
 var q = quat4fromAngleAxis(angle, camHorz);
 quat4multiplyVec3(q, cameraPos);
 vec3normalize( vec3cross( cameraPos, camHorz, cameraUp ) );
 recalcCamera();
}
function setup() {
 glEnable( GL_DEPTH_TEST );
 glEnable( GL_CULL_FACE );
 glLineWidth(4.5);
 glClearColor(0,0,0,0);
 glViewport(0,0,canvas.width, canvas.height);
 cubeBuffer = glCreateBuffer();
 glBindBuffer(GL_ARRAY_BUFFER, cubeBuffer);
 glBufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);
 sphereBuffer = glCreateBuffer();
 glBindBuffer(GL_ARRAY_BUFFER, sphereBuffer);
 glBufferData(GL_ARRAY_BUFFER, sphereData.rawData, GL_STATIC_DRAW);
 skyBuffer = glCreateBuffer();
 glBindBuffer(GL_ARRAY_BUFFER, skyBuffer);
 glBufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);
 goalBuffer = glCreateBuffer();
 glBindBuffer(GL_ARRAY_BUFFER, goalBuffer);
 glBufferData(GL_ARRAY_BUFFER, goal.rawData, GL_STATIC_DRAW);
 var path = new Float32Array( 3 * map.path.length );
 var j = 0;
 path[j++] = map.startingPosition.x;
 path[j++] = map.startingPosition.y;
 path[j++] = map.startingPosition.z;
 for(var i = 0; i !== map.path.length; i++) {
  path[j++] = map.path[i][0];
  path[j++] = map.path[i][1];
  path[j++] = map.path[i][2];
 }
 pathBuffer = glCreateBuffer();
 glBindBuffer(GL_ARRAY_BUFFER, pathBuffer);
 glBufferData(GL_ARRAY_BUFFER, path, GL_STATIC_DRAW);
}
function gameloop(info) {
 update(info);
 draw(info);
 GLT.requestGameFrame(gameloop);
}
var getClickDirection = (function() {
 var asisXMinus = vec3create([-1,0,0]);
 var asisYMinus = vec3create([0,-1,0]);
 var asisZMinus = vec3create([0,0,-1]);
 var vectorNormals = [
  asisX,
  asisXMinus,
  asisY,
  asisYMinus,
  asisZ,
  asisZMinus
 ];
 var cam = vec3create();
 var div = vec3create();
 return function(camPos) {
  vec3set(camPos, cam);
  vec3normalize(cam);
  var lastLength = 99999;
  var lastIndex = -1;
  for(var i = 0; i !== 6; i++) {
   var current = vectorNormals[i];
   vec3subtract(cam, current, div);
   var length = vec3length(div);
   if(lastLength > length) {
    lastLength = length;
    lastIndex = i;
   }
  }
  return vectorNormals[[1,0,3,2,5,4][lastIndex]];
 };
}());
function update(info) {
 if(input.poke) {
  var dir = getClickDirection(cameraPos);
  sphere.tap(info, dir);
 }
 if(input.drag) {
  var disx = input.dragDirection.x * 2 * Math.PI / canvas.width;
  var disy = input.dragDirection.y * 2 * Math.PI / canvas.height;
  spinHorz(disx);
  spinVert(disy);
 }
 input.update();
 sphere.tick(info);
}
function draw(info) {
 glDisable( GL_DEPTH_TEST );
 drawSky(program);
 glEnable( GL_DEPTH_TEST );
 glClear(GL_DEPTH_BUFFER_BIT);
 drawCubes(program);
 drawSphere(program);
 drawGoal(program);
}
function drawCubes(program) {
 glUseProgram(program);
 var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection");
 var uTexture = glGetUniformLocation(program, "uTexture");
 var uTextureOffset = glGetUniformLocation(program, "uTextureOffset");
 var aVertex = glGetAttribLocation(program, "aVertex");
 var aTextureuv = glGetAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 glBindBuffer(GL_ARRAY_BUFFER, cubeBuffer);
 glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset);
 glEnableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, cube.stride, cube.toffset);
  glEnableVertexAttribArray(aTextureuv);
 }
 if(uTexture) {
  glBindTexture(GL_TEXTURE_2D, cubetex);
  glUniform1i(uTexture, 0);
 }
 for(var i = 0; i != cubelist.length; i++) {
  var object = cubelist[i];
  if(uTextureOffset) {
   switch(object.getFace()) {
    case 0:
    glUniform2f(uTextureOffset, 0,0);
    break;
    case 1:
    glUniform2f(uTextureOffset, 10/32,0);
    break;
    case 2:
    glUniform2f(uTextureOffset, 10/32,10/32);
    break;
    case 3:
    glUniform2f(uTextureOffset, 0,10/32);
    break;
    case 4:
    glUniform2f(uTextureOffset, 20/32,0);
    break;
   }
  }
  mat4multiply(projection, camera, modelviewprojection);
  mat4translate(modelviewprojection, object.position);
  glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
  glDrawArrays(GL_TRIANGLES, 0, cube.numVertices);
 }
}
function drawSphere(program) {
 glUseProgram(program);
 var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection");
 var uTexture = glGetUniformLocation(program, "uTexture");
 var aVertex = glGetAttribLocation(program, "aVertex");
 var aTextureuv = glGetAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 glBindBuffer(GL_ARRAY_BUFFER, sphereBuffer);
 glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, sphereData.stride, sphereData.voffset);
 glEnableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sphereData.stride, sphereData.toffset);
  glEnableVertexAttribArray(aTextureuv);
 }
 if(uTexture) {
  glBindTexture(GL_TEXTURE_2D, cubetex);
  glUniform1i(uTexture, 0);
 }
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, sphere.position);
 if(sphere.size !== 1.0) {
  mat4scale(modelviewprojection, [sphere.size, sphere.size, sphere.size]);
 }
 glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 glDrawArrays(GL_TRIANGLES, 0, sphereData.numVertices);
}
function drawGoal(program) {
 glUseProgram(program);
 var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection");
 var uTexture = glGetUniformLocation(program, "uTexture");
 var aVertex = glGetAttribLocation(program, "aVertex");
 var aTextureuv = glGetAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 glBindBuffer(GL_ARRAY_BUFFER, goalBuffer);
 glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, goal.stride, goal.voffset);
 glEnableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, goal.stride, goal.toffset);
  glEnableVertexAttribArray(aTextureuv);
 }
 if(uTexture) {
  glBindTexture(GL_TEXTURE_2D, cubetex);
  glUniform1i(uTexture, 0);
 }
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, goalpos);
 glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 glDrawArrays(GL_TRIANGLES, 0, goal.numVertices);
}
function drawSky(program) {
 glUseProgram(program);
 var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection");
 var uTexture = glGetUniformLocation(program, "uTexture");
 var aVertex = glGetAttribLocation(program, "aVertex");
 var aTextureuv = glGetAttribLocation(program, "aTextureuv");
 var uTextureOffset = glGetUniformLocation(program, "uTextureOffset");
 var modelviewprojection = tmpmatrix;
 do { if(!(uModelviewprojection)) { __error("assertion failed: " + "uModelviewprojection" + " = " + (uModelviewprojection), "src/main.js", 382); } } while(false);
 do { if(!(uTexture)) { __error("assertion failed: " + "uTexture" + " = " + (uTexture), "src/main.js", 383); } } while(false);
 do { if(!(aTextureuv !== -1)) { __error("assertion failed: " + "aTextureuv !== -1" + " = " + (aTextureuv !== -1), "src/main.js", 384); } } while(false);
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 385); } } while(false);
 glBindBuffer(GL_ARRAY_BUFFER, skyBuffer);
 glVertexAttribPointer(aVertex, 4, GL_FLOAT, false, sky.stride, sky.voffset);
 glEnableVertexAttribArray(aVertex);
 glVertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sky.stride, sky.toffset);
 glEnableVertexAttribArray(aTextureuv);
 glBindTexture(GL_TEXTURE_2D, skytex);
 glUniform1i(uTexture, 0);
 var camPos = vec3set(cameraPos, tmpvector);
 vec3scale(camPos, cameraScale);
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, cameraDir);
 mat4translate(modelviewprojection, camPos);
 glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 glUniform2f(uTextureOffset, 0,0);
 glDrawArrays(GL_TRIANGLES, 0, sky.numVertices);
}
function drawPath(program, path) {
 glUseProgram(program);
 var aVertex = glGetAttribLocation(program, "aVertex");
 var uModelviewprojection = glGetUniformLocation(program, "uModelviewprojection");
 var modelviewprojection = tmpmatrix;
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 418); } } while(false);
 do { if(!(uModelviewprojection !== -1)) { __error("assertion failed: " + "uModelviewprojection !== -1" + " = " + (uModelviewprojection !== -1), "src/main.js", 419); } } while(false);
 glBindBuffer(GL_ARRAY_BUFFER, pathBuffer);
 glVertexAttribPointer(aVertex, 3, GL_FLOAT, false, 0, 0);
 glEnableVertexAttribArray(aVertex);
 mat4multiply(projection, camera, modelviewprojection);
 glUniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 for(var i = 0; i !== map.path.length - 1; i++) {
  glDrawArrays(GL_LINES, i, 2);
 }
}
function setCanvasForTexture(canvas, text) {
 glBindTexture(GL_TEXTURE_2D, text);
 glPixelStorei(GL_UNPACK_FLIP_Y_WEBGL, true);
 glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, GL_RGBA, GL_UNSIGNED_BYTE, canvas);
 glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
 glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
}
function createTexture(img) {
 do { if(!(img)) { __error("assertion failed: " + "img" + " = " + (img), "src/main.js", 447); } } while(false);
 var tex = glCreateTexture();
 setCanvasForTexture(img, tex);
 glBindTexture(GL_TEXTURE_2D, null);
 return tex;
}
GLT.loadmanager.loadFiles({
 "files" : ["cube.obj", "sphere.obj", "diffuse.shader", "faces.gif", "skybox.obj", "border.shader", "heart.obj"],
 "error" : function(file, err) {
  console.error("ERROR (" + "src/main.js" + ":" + 461 + ")", file, err );
 },
 "finished" : function(files) {
  cube = files["cube.obj"];
  sky = files["skybox.obj"];
  sphereData = files["sphere.obj"];
  goal = files["heart.obj"];
  program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
  borderprogram = GLT.shader.compileProgram(gl,files["border.shader"]);
  cubetex = createTexture(files["faces.gif"]);
  skytex = createTexture( funkycube.canvas );
  var MAX = 10;
  var dotsposx = new Int32Array(MAX);
  var dotsposy = new Int32Array(MAX);
  var dotsdir = new Int32Array(MAX);
  var dotsface = new Int32Array(MAX);
  for(var i = 0; i !== MAX; i++) {
   dotsposx[i] = (Math.random() * 16) | 0;
   dotsposy[i] = (Math.random() * 16) | 0;
   dotsdir[i] = (Math.random() * 2) | 0;
   dotsface[i] = (Math.random() * 6) | 0;
  }
  setInterval(function() {
   funkycube.ctx.beginPath();
   funkycube.ctx.fillStyle = "#000000";
   funkycube.ctx.globalAlpha = 0.2;
   funkycube.ctx.rect(0,0,64,64);
   funkycube.ctx.fill();
   funkycube.ctx.globalAlpha = 1;
   for(var i = 0; i !== MAX; i++) {
    var posx = dotsposx[i];
    var posy = dotsposy[i];
    var dir = dotsdir[i];
    var face = dotsface[i];
    var posincanvas = funkycube.getCanvasCoordinate(face, posx, posy);
    funkycube.ctx.beginPath();
    funkycube.ctx.fillStyle = "#FF0000";
    funkycube.ctx.rect(posincanvas.x,posincanvas.y, 1, 1);
    funkycube.ctx.fill();
    if(dir) {
     dotsposx[i]++;
    }
    else {
     dotsposy[i]++;
    }
   }
   setCanvasForTexture(funkycube.canvas, skytex);
  }, 100);
  var seed = (0xFFFF * Math.random()) & 0xFFFF;
  console.log("DEBUG (" + "src/main.js" + ":" + 520 + ")", "SEED", seed );
  map = MapCreate(seed);
  for(var x = 0; x !== 16; x++)
   for(var y = 0; y !== 16; y++)
    for(var z = 0; z !== 16; z++) {
     var obj = map.getObject(x,y,z);
     if(obj === 1) {
      cubelist.push( new Cube( vec3create([x,y,z]) ) );
     }
     else if(obj === 3) {
      goalpos[0] = x;
      goalpos[1] = y;
      goalpos[2] = z;
     }
    }
  cameraDir[0] = map.startingPosition.x;
  cameraDir[1] = map.startingPosition.x;
  cameraDir[2] = map.startingPosition.x;
  sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }, cubelist, goalpos, map.dimension);
  vec3set(cameraDir, cameraPos);
  cameraPos[0] = 0;
  cameraPos[1] = 0;
  cameraPos[2] = 1;
  setup();
  recalcCamera();
  GLT.requestGameFrame(gameloop);
  spinHorz(3.14/4);
  spinVert(-3.14/4);
 }
});
console.log("DEBUG (" + "src/main.js" + ":" + 559 + ")", "DEBUG Build:", "Sep 12 2012", "16:07:17" );
}
catch(e) {
 var m = e.message || e;
 document.body.innerHTML = m;
 alert(m);
}
