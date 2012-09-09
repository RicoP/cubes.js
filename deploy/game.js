var GL_DEPTH_BUFFER_BIT = 256;
var GL_STENCIL_BUFFER_BIT = 1024;
var GL_COLOR_BUFFER_BIT = 16384;
var GL_POINTS = 0;
var GL_LINES = 1;
var GL_LINE_LOOP = 2;
var GL_LINE_STRIP = 3;
var GL_TRIANGLES = 4;
var GL_TRIANGLE_STRIP = 5;
var GL_TRIANGLE_FAN = 6;
var GL_ZERO = 0;
var GL_ONE = 1;
var GL_SRC_COLOR = 768;
var GL_ONE_MINUS_SRC_COLOR = 769;
var GL_SRC_ALPHA = 770;
var GL_ONE_MINUS_SRC_ALPHA = 771;
var GL_DST_ALPHA = 772;
var GL_ONE_MINUS_DST_ALPHA = 773;
var GL_DST_COLOR = 774;
var GL_ONE_MINUS_DST_COLOR = 775;
var GL_SRC_ALPHA_SATURATE = 776;
var GL_FUNC_ADD = 32774;
var GL_BLEND_EQUATION = 32777;
var GL_BLEND_EQUATION_RGB = 32777;
var GL_BLEND_EQUATION_ALPHA = 34877;
var GL_FUNC_SUBTRACT = 32778;
var GL_FUNC_REVERSE_SUBTRACT = 32779;
var GL_BLEND_DST_RGB = 32968;
var GL_BLEND_SRC_RGB = 32969;
var GL_BLEND_DST_ALPHA = 32970;
var GL_BLEND_SRC_ALPHA = 32971;
var GL_CONSTANT_COLOR = 32769;
var GL_ONE_MINUS_CONSTANT_COLOR = 32770;
var GL_CONSTANT_ALPHA = 32771;
var GL_ONE_MINUS_CONSTANT_ALPHA = 32772;
var GL_BLEND_COLOR = 32773;
var GL_ARRAY_BUFFER = 34962;
var GL_ELEMENT_ARRAY_BUFFER = 34963;
var GL_ARRAY_BUFFER_BINDING = 34964;
var GL_ELEMENT_ARRAY_BUFFER_BINDING = 34965;
var GL_STREAM_DRAW = 35040;
var GL_STATIC_DRAW = 35044;
var GL_DYNAMIC_DRAW = 35048;
var GL_BUFFER_SIZE = 34660;
var GL_BUFFER_USAGE = 34661;
var GL_CURRENT_VERTEX_ATTRIB = 34342;
var GL_FRONT = 1028;
var GL_BACK = 1029;
var GL_FRONT_AND_BACK = 1032;
var GL_TEXTURE_2D = 3553;
var GL_CULL_FACE = 2884;
var GL_BLEND = 3042;
var GL_DITHER = 3024;
var GL_STENCIL_TEST = 2960;
var GL_DEPTH_TEST = 2929;
var GL_SCISSOR_TEST = 3089;
var GL_POLYGON_OFFSET_FILL = 32823;
var GL_SAMPLE_ALPHA_TO_COVERAGE = 32926;
var GL_SAMPLE_COVERAGE = 32928;
var GL_NO_ERROR = 0;
var GL_INVALID_ENUM = 1280;
var GL_INVALID_VALUE = 1281;
var GL_INVALID_OPERATION = 1282;
var GL_OUT_OF_MEMORY = 1285;
var GL_CW = 2304;
var GL_CCW = 2305;
var GL_LINE_WIDTH = 2849;
var GL_ALIASED_POINT_SIZE_RANGE = 33901;
var GL_ALIASED_LINE_WIDTH_RANGE = 33902;
var GL_CULL_FACE_MODE = 2885;
var GL_FRONT_FACE = 2886;
var GL_DEPTH_RANGE = 2928;
var GL_DEPTH_WRITEMASK = 2930;
var GL_DEPTH_CLEAR_VALUE = 2931;
var GL_DEPTH_FUNC = 2932;
var GL_STENCIL_CLEAR_VALUE = 2961;
var GL_STENCIL_FUNC = 2962;
var GL_STENCIL_FAIL = 2964;
var GL_STENCIL_PASS_DEPTH_FAIL = 2965;
var GL_STENCIL_PASS_DEPTH_PASS = 2966;
var GL_STENCIL_REF = 2967;
var GL_STENCIL_VALUE_MASK = 2963;
var GL_STENCIL_WRITEMASK = 2968;
var GL_STENCIL_BACK_FUNC = 34816;
var GL_STENCIL_BACK_FAIL = 34817;
var GL_STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
var GL_STENCIL_BACK_PASS_DEPTH_PASS = 34819;
var GL_STENCIL_BACK_REF = 36003;
var GL_STENCIL_BACK_VALUE_MASK = 36004;
var GL_STENCIL_BACK_WRITEMASK = 36005;
var GL_VIEWPORT = 2978;
var GL_SCISSOR_BOX = 3088;
var GL_COLOR_CLEAR_VALUE = 3106;
var GL_COLOR_WRITEMASK = 3107;
var GL_UNPACK_ALIGNMENT = 3317;
var GL_PACK_ALIGNMENT = 3333;
var GL_MAX_TEXTURE_SIZE = 3379;
var GL_MAX_VIEWPORT_DIMS = 3386;
var GL_SUBPIXEL_BITS = 3408;
var GL_RED_BITS = 3410;
var GL_GREEN_BITS = 3411;
var GL_BLUE_BITS = 3412;
var GL_ALPHA_BITS = 3413;
var GL_DEPTH_BITS = 3414;
var GL_STENCIL_BITS = 3415;
var GL_POLYGON_OFFSET_UNITS = 10752;
var GL_POLYGON_OFFSET_FACTOR = 32824;
var GL_TEXTURE_BINDING_2D = 32873;
var GL_SAMPLE_BUFFERS = 32936;
var GL_SAMPLES = 32937;
var GL_SAMPLE_COVERAGE_VALUE = 32938;
var GL_SAMPLE_COVERAGE_INVERT = 32939;
var GL_NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
var GL_COMPRESSED_TEXTURE_FORMATS = 34467;
var GL_DONT_CARE = 4352;
var GL_FASTEST = 4353;
var GL_NICEST = 4354;
var GL_GENERATE_MIPMAP_HINT = 33170;
var GL_BYTE = 5120;
var GL_UNSIGNED_BYTE = 5121;
var GL_SHORT = 5122;
var GL_UNSIGNED_SHORT = 5123;
var GL_INT = 5124;
var GL_UNSIGNED_INT = 5125;
var GL_FLOAT = 5126;
var GL_DEPTH_COMPONENT = 6402;
var GL_ALPHA = 6406;
var GL_RGB = 6407;
var GL_RGBA = 6408;
var GL_LUMINANCE = 6409;
var GL_LUMINANCE_ALPHA = 6410;
var GL_UNSIGNED_SHORT_4_4_4_4 = 32819;
var GL_UNSIGNED_SHORT_5_5_5_1 = 32820;
var GL_UNSIGNED_SHORT_5_6_5 = 33635;
var GL_FRAGMENT_SHADER = 35632;
var GL_VERTEX_SHADER = 35633;
var GL_MAX_VERTEX_ATTRIBS = 34921;
var GL_MAX_VERTEX_UNIFORM_VECTORS = 36347;
var GL_MAX_VARYING_VECTORS = 36348;
var GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
var GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
var GL_MAX_TEXTURE_IMAGE_UNITS = 34930;
var GL_MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
var GL_SHADER_TYPE = 35663;
var GL_DELETE_STATUS = 35712;
var GL_LINK_STATUS = 35714;
var GL_VALIDATE_STATUS = 35715;
var GL_ATTACHED_SHADERS = 35717;
var GL_ACTIVE_UNIFORMS = 35718;
var GL_ACTIVE_UNIFORM_MAX_LENGTH = 35719;
var GL_ACTIVE_ATTRIBUTES = 35721;
var GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
var GL_SHADING_LANGUAGE_VERSION = 35724;
var GL_CURRENT_PROGRAM = 35725;
var GL_NEVER = 512;
var GL_LESS = 513;
var GL_EQUAL = 514;
var GL_LEQUAL = 515;
var GL_GREATER = 516;
var GL_NOTEQUAL = 517;
var GL_GEQUAL = 518;
var GL_ALWAYS = 519;
var GL_KEEP = 7680;
var GL_REPLACE = 7681;
var GL_INCR = 7682;
var GL_DECR = 7683;
var GL_INVERT = 5386;
var GL_INCR_WRAP = 34055;
var GL_DECR_WRAP = 34056;
var GL_VENDOR = 7936;
var GL_RENDERER = 7937;
var GL_VERSION = 7938;
var GL_NEAREST = 9728;
var GL_LINEAR = 9729;
var GL_NEAREST_MIPMAP_NEAREST = 9984;
var GL_LINEAR_MIPMAP_NEAREST = 9985;
var GL_NEAREST_MIPMAP_LINEAR = 9986;
var GL_LINEAR_MIPMAP_LINEAR = 9987;
var GL_TEXTURE_MAG_FILTER = 10240;
var GL_TEXTURE_MIN_FILTER = 10241;
var GL_TEXTURE_WRAP_S = 10242;
var GL_TEXTURE_WRAP_T = 10243;
var GL_TEXTURE = 5890;
var GL_TEXTURE_CUBE_MAP = 34067;
var GL_TEXTURE_BINDING_CUBE_MAP = 34068;
var GL_TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
var GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
var GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
var GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
var GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
var GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
var GL_MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
var GL_TEXTURE0 = 33984;
var GL_TEXTURE1 = 33985;
var GL_TEXTURE2 = 33986;
var GL_TEXTURE3 = 33987;
var GL_TEXTURE4 = 33988;
var GL_TEXTURE5 = 33989;
var GL_TEXTURE6 = 33990;
var GL_TEXTURE7 = 33991;
var GL_TEXTURE8 = 33992;
var GL_TEXTURE9 = 33993;
var GL_TEXTURE10 = 33994;
var GL_TEXTURE11 = 33995;
var GL_TEXTURE12 = 33996;
var GL_TEXTURE13 = 33997;
var GL_TEXTURE14 = 33998;
var GL_TEXTURE15 = 33999;
var GL_TEXTURE16 = 34000;
var GL_TEXTURE17 = 34001;
var GL_TEXTURE18 = 34002;
var GL_TEXTURE19 = 34003;
var GL_TEXTURE20 = 34004;
var GL_TEXTURE21 = 34005;
var GL_TEXTURE22 = 34006;
var GL_TEXTURE23 = 34007;
var GL_TEXTURE24 = 34008;
var GL_TEXTURE25 = 34009;
var GL_TEXTURE26 = 34010;
var GL_TEXTURE27 = 34011;
var GL_TEXTURE28 = 34012;
var GL_TEXTURE29 = 34013;
var GL_TEXTURE30 = 34014;
var GL_TEXTURE31 = 34015;
var GL_ACTIVE_TEXTURE = 34016;
var GL_REPEAT = 10497;
var GL_CLAMP_TO_EDGE = 33071;
var GL_MIRRORED_REPEAT = 33648;
var GL_FLOAT_VEC2 = 35664;
var GL_FLOAT_VEC3 = 35665;
var GL_FLOAT_VEC4 = 35666;
var GL_INT_VEC2 = 35667;
var GL_INT_VEC3 = 35668;
var GL_INT_VEC4 = 35669;
var GL_BOOL = 35670;
var GL_BOOL_VEC2 = 35671;
var GL_BOOL_VEC3 = 35672;
var GL_BOOL_VEC4 = 35673;
var GL_FLOAT_MAT2 = 35674;
var GL_FLOAT_MAT3 = 35675;
var GL_FLOAT_MAT4 = 35676;
var GL_SAMPLER_2D = 35678;
var GL_SAMPLER_CUBE = 35680;
var GL_VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
var GL_VERTEX_ATTRIB_ARRAY_SIZE = 34339;
var GL_VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
var GL_VERTEX_ATTRIB_ARRAY_TYPE = 34341;
var GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
var GL_VERTEX_ATTRIB_ARRAY_POINTER = 34373;
var GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
var GL_COMPILE_STATUS = 35713;
var GL_INFO_LOG_LENGTH = 35716;
var GL_SHADER_SOURCE_LENGTH = 35720;
var GL_LOW_FLOAT = 36336;
var GL_MEDIUM_FLOAT = 36337;
var GL_HIGH_FLOAT = 36338;
var GL_LOW_INT = 36339;
var GL_MEDIUM_INT = 36340;
var GL_HIGH_INT = 36341;
var GL_FRAMEBUFFER = 36160;
var GL_RENDERBUFFER = 36161;
var GL_RGBA4 = 32854;
var GL_RGB5_A1 = 32855;
var GL_RGB565 = 36194;
var GL_DEPTH_COMPONENT16 = 33189;
var GL_STENCIL_INDEX = 6401;
var GL_STENCIL_INDEX8 = 36168;
var GL_DEPTH_STENCIL = 34041;
var GL_RENDERBUFFER_WIDTH = 36162;
var GL_RENDERBUFFER_HEIGHT = 36163;
var GL_RENDERBUFFER_INTERNAL_FORMAT = 36164;
var GL_RENDERBUFFER_RED_SIZE = 36176;
var GL_RENDERBUFFER_GREEN_SIZE = 36177;
var GL_RENDERBUFFER_BLUE_SIZE = 36178;
var GL_RENDERBUFFER_ALPHA_SIZE = 36179;
var GL_RENDERBUFFER_DEPTH_SIZE = 36180;
var GL_RENDERBUFFER_STENCIL_SIZE = 36181;
var GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
var GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
var GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
var GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
var GL_COLOR_ATTACHMENT0 = 36064;
var GL_DEPTH_ATTACHMENT = 36096;
var GL_STENCIL_ATTACHMENT = 36128;
var GL_DEPTH_STENCIL_ATTACHMENT = 33306;
var GL_NONE = 0;
var GL_FRAMEBUFFER_COMPLETE = 36053;
var GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
var GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
var GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
var GL_FRAMEBUFFER_UNSUPPORTED = 36061;
var GL_FRAMEBUFFER_BINDING = 36006;
var GL_RENDERBUFFER_BINDING = 36007;
var GL_MAX_RENDERBUFFER_SIZE = 34024;
var GL_INVALID_FRAMEBUFFER_OPERATION = 1286;
var GL_UNPACK_FLIP_Y_WEBGL = 37440;
var GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
var GL_CONTEXT_LOST_WEBGL = 37442;
var GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
var GL_BROWSER_DEFAULT_WEBGL = 37444;
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
 var keysDown = new Uint8Array(SIZE);
 var keysDownOld = new Uint8Array(SIZE);
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
function Hammer(element, options, undefined)
{
    var self = this;
    var defaults = {
        prevent_default : false,
        css_hacks : true,
        swipe : true,
        swipe_time : 200,
        swipe_min_distance : 20,
        drag : true,
        drag_vertical : true,
        drag_horizontal : true,
        drag_min_distance : 20,
        transform : true,
        scale_treshold : 0.1,
        rotation_treshold : 15,
        tap : true,
        tap_double : true,
        tap_max_interval : 300,
        tap_max_distance : 10,
        tap_double_distance: 20,
        hold : true,
        hold_timeout : 500
    };
    options = mergeObject(defaults, options);
    (function() {
        if(!options.css_hacks) {
            return false;
        }
        var vendors = ['webkit','moz','ms','o',''];
        var css_props = {
            "userSelect": "none",
            "touchCallout": "none",
            "userDrag": "none",
            "tapHighlightColor": "rgba(0,0,0,0)"
        };
        var prop = '';
        for(var i = 0; i < vendors.length; i++) {
            for(var p in css_props) {
                prop = p;
                if(vendors[i]) {
                    prop = vendors[i] + prop.substring(0, 1).toUpperCase() + prop.substring(1);
                }
                element.style[ prop ] = css_props[p];
            }
        }
    })();
    var _distance = 0;
    var _angle = 0;
    var _direction = 0;
    var _pos = { };
    var _fingers = 0;
    var _first = false;
    var _gesture = null;
    var _prev_gesture = null;
    var _touch_start_time = null;
    var _prev_tap_pos = {x: 0, y: 0};
    var _prev_tap_end_time = null;
    var _hold_timer = null;
    var _offset = {};
    var _mousedown = false;
    var _event_start;
    var _event_move;
    var _event_end;
    var _has_touch = ('ontouchstart' in window);
    this.option = function(key, val) {
        if(val != undefined) {
            options[key] = val;
        }
        return options[key];
    };
    this.getDirectionFromAngle = function( angle )
    {
        var directions = {
            down: angle >= 45 && angle < 135,
            left: angle >= 135 || angle <= -135,
            up: angle < -45 && angle > -135,
            right: angle >= -45 && angle <= 45
        };
        var direction, key;
        for(key in directions){
            if(directions[key]){
                direction = key;
                break;
            }
        }
        return direction;
    };
    function countFingers( event )
    {
        return event.touches ? event.touches.length : 1;
    }
    function getXYfromEvent( event )
    {
        event = event || window.event;
        if(!_has_touch) {
            var doc = document,
                body = doc.body;
            return [{
                x: event.pageX || event.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && doc.clientLeft || 0 ),
                y: event.pageY || event.clientY + ( doc && doc.scrollTop || body && body.scrollTop || 0 ) - ( doc && doc.clientTop || body && doc.clientTop || 0 )
            }];
        }
        else {
            var pos = [], src, touches = event.touches.length > 0 ? event.touches : event.changedTouches;
            for(var t=0, len=touches.length; t<len; t++) {
                src = touches[t];
                pos.push({ x: src.pageX, y: src.pageY });
            }
            return pos;
        }
    }
    function getAngle( pos1, pos2 )
    {
        return Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    }
    function calculateScale(pos_start, pos_move)
    {
        if(pos_start.length == 2 && pos_move.length == 2) {
            var x, y;
            x = pos_start[0].x - pos_start[1].x;
            y = pos_start[0].y - pos_start[1].y;
            var start_distance = Math.sqrt((x*x) + (y*y));
            x = pos_move[0].x - pos_move[1].x;
            y = pos_move[0].y - pos_move[1].y;
            var end_distance = Math.sqrt((x*x) + (y*y));
            return end_distance / start_distance;
        }
        return 0;
    }
    function calculateRotation(pos_start, pos_move)
    {
        if(pos_start.length == 2 && pos_move.length == 2) {
            var x, y;
            x = pos_start[0].x - pos_start[1].x;
            y = pos_start[0].y - pos_start[1].y;
            var start_rotation = Math.atan2(y, x) * 180 / Math.PI;
            x = pos_move[0].x - pos_move[1].x;
            y = pos_move[0].y - pos_move[1].y;
            var end_rotation = Math.atan2(y, x) * 180 / Math.PI;
            return end_rotation - start_rotation;
        }
        return 0;
    }
    function triggerEvent( eventName, params )
    {
        params.touches = getXYfromEvent(params.originalEvent);
        params.type = eventName;
        if(isFunction(self["on"+ eventName])) {
            self["on"+ eventName].call(self, params);
        }
    }
    function cancelEvent(event)
    {
        event = event || window.event;
        if(event.preventDefault){
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.returnValue = false;
            event.cancelBubble = true;
        }
    }
    function reset()
    {
        _pos = {};
        _first = false;
        _fingers = 0;
        _distance = 0;
        _angle = 0;
        _gesture = null;
    }
    var gestures = {
        hold : function(event)
        {
            if(options.hold) {
                _gesture = 'hold';
                clearTimeout(_hold_timer);
                _hold_timer = setTimeout(function() {
                    if(_gesture == 'hold') {
                        triggerEvent("hold", {
                            originalEvent : event,
                            position : _pos.start
                        });
                    }
                }, options.hold_timeout);
            }
        },
        swipe : function(event)
        {
            if(!_pos.move) {
                return;
            }
            var _distance_x = _pos.move[0].x - _pos.start[0].x;
            var _distance_y = _pos.move[0].y - _pos.start[0].y;
            _distance = Math.sqrt(_distance_x*_distance_x + _distance_y*_distance_y);
            var now = new Date().getTime();
            var touch_time = now - _touch_start_time;
            if(options.swipe && (options.swipe_time > touch_time) && (_distance > options.swipe_min_distance)) {
                _angle = getAngle(_pos.start[0], _pos.move[0]);
                _direction = self.getDirectionFromAngle(_angle);
                _gesture = 'swipe';
                var position = { x: _pos.move[0].x - _offset.left,
                    y: _pos.move[0].y - _offset.top };
                var event_obj = {
                    originalEvent : event,
                    position : position,
                    direction : _direction,
                    distance : _distance,
                    distanceX : _distance_x,
                    distanceY : _distance_y,
                    angle : _angle
                };
                triggerEvent("swipe", event_obj);
            }
        },
        drag : function(event)
        {
            var _distance_x = _pos.move[0].x - _pos.start[0].x;
            var _distance_y = _pos.move[0].y - _pos.start[0].y;
            _distance = Math.sqrt(_distance_x * _distance_x + _distance_y * _distance_y);
            if(options.drag && (_distance > options.drag_min_distance) || _gesture == 'drag') {
                _angle = getAngle(_pos.start[0], _pos.move[0]);
                _direction = self.getDirectionFromAngle(_angle);
                var is_vertical = (_direction == 'up' || _direction == 'down');
                if(((is_vertical && !options.drag_vertical) || (!is_vertical && !options.drag_horizontal))
                    && (_distance > options.drag_min_distance)) {
                    return;
                }
                _gesture = 'drag';
                var position = { x: _pos.move[0].x - _offset.left,
                    y: _pos.move[0].y - _offset.top };
                var event_obj = {
                    originalEvent : event,
                    position : position,
                    direction : _direction,
                    distance : _distance,
                    distanceX : _distance_x,
                    distanceY : _distance_y,
                    angle : _angle
                };
                if(_first) {
                    triggerEvent("dragstart", event_obj);
                    _first = false;
                }
                triggerEvent("drag", event_obj);
                cancelEvent(event);
            }
        },
        transform : function(event)
        {
            if(options.transform) {
                if(countFingers(event) != 2) {
                    return false;
                }
                var rotation = calculateRotation(_pos.start, _pos.move);
                var scale = calculateScale(_pos.start, _pos.move);
                if(_gesture != 'drag' &&
                    (_gesture == 'transform' || Math.abs(1-scale) > options.scale_treshold || Math.abs(rotation) > options.rotation_treshold)) {
                    _gesture = 'transform';
                    _pos.center = { x: ((_pos.move[0].x + _pos.move[1].x) / 2) - _offset.left,
                        y: ((_pos.move[0].y + _pos.move[1].y) / 2) - _offset.top };
                    var event_obj = {
                        originalEvent : event,
                        position : _pos.center,
                        scale : scale,
                        rotation : rotation
                    };
                    if(_first) {
                        triggerEvent("transformstart", event_obj);
                        _first = false;
                    }
                    triggerEvent("transform", event_obj);
                    cancelEvent(event);
                    return true;
                }
            }
            return false;
        },
        tap : function(event)
        {
            var now = new Date().getTime();
            var touch_time = now - _touch_start_time;
            if(options.hold && !(options.hold && options.hold_timeout > touch_time)) {
                return;
            }
            var is_double_tap = (function(){
                if (_prev_tap_pos &&
                    options.tap_double &&
                    _prev_gesture == 'tap' &&
                    (_touch_start_time - _prev_tap_end_time) < options.tap_max_interval)
                {
                    var x_distance = Math.abs(_prev_tap_pos[0].x - _pos.start[0].x);
                    var y_distance = Math.abs(_prev_tap_pos[0].y - _pos.start[0].y);
                    return (_prev_tap_pos && _pos.start && Math.max(x_distance, y_distance) < options.tap_double_distance);
                }
                return false;
            })();
            if(is_double_tap) {
                _gesture = 'double_tap';
                _prev_tap_end_time = null;
                triggerEvent("doubletap", {
                    originalEvent : event,
                    position : _pos.start
                });
                cancelEvent(event);
            }
            else {
                var x_distance = (_pos.move) ? Math.abs(_pos.move[0].x - _pos.start[0].x) : 0;
                var y_distance = (_pos.move) ? Math.abs(_pos.move[0].y - _pos.start[0].y) : 0;
                _distance = Math.max(x_distance, y_distance);
                if(_distance < options.tap_max_distance) {
                    _gesture = 'tap';
                    _prev_tap_end_time = now;
                    _prev_tap_pos = _pos.start;
                    if(options.tap) {
                        triggerEvent("tap", {
                            originalEvent : event,
                            position : _pos.start
                        });
                        cancelEvent(event);
                    }
                }
            }
        }
    };
    function handleEvents(event)
    {
        switch(event.type)
        {
            case 'mousedown':
            case 'touchstart':
                _pos.start = getXYfromEvent(event);
                _touch_start_time = new Date().getTime();
                _fingers = countFingers(event);
                _first = true;
                _event_start = event;
                var box = element.getBoundingClientRect();
                var clientTop = element.clientTop || document.body.clientTop || 0;
                var clientLeft = element.clientLeft || document.body.clientLeft || 0;
                var scrollTop = window.pageYOffset || element.scrollTop || document.body.scrollTop;
                var scrollLeft = window.pageXOffset || element.scrollLeft || document.body.scrollLeft;
                _offset = {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
                _mousedown = true;
                gestures.hold(event);
                if(options.prevent_default) {
                    cancelEvent(event);
                }
                break;
            case 'mousemove':
            case 'touchmove':
                if(!_mousedown) {
                    return false;
                }
                _event_move = event;
                _pos.move = getXYfromEvent(event);
                if(!gestures.transform(event)) {
                    gestures.drag(event);
                }
                break;
            case 'mouseup':
            case 'mouseout':
            case 'touchcancel':
            case 'touchend':
                if(!_mousedown || (_gesture != 'transform' && event.touches && event.touches.length > 0)) {
                    return false;
                }
                _mousedown = false;
                _event_end = event;
                var dragging = _gesture == 'drag';
                gestures.swipe(event);
                if(dragging) {
                    triggerEvent("dragend", {
                        originalEvent : event,
                        direction : _direction,
                        distance : _distance,
                        angle : _angle
                    });
                }
                else if(_gesture == 'transform') {
                    triggerEvent("transformend", {
                        originalEvent : event,
                        position : _pos.center,
                        scale : calculateScale(_pos.start, _pos.move),
                        rotation : calculateRotation(_pos.start, _pos.move)
                    });
                }
                else {
                    gestures.tap(_event_start);
                }
                _prev_gesture = _gesture;
                triggerEvent("release", {
                    originalEvent : event,
                    gesture : _gesture
                });
                reset();
                break;
        }
    }
    if(_has_touch) {
        addEvent(element, "touchstart touchmove touchend touchcancel", handleEvents);
    }
    else {
        addEvent(element, "mouseup mousedown mousemove", handleEvents);
        addEvent(element, "mouseout", function(event) {
            if(!isInsideHammer(element, event.relatedTarget)) {
                handleEvents(event);
            }
        });
    }
    function isInsideHammer(parent, child) {
        if(!child && window.event && window.event.toElement){
            child = window.event.toElement;
        }
        if(parent === child){
            return true;
        }
        if(child){
            var node = child.parentNode;
            while(node !== null){
                if(node === parent){
                    return true;
                };
                node = node.parentNode;
            }
        }
        return false;
    }
    function mergeObject(obj1, obj2) {
        var output = {};
        if(!obj2) {
            return obj1;
        }
        for (var prop in obj1) {
            if (prop in obj2) {
                output[prop] = obj2[prop];
            } else {
                output[prop] = obj1[prop];
            }
        }
        return output;
    }
    function isFunction( obj ){
        return Object.prototype.toString.call( obj ) == "[object Function]";
    }
    function addEvent(element, types, callback) {
        types = types.split(" ");
        for(var t= 0,len=types.length; t<len; t++) {
            if(element.addEventListener){
                element.addEventListener(types[t], callback, false);
            }
            else if(document.attachEvent){
                element.attachEvent("on"+ types[t], callback);
            }
        }
    }
}
var Sfxr = (function() {
 var exports = {};
 function require() { return exports; };
 !function() {
var FastBase64 = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encLookup: [],
  Init: function() {
    for (var i=0; i<4096; i++) {
      this.encLookup[i] = this.chars[i >> 6] + this.chars[i & 0x3F];
    }
  },
  Encode: function(src) {
    var len = src.length;
    var dst = '';
    var i = 0;
    while (len > 2) {
      n = (src[i] << 16) | (src[i+1]<<8) | src[i+2];
      dst+= this.encLookup[n >> 12] + this.encLookup[n & 0xFFF];
      len-= 3;
      i+= 3;
    }
    if (len > 0) {
      var n1= (src[i] & 0xFC) >> 2;
      var n2= (src[i] & 0x03) << 4;
      if (len > 1) n2 |= (src[++i] & 0xF0) >> 4;
      dst+= this.chars[n1];
      dst+= this.chars[n2];
      if (len == 2) {
        var n3= (src[i++] & 0x0F) << 2;
        n3 |= (src[i] & 0xC0) >> 6;
        dst+= this.chars[n3];
      }
      if (len == 1) dst+= '=';
      dst+= '=';
    }
    return dst;
  }
}
FastBase64.Init();
var RIFFWAVE = function(data) {
  this.data = [];
  this.wav = [];
  this.dataURI = '';
  this.header = {
    chunkId : [0x52,0x49,0x46,0x46],
    chunkSize : 0,
    format : [0x57,0x41,0x56,0x45],
    subChunk1Id : [0x66,0x6d,0x74,0x20],
    subChunk1Size: 16,
    audioFormat : 1,
    numChannels : 1,
    sampleRate : 8000,
    byteRate : 0,
    blockAlign : 0,
    bitsPerSample: 8,
    subChunk2Id : [0x64,0x61,0x74,0x61],
    subChunk2Size: 0
  };
  function u32ToArray(i) { return [i&0xFF, (i>>8)&0xFF, (i>>16)&0xFF, (i>>24)&0xFF]; }
  function u16ToArray(i) { return [i&0xFF, (i>>8)&0xFF]; }
  this.Make = function(data) {
    if (data instanceof Array) this.data = data;
    this.header.byteRate = (this.header.sampleRate * this.header.numChannels * this.header.bitsPerSample) >> 3;
    this.header.blockAlign = (this.header.numChannels * this.header.bitsPerSample) >> 3;
    this.header.subChunk2Size = this.data.length;
    this.header.chunkSize = 36 + this.header.subChunk2Size;
    this.wav = this.header.chunkId.concat(
      u32ToArray(this.header.chunkSize),
      this.header.format,
      this.header.subChunk1Id,
      u32ToArray(this.header.subChunk1Size),
      u16ToArray(this.header.audioFormat),
      u16ToArray(this.header.numChannels),
      u32ToArray(this.header.sampleRate),
      u32ToArray(this.header.byteRate),
      u16ToArray(this.header.blockAlign),
      u16ToArray(this.header.bitsPerSample),
      this.header.subChunk2Id,
      u32ToArray(this.header.subChunk2Size),
      this.data
    );
    this.dataURI = 'data:audio/wav;base64,'+FastBase64.Encode(this.wav);
  };
  if (data instanceof Array) this.Make(data);
};
if (typeof exports != 'undefined')
  exports.RIFFWAVE = RIFFWAVE;
 }();
 !function() {
var SQUARE = 0;
var SAWTOOTH = 1;
var SINE = 2;
var NOISE = 3;
var masterVolume = 1;
var OVERSAMPLING = 8;
var defaultKnobs = {
  shape: SQUARE,
  attack: 0,
  sustain: 0.2,
  punch: 0,
  decay: 0.2,
  frequency: 1000,
  frequencyMin: 0,
  frequencySlide: 0,
  frequencySlideSlide: 0,
  vibratoDepth: 0,
  vibratoRate: 10,
  arpeggioFactor: 1,
  arpeggioDelay: 0.1,
  dutyCycle: 0.5,
  dutyCycleSweep: 0,
  retriggerRate: 0,
  flangerOffset: 0,
  flangerSweep: 0,
  lowPassFrequency: 44100,
  lowPassSweep: 1,
  lowPassResonance: 0.5,
  highPassFrequency: 0,
  highPassSweep: 0,
  gain: -10,
  sampleRate: 44100,
  sampleSize: 8,
};
function Knobs(settings) {
  settings = settings||{};
  for (var i in defaultKnobs) {
    if (settings.hasOwnProperty(i))
      this[i] = settings[i];
    else
      this[i] = defaultKnobs[i];
  }
}
function sqr(x) { return x * x }
function cube(x) { return x * x * x }
function sign(x) { return x < 0 ? -1 : 1 }
function log(x, b) { return Math.log(x) / Math.log(b); }
var pow = Math.pow;
Knobs.prototype.translate = function (ps) {
  this.shape = ps.wave_type;
  this.attack = sqr(ps.p_env_attack) * 100000 / 44100;
  this.sustain = sqr(ps.p_env_sustain) * 100000 / 44100;
  this.punch = ps.p_env_punch;
  this.decay = sqr(ps.p_env_decay) * 100000 / 44100;
  this.frequency = OVERSAMPLING * 441 * (sqr(ps.p_base_freq) + 0.001);
  if (ps.p_freq_limit > 0)
    this.frequencyMin = OVERSAMPLING * 441 * (sqr(ps.p_freq_limit) + 0.001);
  else
    this.frequencyMin = 0;
  this.enableFrequencyCutoff = (ps.p_freq_limit > 0);
  this.frequencySlide = 44100 * log(1 - cube(ps.p_freq_ramp) / 100, 0.5);
  this.frequencySlideSlide = -cube(ps.p_freq_dramp) / 1000000 *
    44100 * pow(2, 44101/44100);
  this.vibratoRate = 44100 * 10 / 64 * sqr(ps.p_vib_speed) / 100;
  this.vibratoDepth = ps.p_vib_strength / 2;
  this.arpeggioFactor = 1 / ((ps.p_arp_mod >= 0) ?
                             1 - sqr(ps.p_arp_mod) * 0.9 :
                             1 + sqr(ps.p_arp_mod) * 10);
  this.arpeggioDelay = ((ps.p_arp_speed === 1) ? 0 :
                Math.floor(sqr(1 - ps.p_arp_speed) * 20000 + 32) / 44100);
  this.dutyCycle = (1 - ps.p_duty) / 2;
  this.dutyCycleSweep = OVERSAMPLING * 44100 * -ps.p_duty_ramp / 20000;
  this.retriggerRate = 44100 / ((ps.p_repeat_speed === 0) ? 0 :
                       Math.floor(sqr(1 - ps.p_repeat_speed) * 20000) + 32);
  this.flangerOffset = sign(ps.p_pha_offset) *
    sqr(ps.p_pha_offset) * 1020 / 44100;
  this.flangerSweep = sign(ps.p_pha_ramp) * sqr(ps.p_pha_ramp);
  this.enableLowPassFilter = (ps.p_lpf_freq != 1);
  function flurp(x) { return x / (1-x) }
  this.lowPassFrequency = ps.p_lpf_freq === 1 ? 44100 :
    Math.round(OVERSAMPLING * 44100 * flurp(cube(ps.p_lpf_freq) / 10));
  this.lowPassSweep = pow(1 + ps.p_lpf_ramp / 10000, 44100);
  this.lowPassResonance = 1 - (5 / (1 + sqr(ps.p_lpf_resonance) * 20)) / 9;
  this.highPassFrequency = Math.round(OVERSAMPLING * 44100 *
                                      flurp(sqr(ps.p_hpf_freq) / 10));
  this.highPassSweep = pow(1 + ps.p_hpf_ramp * 0.0003, 44100);
  this.gain = 10 * log(sqr(Math.exp(ps.sound_vol) - 1), 10);
  this.sampleRate = ps.sample_rate;
  this.sampleSize = ps.sample_size;
  return this;
}
function Params() {
  this.oldParams = true;
  this.wave_type = SQUARE;
  this.p_env_attack = 0;
  this.p_env_sustain = 0.3;
  this.p_env_punch = 0;
  this.p_env_decay = 0.4;
  this.p_base_freq = 0.3;
  this.p_freq_limit = 0;
  this.p_freq_ramp = 0;
  this.p_freq_dramp = 0;
  this.p_vib_strength = 0;
  this.p_vib_speed = 0;
  this.p_arp_mod = 0;
  this.p_arp_speed = 0;
  this.p_duty = 0;
  this.p_duty_ramp = 0;
  this.p_repeat_speed = 0;
  this.p_pha_offset = 0;
  this.p_pha_ramp = 0;
  this.p_lpf_freq = 1;
  this.p_lpf_ramp = 0;
  this.p_lpf_resonance = 0;
  this.p_hpf_freq = 0;
  this.p_hpf_ramp = 0;
  this.sound_vol = 0.5;
  this.sample_rate = 44100;
  this.sample_size = 8;
}
function frnd(range) {
  return Math.random() * range;
}
function rndr(from, to) {
  return Math.random() * (to - from) + from;
}
function rnd(max) {
  return Math.floor(Math.random() * (max + 1));
}
Params.prototype.pickupCoin = function () {
  this.p_base_freq = 0.4 + frnd(0.5);
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.1);
  this.p_env_decay = 0.1 + frnd(0.4);
  this.p_env_punch = 0.3 + frnd(0.3);
  if (rnd(1)) {
    this.p_arp_speed = 0.5 + frnd(0.2);
    this.p_arp_mod = 0.2 + frnd(0.4);
  }
  return this;
}
Knobs.prototype.pickupCoin = function () {
  this.frequency = rndr(568, 2861);
  this.attack = 0;
  this.sustain = frnd(0.227);
  this.decay = rndr(0.227, 0.567);
  this.punch = rndr(0.3, 0.6);
  if (rnd(1)) {
    this.arpeggioFactor = rndr(1.037, 1.479);
    this.arpeggioDelay = rndr(0.042, 0.114);
  }
  return this;
}
Params.prototype.laserShoot = function () {
  this.wave_type = rnd(2);
  if(this.wave_type === SINE && rnd(1))
    this.wave_type = rnd(1);
  if (rnd(2) === 0) {
    this.p_base_freq = 0.3 + frnd(0.6);
    this.p_freq_limit = frnd(0.1);
    this.p_freq_ramp = -0.35 - frnd(0.3);
  } else {
    this.p_base_freq = 0.5 + frnd(0.5);
    this.p_freq_limit = this.p_base_freq - 0.2 - frnd(0.6);
    if (this.p_freq_limit < 0.2) this.p_freq_limit = 0.2;
    this.p_freq_ramp = -0.15 - frnd(0.2);
  }
  if (this.wave_type === SAWTOOTH)
    this.p_duty = 1;
  if (rnd(1)) {
    this.p_duty = frnd(0.5);
    this.p_duty_ramp = frnd(0.2);
  } else {
    this.p_duty = 0.4 + frnd(0.5);
    this.p_duty_ramp = -frnd(0.7);
  }
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.2);
  this.p_env_decay = frnd(0.4);
  if (rnd(1))
    this.p_env_punch = frnd(0.3);
  if (rnd(2) === 0) {
    this.p_pha_offset = frnd(0.2);
    this.p_pha_ramp = -frnd(0.2);
  }
    this.p_hpf_freq = frnd(0.3);
  return this;
}
Knobs.prototype.laserShoot = function () {
  this.shape = rnd(2);
  if(this.shape === SINE && rnd(1))
    this.shape = rnd(1);
  if (rnd(2) === 0) {
    this.frequency = rndr(321, 2861);
    this.frequencyMin = frnd(38.8);
    this.frequencySlide = rndr(-27.3, -174.5);
  } else {
    this.frequency = rndr(321, 3532);
    this.frequencyMin = rndr(144, 2/3 * this.frequency);
    this.frequencySlide = rndr(-2.15, -27.27);
  }
  if (this.shape === SAWTOOTH)
    this.dutyCycle = 0;
  if (rnd(1)) {
    this.dutyCycle = rndr(1/4, 1/2);
    this.dutyCycleSweep = rndr(0, -3.528);
  } else {
    this.dutyCycle = rndr(0.05, 0.3);
    this.dutyCycleSweep = frnd(12.35);
  }
  this.attack = 0;
  this.sustain = rndr(0.02, 0.2);
  this.decay = frnd(0.36);
  if (rnd(1))
    this.punch = frnd(0.3);
  if (rnd(2) === 0) {
    this.flangerOffset = frnd(0.001);
    this.flangerSweep = -frnd(0.04);
  }
  if (rnd(1))
    this.highPassFrequency = frnd(3204);
  return this;
}
Params.prototype.explosion = function () {
  this.wave_type = NOISE;
  if (rnd(1)) {
    this.p_base_freq = sqr(0.1 + frnd(0.4));
    this.p_freq_ramp = -0.1 + frnd(0.4);
  } else {
    this.p_base_freq = sqr(0.2 + frnd(0.7));
    this.p_freq_ramp = -0.2 - frnd(0.2);
  }
  if (rnd(4) === 0)
    this.p_freq_ramp = 0;
  if (rnd(2) === 0)
    this.p_repeat_speed = 0.3 + frnd(0.5);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.3);
  this.p_env_decay = frnd(0.5);
  if (rnd(1)) {
    this.p_pha_offset = -0.3 + frnd(0.9);
    this.p_pha_ramp = -frnd(0.3);
  }
  this.p_env_punch = 0.2 + frnd(0.6);
  if (rnd(1)) {
    this.p_vib_strength = frnd(0.7);
    this.p_vib_speed = frnd(0.6);
  }
  if (rnd(2) === 0) {
    this.p_arp_speed = 0.6 + frnd(0.3);
    this.p_arp_mod = 0.8 - frnd(1.6);
  }
  return this;
}
Knobs.prototype.explosion = function () {
  this.shape = NOISE;
  if (rnd(1)) {
    this.frequency = rndr(4, 224);
    this.frequencySlide = rndr(-0.623, 17.2);
  } else {
    this.frequency = rndr(9, 2318);
    this.frequencySlide = rndr(-5.1, -40.7);
  }
  if (rnd(4) === 0)
    this.frequencySlide = 0;
  if (rnd(2) === 0)
    this.retriggerRate = rndr(4.5, 53);
  this.attack = 0;
  this.sustain = rndr(0.0227, 0.363);
  this.decay = frnd(0.567);
  if (rnd(1)) {
    this.flangerOffset = rndr(-0.0021, 0.0083);
    this.flangerSweep = -frnd(0.09);
  }
  this.punch = 0.2 + frnd(0.6);
  if (rnd(1)) {
    this.vibratoDepth = frnd(0.35);
    this.vibratoRate = frnd(24.8);
  }
  if (rnd(2) === 0) {
    this.arpeggioFactor = rndr(0.135, 2.358);
    this.arpeggioDelay = rndr(0.00526, 0.0733);
  }
  return this;
}
Params.prototype.powerUp = function () {
  if (rnd(1)) {
    this.wave_type = SAWTOOTH;
    this.p_duty = 1;
  } else {
    this.p_duty = frnd(0.6);
  }
  this.p_base_freq = 0.2 + frnd(0.3);
  if (rnd(1)) {
    this.p_freq_ramp = 0.1 + frnd(0.4);
    this.p_repeat_speed = 0.4 + frnd(0.4);
  } else {
    this.p_freq_ramp = 0.05 + frnd(0.2);
    if (rnd(1)) {
      this.p_vib_strength = frnd(0.7);
      this.p_vib_speed = frnd(0.6);
    }
  }
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.4);
  this.p_env_decay = 0.1 + frnd(0.4);
  return this;
}
Knobs.prototype.powerUp = function () {
  if (rnd(1)) {
    this.shape = SAWTOOTH;
    this.dutyCycle = 0;
  } else {
    this.dutyCycle = rndr(0.2, 0.5);
  }
  this.frequency = rndr(145, 886);
  if (rnd(1)) {
    this.frequencySlide = rndr(0.636, 79.6);
    this.retriggerRate = rndr(6, 53);
  } else {
    this.frequencySlide = rndr(0.0795, 9.94);
    if (rnd(1)) {
      this.vibratoDepth = frnd(0.35);
      this.vibratoRate = frnd(24.8);
    }
  }
  this.attack = 0;
  this.sustain = frnd(0.363);
  this.decay = rndr(0.023, 0.57);
  return this;
}
Params.prototype.hitHurt = function () {
  this.wave_type = rnd(2);
  if (this.wave_type === SINE)
    this.wave_type = NOISE;
  if (this.wave_type === SQUARE)
    this.p_duty = frnd(0.6);
  if (this.wave_type === SAWTOOTH)
    this.p_duty = 1;
  this.p_base_freq = 0.2 + frnd(0.6);
  this.p_freq_ramp = -0.3 - frnd(0.4);
  this.p_env_attack = 0;
  this.p_env_sustain = frnd(0.1);
  this.p_env_decay = 0.1 + frnd(0.2);
  if (rnd(1))
    this.p_hpf_freq = frnd(0.3);
  return this;
}
Knobs.prototype.hitHurt = function () {
  this.shape = rnd(2);
  if (this.shape === SINE)
    this.shape = NOISE;
  if (this.shape === SQUARE)
    this.dutyCycle = rndr(0.2, 0.5);
  if (this.shape === SAWTOOTH)
    this.dutyCycle = 0;
  this.frequency = rndr(145, 2261);
  this.frequencySlide = rndr(-17.2, -217.9);
  this.attack = 0;
  this.sustain = frnd(0.023);
  this.decay = rndr(0.023, 0.2);
  if (rnd(1))
    this.highPassFrequency = frnd(3204);
  return this;
}
Params.prototype.jump = function () {
  this.wave_type = SQUARE;
  this.p_duty = frnd(0.6);
  this.p_base_freq = 0.3 + frnd(0.3);
  this.p_freq_ramp = 0.1 + frnd(0.2);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.3);
  this.p_env_decay = 0.1 + frnd(0.2);
  if (rnd(1))
    this.p_hpf_freq = frnd(0.3);
  if (rnd(1))
    this.p_lpf_freq = 1 - frnd(0.6);
  return this;
}
Knobs.prototype.jump = function () {
  this.shape = SQUARE;
  this.dutyCycle = rndr(0.2, 0.5);
  this.frequency = rndr(321, 1274);
  this.frequencySlide = rndr(0.64, 17.2);
  this.attack = 0;
  this.sustain = rndr(0.023, 0.36);
  this.decay = rndr(0.023, 0.2);
  if (rnd(1))
    this.highPassFrequency = frnd(3204);
  if (rnd(1))
    this.lowPassFrequency = rndr(2272, 44100);
  return this;
}
Params.prototype.blipSelect = function () {
  this.wave_type = rnd(1);
  if (this.wave_type === SQUARE)
    this.p_duty = frnd(0.6);
  else
    this.p_duty = 1;
  this.p_base_freq = 0.2 + frnd(0.4);
  this.p_env_attack = 0;
  this.p_env_sustain = 0.1 + frnd(0.1);
  this.p_env_decay = frnd(0.2);
  this.p_hpf_freq = 0.1;
  return this;
}
Knobs.prototype.blipSelect = function () {
  this.shape = rnd(1);
  if (this.shape === SQUARE)
    this.dutyCycle = rndr(0.2, 0.5);
  else
    this.dutyCycle = 0;
  this.frequency = rndr(145, 1274);
  this.attack = 0;
  this.sustain = rndr(0.023, 0.09);
  this.decay = frnd(0.09);
  this.highPassFrequency = 353;
  return this;
}
Params.prototype.mutate = function () {
  if (rnd(1)) this.p_base_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_freq_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_freq_dramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_duty += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_duty_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_strength += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_vib_delay += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_attack += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_sustain += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_decay += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_env_punch += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_resonance += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_lpf_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_hpf_freq += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_hpf_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_pha_offset += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_pha_ramp += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_repeat_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_arp_speed += frnd(0.1) - 0.05;
  if (rnd(1)) this.p_arp_mod += frnd(0.1) - 0.05;
}
Params.prototype.random = function () {
  if (rnd(1))
    this.p_base_freq = cube(frnd(2) - 1) + 0.5;
  else
    this.p_base_freq = sqr(frnd(1));
  this.p_freq_limit = 0;
  this.p_freq_ramp = Math.pow(frnd(2) - 1, 5);
  if (this.p_base_freq > 0.7 && this.p_freq_ramp > 0.2)
    this.p_freq_ramp = -this.p_freq_ramp;
  if (this.p_base_freq < 0.2 && this.p_freq_ramp < -0.05)
    this.p_freq_ramp = -this.p_freq_ramp;
  this.p_freq_dramp = Math.pow(frnd(2) - 1, 3);
  this.p_duty = frnd(2) - 1;
  this.p_duty_ramp = Math.pow(frnd(2) - 1, 3);
  this.p_vib_strength = Math.pow(frnd(2) - 1, 3);
  this.p_vib_speed = rndr(-1, 1);
  this.p_env_attack = cube(rndr(-1, 1));
  this.p_env_sustain = sqr(rndr(-1, 1));
  this.p_env_decay = rndr(-1, 1);
  this.p_env_punch = Math.pow(frnd(0.8), 2);
  if (this.p_env_attack + this.p_env_sustain + this.p_env_decay < 0.2) {
    this.p_env_sustain += 0.2 + frnd(0.3);
    this.p_env_decay += 0.2 + frnd(0.3);
  }
  this.p_lpf_resonance = rndr(-1, 1);
  this.p_lpf_freq = 1 - Math.pow(frnd(1), 3);
  this.p_lpf_ramp = Math.pow(frnd(2) - 1, 3);
  if (this.p_lpf_freq < 0.1 && this.p_lpf_ramp < -0.05)
    this.p_lpf_ramp = -this.p_lpf_ramp;
  this.p_hpf_freq = Math.pow(frnd(1), 5);
  this.p_hpf_ramp = Math.pow(frnd(2) - 1, 5);
  this.p_pha_offset = Math.pow(frnd(2) - 1, 3);
  this.p_pha_ramp = Math.pow(frnd(2) - 1, 3);
  this.p_repeat_speed = frnd(2) - 1;
  this.p_arp_speed = frnd(2) - 1;
  this.p_arp_mod = frnd(2) - 1;
  return this;
}
Knobs.prototype.random = function () {
  if (rnd(1))
    this.frequency = rndr(885.5, 7941.5);
  else
    this.frequency = rndr(3.5, 3532);
  this.frequencySlide = rndr(-633, 639);
  if (this.frequency > 1732 && this.frequencySlide > 5)
    this.frequencySlide = -this.frequencySlide;
  if (this.frequency < 145 && this.frequencySlide < -0.088)
    this.frequencySlide = -this.frequencySlide;
  this.frequencySlideSlide = rndr(-0.88, 0.88);
  this.dutyCycle = frnd(1);
  this.dudyCycleSweep = rndr(-17.64, 17.64);
  this.vibratoDepth = rndr(-0.5, 0.5);
  this.vibratoRate = rndr(0, 69);
  this.attack = cube(frnd(1)) * 2.26;
  this.sustain = sqr(frnd(1)) * 2.26 + 0.09;
  this.decay = frnd(1) * 2.26;
  this.punch = sqr(frnd(1)) * 0.64;
  if (this.attack + this.sustain + this.decay < 0.45) {
    this.sustain += rndr(0.5, 1.25);
    this.decay += rndr(0.5, 1.25);
  }
  this.lowPassResonance = rndr(0.444, 0.97);
  this.lowPassFrequency = frnd(39200);
  this.lowPassSweep = rndr(0.012, 82);
  if (this.lowPassFrequency < 35 && this.lowPassSweep < 0.802)
    this.lowPassSweep = 1 - this.lowPassSweep;
  this.highPassFrequency = 39200 * pow(frnd(1), 5);
  this.highPassSweep = 555718 * pow(rndr(-1, 1), 5);
  this.flangerOffset = 0.023 * cube(frnd(2) - 1);
  this.flangerSweep = cube(frnd(2) - 1);
  this.retriggerRate = frnd(1378);
  this.arpeggioDelay = frnd(1.81);
  this.arpeggioFactor = rndr(0.09, 10);
  return this;
}
Params.prototype.tone = function () {
  this.wave_type = SINE;
  this.p_base_freq = 0.35173364;
  this.p_env_attack = 0;
  this.p_env_sustain = 0.6641;
  this.p_env_decay = 0;
  this.p_env_punch = 0;
  return this;
}
function SoundEffect(ps) {
  if (ps.oldParams)
    this.initFromUI(ps);
  else
    this.init(ps);
}
SoundEffect.prototype.initFromUI = function (ps) {
  this.initForRepeat = function() {
    this.elapsedSinceRepeat = 0;
    this.period = 100 / (ps.p_base_freq * ps.p_base_freq + 0.001);
    this.periodMax = 100 / (ps.p_freq_limit * ps.p_freq_limit + 0.001);
    this.enableFrequencyCutoff = (ps.p_freq_limit > 0);
    this.periodMult = 1 - Math.pow(ps.p_freq_ramp, 3) * 0.01;
    this.periodMultSlide = -Math.pow(ps.p_freq_dramp, 3) * 0.000001;
    this.dutyCycle = 0.5 - ps.p_duty * 0.5;
    this.dutyCycleSlide = -ps.p_duty_ramp * 0.00005;
    if (ps.p_arp_mod >= 0)
      this.arpeggioMultiplier = 1 - Math.pow(ps.p_arp_mod, 2) * .9;
    else
      this.arpeggioMultiplier = 1 + Math.pow(ps.p_arp_mod, 2) * 10;
    this.arpeggioTime = Math.floor(Math.pow(1 - ps.p_arp_speed, 2) * 20000 + 32);
    if (ps.p_arp_speed === 1)
      this.arpeggioTime = 0;
  }
  this.initForRepeat();
  this.waveShape = parseInt(ps.wave_type);
  this.fltw = Math.pow(ps.p_lpf_freq, 3) * 0.1;
  this.enableLowPassFilter = (ps.p_lpf_freq != 1);
  this.fltw_d = 1 + ps.p_lpf_ramp * 0.0001;
  this.fltdmp = 5 / (1 + Math.pow(ps.p_lpf_resonance, 2) * 20) *
    (0.01 + this.fltw);
  if (this.fltdmp > 0.8) this.fltdmp=0.8;
  this.flthp = Math.pow(ps.p_hpf_freq, 2) * 0.1;
  this.flthp_d = 1 + ps.p_hpf_ramp * 0.0003;
  this.vibratoSpeed = Math.pow(ps.p_vib_speed, 2) * 0.01;
  this.vibratoAmplitude = ps.p_vib_strength * 0.5;
  this.envelopeLength = [
    Math.floor(ps.p_env_attack * ps.p_env_attack * 100000),
    Math.floor(ps.p_env_sustain * ps.p_env_sustain * 100000),
    Math.floor(ps.p_env_decay * ps.p_env_decay * 100000)
  ];
  this.envelopePunch = ps.p_env_punch;
  this.flangerOffset = Math.pow(ps.p_pha_offset, 2) * 1020;
  if (ps.p_pha_offset < 0) this.flangerOffset = -this.flangerOffset;
  this.flangerOffsetSlide = Math.pow(ps.p_pha_ramp, 2) * 1;
  if (ps.p_pha_ramp < 0) this.flangerOffsetSlide = -this.flangerOffsetSlide;
  this.repeatTime = Math.floor(Math.pow(1 - ps.p_repeat_speed, 2) * 20000
                               + 32);
  if (ps.p_repeat_speed === 0)
    this.repeatTime = 0;
  this.gain = Math.exp(ps.sound_vol) - 1;
  this.sampleRate = ps.sample_rate;
  this.bitsPerChannel = ps.sample_size;
  for (var i in this) if (typeof this[i] !== 'function') console.log(i, this[i]);
}
SoundEffect.prototype.init = function (ps) {
  this.initForRepeat = function() {
    this.elapsedSinceRepeat = 0;
    this.period = OVERSAMPLING * 44100 / ps.frequency;
    this.periodMax = OVERSAMPLING * 44100 / ps.frequencyMin;
    this.enableFrequencyCutoff = (ps.frequencyMin > 0);
    this.periodMult = Math.pow(.5, ps.frequencySlide / 44100);
    this.periodMultSlide = ps.frequencySlideSlide * Math.pow(2, -44101/44100)
      / 44100;
    this.dutyCycle = ps.dutyCycle;
    this.dutyCycleSlide = ps.dutyCycleSweep / (OVERSAMPLING * 44100);
    this.arpeggioMultiplier = 1 / ps.arpeggioFactor;
    this.arpeggioTime = ps.arpeggioDelay * 44100;
  }
  this.initForRepeat();
  this.waveShape = ps.shape;
  this.fltw = ps.lowPassFrequency / (OVERSAMPLING * 44100 + ps.lowPassFrequency);
  this.enableLowPassFilter = ps.lowPassFrequency < 44100;
  this.fltw_d = Math.pow(ps.lowPassSweep, 1/44100);
  this.fltdmp = (1 - ps.lowPassResonance) * 9 * (.01 + this.fltw);
  this.flthp = ps.highPassFrequency / (OVERSAMPLING * 44100 + ps.highPassFrequency);
  this.flthp_d = Math.pow(ps.highPassSweep, 1/44100);
  this.vibratoSpeed = ps.vibratoRate * 64 / 44100 / 10;
  this.vibratoAmplitude = ps.vibratoDepth;
  this.envelopeLength = [
    Math.floor(ps.attack * 44100),
    Math.floor(ps.sustain * 44100),
    Math.floor(ps.decay * 44100)
  ];
  this.envelopePunch = ps.punch;
  this.flangerOffset = ps.flangerOffset * 44100;
  this.flangerOffsetSlide = ps.flangerSweep;
  this.repeatTime = ps.retriggerRate ? 1 / (44100 * ps.retriggerRate) : 0;
  this.gain = Math.sqrt(Math.pow(10, ps.gain/10));
  this.sampleRate = ps.sampleRate;
  this.bitsPerChannel = ps.sampleSize;
}
SoundEffect.prototype.generate = function () {
  var fltp = 0;
  var fltdp = 0;
  var fltphp = 0;
  var noise_buffer = Array(32);
  for (var i = 0; i < 32; ++i)
    noise_buffer[i] = Math.random() * 2 - 1;
  var envelopeStage = 0;
  var envelopeElapsed = 0;
  var vibratoPhase = 0;
  var phase = 0;
  var ipp = 0;
  var flanger_buffer = Array(1024);
  for (var i = 0; i < 1024; ++i)
    flanger_buffer[i] = 0;
  var num_clipped = 0;
  var buffer = [];
  var sample_sum = 0;
  var num_summed = 0;
  var summands = Math.floor(44100 / this.sampleRate);
  for(var t = 0; ; ++t) {
    if (this.repeatTime != 0 && ++this.elapsedSinceRepeat >= this.repeatTime)
      this.initForRepeat();
    if(this.arpeggioTime != 0 && t >= this.arpeggioTime) {
      this.arpeggioTime = 0;
      this.period *= this.arpeggioMultiplier;
    }
    this.periodMult += this.periodMultSlide;
    this.period *= this.periodMult;
    if(this.period > this.periodMax) {
      this.period = this.periodMax;
      if (this.enableFrequencyCutoff)
        break;
    }
    var rfperiod = this.period;
    if (this.vibratoAmplitude > 0) {
      vibratoPhase += this.vibratoSpeed;
      rfperiod = this.period * (1 + Math.sin(vibratoPhase) * this.vibratoAmplitude);
    }
    var iperiod = Math.floor(rfperiod);
    if (iperiod < OVERSAMPLING) iperiod = OVERSAMPLING;
    this.dutyCycle += this.dutyCycleSlide;
    if (this.dutyCycle < 0) this.dutyCycle = 0;
    if (this.dutyCycle > 0.5) this.dutyCycle = 0.5;
    if (++envelopeElapsed > this.envelopeLength[envelopeStage]) {
      envelopeElapsed = 0;
      if (++envelopeStage > 2)
        break;
    }
    var env_vol;
    var envf = envelopeElapsed / this.envelopeLength[envelopeStage];
    if (envelopeStage === 0) {
      env_vol = envf;
    } else if (envelopeStage === 1) {
      env_vol = 1 + (1 - envf) * 2 * this.envelopePunch;
    } else {
      env_vol = 1 - envf;
    }
    this.flangerOffset += this.flangerOffsetSlide;
    var iphase = Math.abs(Math.floor(this.flangerOffset));
    if (iphase > 1023) iphase = 1023;
    if (this.flthp_d != 0) {
      this.flthp *= this.flthp_d;
      if (this.flthp < 0.00001)
        this.flthp = 0.00001;
      if (this.flthp > 0.1)
        this.flthp = 0.1;
    }
    var sample = 0;
    for (var si = 0; si < OVERSAMPLING; ++si) {
      var sub_sample = 0;
      phase++;
      if (phase >= iperiod) {
        phase %= iperiod;
        if (this.waveShape === NOISE)
          for(var i = 0; i < 32; ++i)
            noise_buffer[i] = Math.random() * 2 - 1;
      }
      var fp = phase / iperiod;
      if (this.waveShape === SQUARE) {
        if (fp < this.dutyCycle)
          sub_sample=0.5;
        else
          sub_sample=-0.5;
      } else if (this.waveShape === SAWTOOTH) {
        if (fp < this.dutyCycle)
          sub_sample = -1 + 2 * fp/this.dutyCycle;
        else
          sub_sample = 1 - 2 * (fp-this.dutyCycle)/(1-this.dutyCycle);
      } else if (this.waveShape === SINE) {
        sub_sample = Math.sin(fp * 2 * Math.PI);
      } else if (this.waveShape === NOISE) {
        sub_sample = noise_buffer[Math.floor(phase * 32 / iperiod)];
      } else {
        throw "ERROR: Bad wave type: " + this.waveShape;
      }
      var pp = fltp;
      this.fltw *= this.fltw_d;
      if (this.fltw < 0) this.fltw = 0;
      if (this.fltw > 0.1) this.fltw = 0.1;
      if (this.enableLowPassFilter) {
        fltdp += (sub_sample - fltp) * this.fltw;
        fltdp -= fltdp * this.fltdmp;
      } else {
        fltp = sub_sample;
        fltdp = 0;
      }
      fltp += fltdp;
      fltphp += fltp - pp;
      fltphp -= fltphp * this.flthp;
      sub_sample = fltphp;
      flanger_buffer[ipp & 1023] = sub_sample;
      sub_sample += flanger_buffer[(ipp - iphase + 1024) & 1023];
      ipp = (ipp + 1) & 1023;
      sample += sub_sample * env_vol;
    }
    sample_sum += sample;
    if (++num_summed >= summands) {
      num_summed = 0;
      sample = sample_sum / summands;
      sample_sum = 0;
    } else {
      continue;
    }
    sample = sample / OVERSAMPLING * masterVolume;
    sample *= this.gain;
    if (this.bitsPerChannel === 8) {
      sample = Math.floor((sample + 1) * 128);
      if (sample > 255) {
        sample = 255;
        ++num_clipped;
      } else if (sample < 0) {
        sample = 0;
        ++num_clipped;
      }
      buffer.push(sample);
    } else {
      sample = Math.floor(sample * (1<<15));
      if (sample >= (1<<15)) {
        sample = (1 << 15)-1;
        ++num_clipped;
      } else if (sample < -(1<<15)) {
        sample = -(1 << 15);
        ++num_clipped;
      }
      buffer.push(sample & 0xFF);
      buffer.push((sample >> 8) & 0xFF);
    }
  }
  var wave = new RIFFWAVE();
  wave.header.sampleRate = this.sampleRate;
  wave.header.bitsPerSample = this.bitsPerChannel;
  wave.Make(buffer);
  wave.clipping = num_clipped;
  return wave;
}
Knobs.prototype.tone = function () {
  this.shape = SINE;
  this.frequency = 440;
  this.attack = 0;
  this.sustain = 1;
  this.decay = 0;
  return this;
}
var genners = 'pickupCoin,laserShoot,explosion,powerUp,hitHurt,jump,blipSelect,random,tone'.split(',');
for (var i = 0; i < genners.length; ++i) {
  (function (g) {
    if (!Knobs.prototype[g])
      Knobs.prototype[g] = function () {
        return this.translate(new Params()[g]());
      }
  })(genners[i]);
}
if (typeof exports !== 'undefined') {
  var RIFFWAVE = require("./riffwave").RIFFWAVE;
  exports.Params = Params;
  exports.Knobs = Knobs;
  exports.SoundEffect = SoundEffect;
  exports.SQUARE = SQUARE;
  exports.SAWTOOTH = SAWTOOTH;
  exports.SINE = SINE;
  exports.NOISE = NOISE;
}
 }();
 return exports;
}());
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
 function __error(message, file, line) {
  throw new Error(message + "(" + file + ":" + line + ")");
 }
