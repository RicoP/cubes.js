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
var Sphere = (function() {
 var tmpvector = vec3create();
 function Statemachine(sphere) {
  "use strict";
  var speed = 2.0;
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
     state = 0;
     vec3set(vec3add(startpos, direction, tmpvector), sphere.position);
     movetime = 0.0;
    }
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 42 + ")", "unknow state.", state );
    break;
   }
  };
  this.tap = function(time, dir) {
   do { if(!(time.delta instanceof Number) && !("Number".toLowerCase() === typeof time.delta)) { __error("Objct " + "time.delta" + " is not from type " + "Number", "src/sphere.js", 48); } } while(false);
   do { if(!(dir instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Float32Array", "src/sphere.js", 49); } } while(false);
   do { if(!(Math.abs((vec3length(dir) - 1.0)) < 0.0001)) { __error("assertion failed: " + "Math.abs((vec3length(dir) - 1.0)) < 0.0001" + " = " + (Math.abs((vec3length(dir) - 1.0)) < 0.0001), "src/sphere.js", 50); } } while(false);
   switch(state) {
    case 1:
    break;
    case 0:
    vec3set(dir, direction);
    vec3set(sphere.position, startpos);
    movetime = 0.0;
    state = 1;
    break;
    default:
    console.error("ERROR (" + "src/sphere.js" + ":" + 64 + ")", "unknow state.", state );
    break;
   }
  };
 }
 return function(position) {
  do { if(typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/sphere.js", 71); } } while(false);
  do { if(typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/sphere.js", 72); } } while(false);
  do { if(typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/sphere.js", 73); } } while(false);
  do { if(!(this !== window)) { __error("assertion failed: " + "this !== window" + " = " + (this !== window), "src/sphere.js", 74); } } while(false);
  this.position = vec3create([position.x, position.y, position.z]);
  var state = new Statemachine(this);
  this.tap = function(info, dir) {
   state.tap(info, dir);
  };
  this.tick = function(info) {
   state.tick(info);
  };
 };
}());
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
var Map = {
 "OUT_OF_BOUNDS" : -1,
 "AIR" : 0,
 "CUBE" : 1,
 "START" : 2,
 "GOAL" : 3
};
Map.create = function (seed, dimension) {
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
 var startingPosition = { x : (dimension/2) | 0, y : (dimension/2) | 0, z : (dimension/2) | 0 };
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
  do { if(!(x instanceof Number) && !("Number".toLowerCase() === typeof x)) { __error("Objct " + "x" + " is not from type " + "Number", "src/map.js", 50); } } while(false);
  do { if(!(y instanceof Number) && !("Number".toLowerCase() === typeof y)) { __error("Objct " + "y" + " is not from type " + "Number", "src/map.js", 51); } } while(false);
  do { if(!(z instanceof Number) && !("Number".toLowerCase() === typeof z)) { __error("Objct " + "z" + " is not from type " + "Number", "src/map.js", 52); } } while(false);
  do { if(!(type instanceof Number) && !("Number".toLowerCase() === typeof type)) { __error("Objct " + "type" + " is not from type " + "Number", "src/map.js", 53); } } while(false);
  do { if(!(x === (x|0))) { __error("assertion failed: " + "x === (x|0)" + " = " + (x === (x|0)), "src/map.js", 55); } } while(false);
  do { if(!(y === (y|0))) { __error("assertion failed: " + "y === (y|0)" + " = " + (y === (y|0)), "src/map.js", 56); } } while(false);
  do { if(!(z === (z|0))) { __error("assertion failed: " + "z === (z|0)" + " = " + (z === (z|0)), "src/map.js", 57); } } while(false);
  do { if(!(type === (type|0))) { __error("assertion failed: " + "type === (type|0)" + " = " + (type === (type|0)), "src/map.js", 58); } } while(false);
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
  do { if(typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/map.js", 101); } } while(false);
  do { if(typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/map.js", 102); } } while(false);
  do { if(typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/map.js", 103); } } while(false);
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
   clearField();
   set(startingPosition.x, startingPosition.y, startingPosition.z, Map.START);
   iterations = 5 + (rand.next() % 8);
  } while(!fillRec(rand, startingPosition, iterations, 0, -1));
 }
 fill(seed);
 return {
  "startingPosition" : startingPosition,
  "getObject" : get,
  "path" : path
 };
}
var cube;
var sphereData;
var sphere;
var sky;
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
var projection = mat4perspective(60, 4/3, 0.1, 1000);
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
var cubelist = [
];
var border = new Float32Array([
 -1, -1,
  1, -1,
  1, 1,
 -1, 1
]);
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
  console.log("DEBUG (" + "src/main.js" + ":" + 203 + ")", "Pos", camPos );
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
  console.log("DEBUG (" + "src/main.js" + ":" + 237 + ")", dir );
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
function drawSky(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var aVertex = gl.getAttribLocation(program, "aVertex");
 var aTextureuv = gl.getAttribLocation(program, "aTextureuv");
 var modelviewprojection = tmpmatrix;
 do { if(!(uModelviewprojection)) { __error("assertion failed: " + "uModelviewprojection" + " = " + (uModelviewprojection), "src/main.js", 356); } } while(false);
 do { if(!(uTexture)) { __error("assertion failed: " + "uTexture" + " = " + (uTexture), "src/main.js", 357); } } while(false);
 do { if(!(aTextureuv !== -1)) { __error("assertion failed: " + "aTextureuv !== -1" + " = " + (aTextureuv !== -1), "src/main.js", 358); } } while(false);
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 359); } } while(false);
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
 do { if(!(aVertex !== -1)) { __error("assertion failed: " + "aVertex !== -1" + " = " + (aVertex !== -1), "src/main.js", 388); } } while(false);
 do { if(!(uModelviewprojection !== -1)) { __error("assertion failed: " + "uModelviewprojection !== -1" + " = " + (uModelviewprojection !== -1), "src/main.js", 389); } } while(false);
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
 do { if(!(img)) { __error("assertion failed: " + "img" + " = " + (img), "src/main.js", 417); } } while(false);
 var tex = gl.createTexture();
 setCanvasForTexture(img, tex);
 gl.bindTexture(GL_TEXTURE_2D, null);
 return tex;
}
GLT.loadmanager.loadFiles({
 "files" : ["cube.obj", "sphere.obj", "diffuse.shader", "cube.png", "skybox.obj", "border.shader"],
 "error" : function(file, err) {
  console.error("ERROR (" + "src/main.js" + ":" + 430 + ")", file, err );
 },
 "finished" : function(files) {
  cube = files["cube.obj"];
  sky = files["skybox.obj"];
  sphereData = files["sphere.obj"];
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
  map = Map.create(49, 16);
  for(var x = 0; x !== 16; x++)
   for(var y = 0; y !== 16; y++)
    for(var z = 0; z !== 16; z++) {
     var obj = map.getObject(x,y,z);
     if(obj === Map.CUBE) {
      cubelist.push( { vector : vec3create([x,y,z])} );
     }
    }
  cameraDir[0] = 8;
  cameraDir[1] = 8;
  cameraDir[2] = 8;
  sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] });
  vec3set(cameraDir, cameraPos);
  cameraPos[0] = 0;
  cameraPos[1] = 0;
  cameraPos[2] = 20;
  setup();
  recalcCamera();
  GLT.requestGameFrame(gameloop);
 }
});
console.log("DEBUG (" + "src/main.js" + ":" + 517 + ")", "DEBUG Build:", "Sep  7 2012", "11:20:49" );