function Random(x) {
 "use strict";
 do { if(!(x === (x|0))) { __error("assertion failed: " + "x === (x|0)" + " = " + (x === (x|0)), "src/random.js", 9); } } while(false);
 var MAX = 0xFFFF;
 var Q = new Uint32Array(4096);
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
var Map = {
 "OUT_OF_BOUNDS" : -1,
 "AIR" : 0,
 "CUBE" : 1,
 "START" : 2,
 "GOAL" : 3
};
Map.create = function (seed) {
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
 var field;
 var dimension = 0;
 var startingPosition = null;
 var path = [];
 function clearField() {
  field = [];
  for(var x = dimension; x--;) {
   field[x] = [];
   for(var y = dimension; y--;) {
    field[x][y] = [];
    for(var z = dimension; z--;) {
     field[x][y][z] = Map.AIR;
    }
   }
  }
 }
 function set(x, y, z, type) {
  do { if(!(x instanceof Number) && !("Number".toLowerCase() === typeof x)) { __error("Objct " + "x" + " is not from type " + "Number", "src/map.js", 53); } } while(false);
  do { if(!(y instanceof Number) && !("Number".toLowerCase() === typeof y)) { __error("Objct " + "y" + " is not from type " + "Number", "src/map.js", 54); } } while(false);
  do { if(!(z instanceof Number) && !("Number".toLowerCase() === typeof z)) { __error("Objct " + "z" + " is not from type " + "Number", "src/map.js", 55); } } while(false);
  do { if(!(type instanceof Number) && !("Number".toLowerCase() === typeof type)) { __error("Objct " + "type" + " is not from type " + "Number", "src/map.js", 56); } } while(false);
  do { if(!(x === (x|0))) { __error("assertion failed: " + "x === (x|0)" + " = " + (x === (x|0)), "src/map.js", 58); } } while(false);
  do { if(!(y === (y|0))) { __error("assertion failed: " + "y === (y|0)" + " = " + (y === (y|0)), "src/map.js", 59); } } while(false);
  do { if(!(z === (z|0))) { __error("assertion failed: " + "z === (z|0)" + " = " + (z === (z|0)), "src/map.js", 60); } } while(false);
  do { if(!(type === (type|0))) { __error("assertion failed: " + "type === (type|0)" + " = " + (type === (type|0)), "src/map.js", 61); } } while(false);
  field[x][y][z] = type;
 }
 function get(x,y,z) {
  if(x<0 || y<0 || z<0 || x>= dimension || y>=dimension || z>=dimension) {
   return Map.OUT_OF_BOUNDS;
  }
  return field[x][y][z];
 }
 function getOppositeDirection(n) {
  if(n === -1)
   return -1;
  else
   return [1,0,3,2,5,4][n];
 }
 function getCoords(position, dir, steps) {
  var pos = [position.x, position.y, position.z];
  var vec = directions[dir];
  for(var i = 0; i < steps; i++) {
   pos[0] += vec[0];
   pos[1] += vec[1];
   pos[2] += vec[2];
  }
  return { x : pos[0], y : pos[1], z : pos[2] };
 }
 function nothingInBetween(position, dir, steps) {
  for(var i = 1; i < steps; i++) {
   var pos = getCoords(position, dir, i);
   var obj = get(pos.x, pos.y, pos.z);
   if(obj !== Map.AIR) return false;
  }
  return true;
 }
 function fillRec(rand, position, iterationsLeft, attempt, directionICameFrom) {
  do { if(typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/map.js", 104); } } while(false);
  do { if(typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/map.js", 105); } } while(false);
  do { if(typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/map.js", 106); } } while(false);
  var type = iterationsLeft === 1 ? Map.GOAL : Map.CUBE;
  var dir = rand.next() % 6;
  var steps = 3 + rand.next() % (dimension - 3);
  if(iterationsLeft === 0) return true;
  if(attempt >= MAX_ATTEMPTS) return false;
  if(dir === directionICameFrom || dir === getOppositeDirection(directionICameFrom)) {
   return fillRec(rand, position, iterationsLeft, attempt, directionICameFrom);
  }
  if(!nothingInBetween(position, dir, steps)) {
   return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom);
  }
  var newObjectCoords = getCoords(position, dir, steps);
  var obj = get(newObjectCoords.x, newObjectCoords.y, newObjectCoords.z);
  if(obj === Map.OUT_OF_BOUNDS) {
   return fillRec(rand, position, iterationsLeft, attempt+1, directionICameFrom);
  }
  set(newObjectCoords.x, newObjectCoords.y, newObjectCoords.z, type);
  var newStartingPoint = getCoords(position, dir, steps-1);
  path.push(newStartingPoint);
  return fillRec(rand, newStartingPoint, iterationsLeft-1, 0, getOppositeDirection(dir));
 }
 function fill(seed) {
  var rand;
  var iterations = 0;
  do {
   rand = new Random(seed++);
   dimension = 16;
   startingPosition = { x : (dimension/2) | 0, y : (dimension/2) | 0, z : (dimension/2) | 0 };
   clearField();
   set(startingPosition.x, startingPosition.y, startingPosition.z, Map.START);
   iterations = 11 + (rand.next() % 8);
  } while(!fillRec(rand, startingPosition, iterations, 0, -1));
 }
 fill(seed);
 return {
  "startingPosition" : startingPosition,
  "getObject" : get,
  "path" : path
 };
}
var Sphere = (function() {
 var tmpvector = vec3create();
 function Statemachine(sphere, map) {
  "use strict";
  var speed = 8.0;
  var state = 0;
  var direction = vec3create();
  var startpos = vec3create();
  var movetime = 0;
  this.tick = function(time) {
   switch(state) {
    case 0:
    break;
    case 1:
    vec3add(sphere.position, vec3scale(direction, time.delta * speed, tmpvector));
    movetime += time.delta * speed;
    if(movetime >= 1) {
     vec3set(vec3add(startpos, direction, tmpvector), sphere.position);
     state = 0;
     movetime = 0.0;
     this.tap(time, direction);
    }
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 46 + ")", "unknow state.", state );
    break;
   }
  };
  this.tap = function(time, dir) {
   do { if(!(time.delta instanceof Number) && !("Number".toLowerCase() === typeof time.delta)) { __error("Objct " + "time.delta" + " is not from type " + "Number", "src/sphere.js", 52); } } while(false);
   do { if(!(dir instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Float32Array", "src/sphere.js", 53); } } while(false);
   do { if(!(Math.abs((vec3length(dir) - 1.0)) < 0.0001)) { __error("assertion failed: " + "Math.abs((vec3length(dir) - 1.0)) < 0.0001" + " = " + (Math.abs((vec3length(dir) - 1.0)) < 0.0001), "src/sphere.js", 54); } } while(false);
   switch(state) {
    case 1:
    break;
    case 0:
    var destx = Math.round(sphere.position[0] + dir[0]);
    var desty = Math.round(sphere.position[1] + dir[1]);
    var destz = Math.round(sphere.position[2] + dir[2]);
    var obj = map.getObject(destx, desty, destz);
    if(obj === Map.AIR) {
     vec3set(dir, direction);
     vec3set(sphere.position, startpos);
     movetime = 0.0;
     state = 1;
     break;
    }
    if(obj === Map.OUT_OF_BOUNDS) {
     console.log("DEBUG (" + "src/sphere.js" + ":" + 77 + ")", "dead" );
    }
    if(obj === Map.GOAL) {
     console.log("DEBUG (" + "src/sphere.js" + ":" + 80 + ")", "win" );
    }
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 85 + ")", "unknow state.", state );
    break;
   }
  };
 }
 return function(position, map) {
  do { if(typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/sphere.js", 92); } } while(false);
  do { if(typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/sphere.js", 93); } } while(false);
  do { if(typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/sphere.js", 94); } } while(false);
  do { if(!(this !== window)) { __error("assertion failed: " + "this !== window" + " = " + (this !== window), "src/sphere.js", 95); } } while(false);
  this.position = vec3create([position.x, position.y, position.z]);
  var state = new Statemachine(this, map);
  this.tap = function(info, dir) {
   state.tap(info, dir);
  };
  this.tick = function(info) {
   state.tick(info, map);
  };
 };
}());
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
var projection = mat4perspective(60, canvas.width / canvas.height, 0.1, 1000);
var cameraPos = vec3create();
var cameraDir = vec3create();
var cameraUp = vec3create([0,1,0]);
var camera = mat4identity();
var tmpmatrix = mat4create();
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
var cubeDragSides = [
 [ 0, 0, 0, 0],
 [ 2, 3, 4, 5],
 [ 0, 0, 0, 0],
 [ 2, 6, 1, 5],
 [ 2, 1, 6, 5],
 [ 0, 0, 0, 0],
 [ 2, 4, 3, 5],
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
 vec3add(cameraDir, cameraPos, cameraWorldPos);
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
 gl.enable( GL_DEPTH_TEST );
 gl.enable( GL_CULL_FACE );
 gl.lineWidth(4.5);
 gl.clearColor(0,0,0,0);
 gl.viewport(0,0,canvas.width, canvas.height);
 cubeBuffer = gl.createBuffer();
 gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer);
 gl.bufferData(GL_ARRAY_BUFFER, cube.rawData, GL_STATIC_DRAW);
 sphereBuffer = gl.createBuffer();
 gl.bindBuffer(GL_ARRAY_BUFFER, sphereBuffer);
 gl.bufferData(GL_ARRAY_BUFFER, sphereData.rawData, GL_STATIC_DRAW);
 skyBuffer = gl.createBuffer();
 gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer);
 gl.bufferData(GL_ARRAY_BUFFER, sky.rawData, GL_STATIC_DRAW);
 goalBuffer = gl.createBuffer();
 gl.bindBuffer(GL_ARRAY_BUFFER, goalBuffer);
 gl.bufferData(GL_ARRAY_BUFFER, goal.rawData, GL_STATIC_DRAW);
 var path = new Float32Array( 3 * map.path.length );
 var j = 0;
 path[j++] = map.startingPosition.x;
 path[j++] = map.startingPosition.y;
 path[j++] = map.startingPosition.z;
 for(var i = 0; i !== map.path.length; i++) {
  path[j++] = map.path[i].x;
  path[j++] = map.path[i].y;
  path[j++] = map.path[i].z;
 }
 pathBuffer = gl.createBuffer();
 gl.bindBuffer(GL_ARRAY_BUFFER, pathBuffer);
 gl.bufferData(GL_ARRAY_BUFFER, path, GL_STATIC_DRAW);
 var hammer = new Hammer(canvas);
 hammer.ontap = function(ev) {
  tapped = true;
  tapEvent = ev;
  var x = ev.position[0].x;
  var y = canvas.height - ev.position[0].y;
  eventPosition.x = x;
  eventPosition.y = y;
 };
 hammer.ondrag = function(ev) {
  dragged = true;
  dragEvent = ev;
  var x = ev.position.x;
  var y = canvas.height - ev.position.y;
  eventPosition.x = x;
  eventPosition.y = y;
 };
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
 var r = 0;
 var g = 0;
 var b = 0;
 var a = 0;
 var side = 0;
 var selectedid = 0;
 var touchedTheSky = false;
 var touchedACube = false;
 if(tapped) {
  var dir = getClickDirection(cameraPos);
  sphere.tap(info, dir);
 }
 if(dragged) {
  var disx = dragEvent.distanceX * 2 * Math.PI / canvas.width / -20;
  var disy = dragEvent.distanceY * 2 * Math.PI / canvas.height / 20;
  spinHorz(disx);
  spinVert(disy);
 }
 tapped = false;
 dragged = false;
 sphere.tick(info);
}
function draw(info) {
 gl.disable( GL_DEPTH_TEST );
 drawSky(program);
 gl.enable( GL_DEPTH_TEST );
 gl.clear(GL_DEPTH_BUFFER_BIT);
 drawCubes(program);
 drawSphere(program);
 drawGoal(program);
 drawPath(borderprogram, map.path);
}
function drawCubes(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var aTextureuv = gl.getAttribLocation(program, "aTextureuv");
 var aNormal = gl.getAttribLocation(program, "aNormal");
 var modelviewprojection = tmpmatrix;
 gl.bindBuffer(GL_ARRAY_BUFFER, cubeBuffer);
 gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, cube.stride, cube.voffset);
 gl.enableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, cube.stride, cube.toffset);
  gl.enableVertexAttribArray(aTextureuv);
 }
 if(aNormal !== -1) {
  gl.vertexAttribPointer(aNormal, 4, GL_FLOAT, false, cube.stride, cube.noffset);
  gl.enableVertexAttribArray(aNormal);
 }
 if(uTexture) {
  gl.bindTexture(GL_TEXTURE_2D, cubetex);
  gl.uniform1i(uTexture, 0);
 }
 for(var i = 0; i != cubelist.length; i++) {
  var object = cubelist[i];
  mat4multiply(projection, camera, modelviewprojection);
  mat4translate(modelviewprojection, object.vector);
  gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
  gl.drawArrays(GL_TRIANGLES, 0, cube.numVertices);
 }
}
function drawSphere(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var aTextureuv = gl.getAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 gl.bindBuffer(GL_ARRAY_BUFFER, sphereBuffer);
 gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, sphereData.stride, sphereData.voffset);
 gl.enableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sphereData.stride, sphereData.toffset);
  gl.enableVertexAttribArray(aTextureuv);
 }
 if(uTexture) {
  gl.bindTexture(GL_TEXTURE_2D, cubetex);
  gl.uniform1i(uTexture, 0);
 }
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, sphere.position);
 gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 gl.drawArrays(GL_TRIANGLES, 0, sphereData.numVertices);
}
function drawGoal(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var aTextureuv = gl.getAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 gl.bindBuffer(GL_ARRAY_BUFFER, goalBuffer);
 gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, goal.stride, goal.voffset);
 gl.enableVertexAttribArray(aVertex);
 if(aTextureuv !== -1) {
  gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, goal.stride, goal.toffset);
  gl.enableVertexAttribArray(aTextureuv);
 }
 if(uTexture) {
  gl.bindTexture(GL_TEXTURE_2D, cubetex);
  gl.uniform1i(uTexture, 0);
 }
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, goalpos);
 gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 gl.drawArrays(GL_TRIANGLES, 0, goal.numVertices);
}
function drawSky(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var aTextureuv = gl.getAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 do { if(!(uModelviewprojection)) { __error("assertion failed: " + "uModelviewprojection" + " = " + (uModelviewprojection), "src/main.js", 384); } } while(false);
 do { if(!(uTexture)) { __error("assertion failed: " + "uTexture" + " = " + (uTexture), "src/main.js", 385); } } while(false);
 do { if(!(aTextureuv !== -1)) { __error("assertion failed: " + "aTextureuv !== -1" + " = " + (aTextureuv !== -1), "src/main.js", 386); } } while(false);
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 387); } } while(false);
 gl.bindBuffer(GL_ARRAY_BUFFER, skyBuffer);
 gl.vertexAttribPointer(aVertex, 4, GL_FLOAT, false, sky.stride, sky.voffset);
 gl.enableVertexAttribArray(aVertex);
 gl.vertexAttribPointer(aTextureuv, 4, GL_FLOAT, false, sky.stride, sky.toffset);
 gl.enableVertexAttribArray(aTextureuv);
 gl.bindTexture(GL_TEXTURE_2D, skytex);
 gl.uniform1i(uTexture, 0);
 mat4multiply(projection, camera, modelviewprojection);
 mat4translate(modelviewprojection, cameraDir);
 mat4translate(modelviewprojection, cameraPos);
 gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 gl.drawArrays(GL_TRIANGLES, 0, sky.numVertices);
}
function drawPath(program, path) {
 gl.useProgram(program);
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var modelviewprojection = tmpmatrix;
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 416); } } while(false);
 do { if(!(uModelviewprojection !== -1)) { __error("assertion failed: " + "uModelviewprojection !== -1" + " = " + (uModelviewprojection !== -1), "src/main.js", 417); } } while(false);
 gl.bindBuffer(GL_ARRAY_BUFFER, pathBuffer);
 gl.vertexAttribPointer(aVertex, 3, GL_FLOAT, false, 0, 0);
 gl.enableVertexAttribArray(aVertex);
 mat4multiply(projection, camera, modelviewprojection);
 gl.uniformMatrix4fv(uModelviewprojection, false, modelviewprojection);
 for(var i = 0; i !== map.path.length - 1; i++) {
  gl.drawArrays(GL_LINES, i, 2);
 }
}
function setCanvasForTexture(canvas, text) {
 gl.bindTexture(gl.TEXTURE_2D, text);
 gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
 gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
}
function createTexture(img) {
 do { if(!(img)) { __error("assertion failed: " + "img" + " = " + (img), "src/main.js", 445); } } while(false);
 var tex = gl.createTexture();
 setCanvasForTexture(img, tex);
 gl.bindTexture(GL_TEXTURE_2D, null);
 return tex;
}
GLT.loadmanager.loadFiles({
 "files" : ["cube.obj", "sphere.obj", "diffuse.shader", "cube.png", "skybox.obj", "border.shader", "goal.obj"],
 "error" : function(file, err) {
  console.error("ERROR (" + "src/main.js" + ":" + 458 + ")", file, err );
 },
 "finished" : function(files) {
  cube = files["cube.obj"];
  sky = files["skybox.obj"];
  sphereData = files["sphere.obj"];
  goal = files["goal.obj"];
  program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
  borderprogram = GLT.shader.compileProgram(gl,files["border.shader"]);
  cubetex = createTexture(files["cube.png"]);
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
  console.log("DEBUG (" + "src/main.js" + ":" + 517 + ")", "SEED", seed );
  map = Map.create(seed);
  for(var x = 0; x !== 16; x++)
   for(var y = 0; y !== 16; y++)
    for(var z = 0; z !== 16; z++) {
     var obj = map.getObject(x,y,z);
     if(obj === Map.CUBE) {
      cubelist.push( { vector : vec3create([x,y,z])} );
     }
     else if(obj === Map.GOAL) {
      goalpos[0] = x;
      goalpos[1] = y;
      goalpos[2] = z;
     }
    }
  cameraDir[0] = map.startingPosition.x;
  cameraDir[1] = map.startingPosition.x;
  cameraDir[2] = map.startingPosition.x;
  sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] }, map);
  vec3set(cameraDir, cameraPos);
  cameraPos[0] = 0;
  cameraPos[1] = 0;
  cameraPos[2] = 20;
  setup();
  recalcCamera();
  GLT.requestGameFrame(gameloop);
  var params = {"oldParams":true,"wave_type":3,"p_env_attack":0,"p_env_sustain":0.3507373180706054,"p_env_punch":0.7507036675233394,"p_env_decay":0.1148287485120818,"p_base_freq":0.030365511453751274,"p_freq_limit":0,"p_freq_ramp":0,"p_freq_dramp":0,"p_vib_strength":0,"p_vib_speed":0,"p_arp_mod":0,"p_arp_speed":0,"p_duty":0,"p_duty_ramp":0,"p_repeat_speed":0.7296395279234276,"p_pha_offset":-0.2251016782131046,"p_pha_ramp":-0.2945099702104926,"p_lpf_freq":1,"p_lpf_ramp":0,"p_lpf_resonance":0,"p_hpf_freq":0,"p_hpf_ramp":0,"sound_vol":0.25,"sample_rate":44100,"sample_size":8};
  var pdead = {"oldParams":true,"wave_type":0,"p_env_attack":-0.031099240445367497,"p_env_sustain":0.7635753833033847,"p_env_punch":0.2816417110611466,"p_env_decay":-0.6867234703619033,"p_base_freq":-0.05417757730129136,"p_freq_limit":0,"p_freq_ramp":0.366020674391696,"p_freq_dramp":0.061304970543220046,"p_vib_strength":-0.13391388831049597,"p_vib_speed":-0.08958338294178247,"p_arp_mod":0.7950661345385015,"p_arp_speed":0.5519341775216162,"p_duty":0.6044134241528809,"p_duty_ramp":0.8909097971481785,"p_repeat_speed":0.2607004144228995,"p_pha_offset":-0.00018430166566930404,"p_pha_ramp":0.8547329901213455,"p_lpf_freq":0.9224470124042238,"p_lpf_ramp":0.007261712532774577,"p_lpf_resonance":0.8195562218315899,"p_hpf_freq":2.3264287110167006e-7,"p_hpf_ramp":-0.6950668630055059,"sound_vol":0.25,"sample_rate":44100,"sample_size":8};
  var pblob = {"oldParams":true,"wave_type":0,"p_env_attack":-0.018341900495896277,"p_env_sustain":0.3757311985941444,"p_env_punch":-0.003057873247569856,"p_env_decay":0.06331000293139369,"p_base_freq":0.1656650181731793,"p_freq_limit":0,"p_freq_ramp":-0.0589514924457087,"p_freq_dramp":0.030146547487526147,"p_vib_strength":-0.019250509277321262,"p_vib_speed":0.5508432540111242,"p_arp_mod":0.8034108052030207,"p_arp_speed":0.16075012690853327,"p_duty":-0.04733387050218882,"p_duty_ramp":0.46016203196294625,"p_repeat_speed":-0.17416390222497286,"p_pha_offset":0.14307537902977768,"p_pha_ramp":-0.421786501233935,"p_lpf_freq":0.41369926108195854,"p_lpf_ramp":-0.2612435719273578,"p_lpf_resonance":-0.9390350750647485,"p_hpf_freq":0.16551226912858946,"p_hpf_ramp":-0.10125760095251089,"sound_vol":0.25,"sample_rate":44100,"sample_size":8,"p_vib_delay":null};
  var pfreu = {"oldParams":true,"wave_type":0,"p_env_attack":-0.004527911166038838,"p_env_sustain":0.840333883056117,"p_env_punch":0.32125634341977,"p_env_decay":0.8337062487844378,"p_base_freq":0.9230462823158505,"p_freq_limit":0,"p_freq_ramp":0.054141002534628405,"p_freq_dramp":0.028436068801879585,"p_vib_strength":0.05286053257716272,"p_vib_speed":0.7490090135484934,"p_arp_mod":0.002945324592292308,"p_arp_speed":-0.2514595840359107,"p_duty":-0.538211698899977,"p_duty_ramp":-0.02350955880296343,"p_repeat_speed":-0.3621571579016745,"p_pha_offset":0.05005980333720715,"p_pha_ramp":0.03782556013502259,"p_lpf_freq":0.9357535395725334,"p_lpf_ramp":-0.7541079941455712,"p_lpf_resonance":0.6400827742181718,"p_hpf_freq":1.0007283491126555,"p_hpf_ramp":0.42763103001397496,"sound_vol":0.25,"sample_rate":44100,"sample_size":8,"p_vib_delay":null};
  var SOUND = new Sfxr.SoundEffect(pdead).generate();
  var audio = new Audio();
  audio.src = SOUND.dataURI
  audio.play();
 }
});
console.log("DEBUG (" + "src/main.js" + ":" + 570 + ")", "DEBUG Build:", "Sep  9 2012", "15:06:15" );
