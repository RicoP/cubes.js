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
(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(global);
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(root);
        });
    } else {
        factory(root);
    }
}(this, function (root) {
    "use strict";
    var FLOAT_EPSILON = 0.000001;
    var glMath = {};
    (function() {
        if (typeof(Float32Array) != 'undefined') {
            var y = new Float32Array(1);
            var i = new Int32Array(y.buffer);
            glMath.invsqrt = function(number) {
              var x2 = number * 0.5;
              y[0] = number;
              var threehalfs = 1.5;
              i[0] = 0x5f3759df - (i[0] >> 1);
              var number2 = y[0];
              return number2 * (threehalfs - (x2 * number2 * number2));
            };
        } else {
            glMath.invsqrt = function(number) { return 1.0 / Math.sqrt(number); };
        }
    })();
    var MatrixArray = null;
    function setMatrixArrayType(type) {
        MatrixArray = type;
        return MatrixArray;
    }
    function determineMatrixArrayType() {
        MatrixArray = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
        return MatrixArray;
    }
    determineMatrixArrayType();
    var vec3 = {};
    vec3.create = function (vec) {
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
    vec3.createFrom = function (x, y, z) {
        var dest = new MatrixArray(3);
        dest[0] = x;
        dest[1] = y;
        dest[2] = z;
        return dest;
    };
    vec3.set = function (vec, dest) {
        dest[0] = vec[0];
        dest[1] = vec[1];
        dest[2] = vec[2];
        return dest;
    };
    vec3.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON
        );
    };
    vec3.add = function (vec, vec2, dest) {
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
    vec3.subtract = function (vec, vec2, dest) {
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
    vec3.multiply = function (vec, vec2, dest) {
        if (!dest || vec === dest) {
            vec[0] *= vec2[0];
            vec[1] *= vec2[1];
            vec[2] *= vec2[2];
            return vec;
        }
        dest[0] = vec[0] * vec2[0];
        dest[1] = vec[1] * vec2[1];
        dest[2] = vec[2] * vec2[2];
        return dest;
    };
    vec3.negate = function (vec, dest) {
        if (!dest) { dest = vec; }
        dest[0] = -vec[0];
        dest[1] = -vec[1];
        dest[2] = -vec[2];
        return dest;
    };
    vec3.scale = function (vec, val, dest) {
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
    vec3.normalize = function (vec, dest) {
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
    vec3.cross = function (vec, vec2, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2],
            x2 = vec2[0], y2 = vec2[1], z2 = vec2[2];
        dest[0] = y * z2 - z * y2;
        dest[1] = z * x2 - x * z2;
        dest[2] = x * y2 - y * x2;
        return dest;
    };
    vec3.length = function (vec) {
        var x = vec[0], y = vec[1], z = vec[2];
        return Math.sqrt(x * x + y * y + z * z);
    };
    vec3.squaredLength = function (vec) {
        var x = vec[0], y = vec[1], z = vec[2];
        return x * x + y * y + z * z;
    };
    vec3.dot = function (vec, vec2) {
        return vec[0] * vec2[0] + vec[1] * vec2[1] + vec[2] * vec2[2];
    };
    vec3.direction = function (vec, vec2, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0] - vec2[0],
            y = vec[1] - vec2[1],
            z = vec[2] - vec2[2],
            len = Math.sqrt(x * x + y * y + z * z);
        if (!len) {
            dest[0] = 0;
            dest[1] = 0;
            dest[2] = 0;
            return dest;
        }
        len = 1 / len;
        dest[0] = x * len;
        dest[1] = y * len;
        dest[2] = z * len;
        return dest;
    };
    vec3.lerp = function (vec, vec2, lerp, dest) {
        if (!dest) { dest = vec; }
        dest[0] = vec[0] + lerp * (vec2[0] - vec[0]);
        dest[1] = vec[1] + lerp * (vec2[1] - vec[1]);
        dest[2] = vec[2] + lerp * (vec2[2] - vec[2]);
        return dest;
    };
    vec3.dist = function (vec, vec2) {
        var x = vec2[0] - vec[0],
            y = vec2[1] - vec[1],
            z = vec2[2] - vec[2];
        return Math.sqrt(x*x + y*y + z*z);
    };
    var unprojectMat = null;
    var unprojectVec = new MatrixArray(4);
    vec3.unproject = function (vec, view, proj, viewport, dest) {
        if (!dest) { dest = vec; }
        if(!unprojectMat) {
            unprojectMat = mat4.create();
        }
        var m = unprojectMat;
        var v = unprojectVec;
        v[0] = (vec[0] - viewport[0]) * 2.0 / viewport[2] - 1.0;
        v[1] = (vec[1] - viewport[1]) * 2.0 / viewport[3] - 1.0;
        v[2] = 2.0 * vec[2] - 1.0;
        v[3] = 1.0;
        mat4.multiply(proj, view, m);
        if(!mat4.inverse(m)) { return null; }
        mat4.multiplyVec4(m, v);
        if(v[3] === 0.0) { return null; }
        dest[0] = v[0] / v[3];
        dest[1] = v[1] / v[3];
        dest[2] = v[2] / v[3];
        return dest;
    };
    var xUnitVec3 = vec3.createFrom(1,0,0);
    var yUnitVec3 = vec3.createFrom(0,1,0);
    var zUnitVec3 = vec3.createFrom(0,0,1);
    var tmpvec3 = vec3.create();
    vec3.rotationTo = function (a, b, dest) {
        if (!dest) { dest = quat4.create(); }
        var d = vec3.dot(a, b);
        var axis = tmpvec3;
        if (d >= 1.0) {
            quat4.set(identityQuat4, dest);
        } else if (d < (0.000001 - 1.0)) {
            vec3.cross(xUnitVec3, a, axis);
            if (vec3.length(axis) < 0.000001)
                vec3.cross(yUnitVec3, a, axis);
            if (vec3.length(axis) < 0.000001)
                vec3.cross(zUnitVec3, a, axis);
            vec3.normalize(axis);
            quat4.fromAngleAxis(Math.PI, axis, dest);
        } else {
            var s = Math.sqrt((1.0 + d) * 2.0);
            var sInv = 1.0 / s;
            vec3.cross(a, b, axis);
            dest[0] = axis[0] * sInv;
            dest[1] = axis[1] * sInv;
            dest[2] = axis[2] * sInv;
            dest[3] = s * 0.5;
            quat4.normalize(dest);
        }
        if (dest[3] > 1.0) dest[3] = 1.0;
        else if (dest[3] < -1.0) dest[3] = -1.0;
        return dest;
    };
    vec3.str = function (vec) {
        return '[' + vec[0] + ', ' + vec[1] + ', ' + vec[2] + ']';
    };
    var mat3 = {};
    mat3.create = function (mat) {
        var dest = new MatrixArray(9);
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
        } else {
            dest[0] = dest[1] =
            dest[2] = dest[3] =
            dest[4] = dest[5] =
            dest[6] = dest[7] =
            dest[8] = 0;
        }
        return dest;
    };
    mat3.createFrom = function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var dest = new MatrixArray(9);
        dest[0] = m00;
        dest[1] = m01;
        dest[2] = m02;
        dest[3] = m10;
        dest[4] = m11;
        dest[5] = m12;
        dest[6] = m20;
        dest[7] = m21;
        dest[8] = m22;
        return dest;
    };
    mat3.determinant = function (mat) {
        var a00 = mat[0], a01 = mat[1], a02 = mat[2],
            a10 = mat[3], a11 = mat[4], a12 = mat[5],
            a20 = mat[6], a21 = mat[7], a22 = mat[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    };
    mat3.inverse = function (mat, dest) {
        var a00 = mat[0], a01 = mat[1], a02 = mat[2],
            a10 = mat[3], a11 = mat[4], a12 = mat[5],
            a20 = mat[6], a21 = mat[7], a22 = mat[8],
            b01 = a22 * a11 - a12 * a21,
            b11 = -a22 * a10 + a12 * a20,
            b21 = a21 * a10 - a11 * a20,
            d = a00 * b01 + a01 * b11 + a02 * b21,
            id;
        if (!d) { return null; }
        id = 1 / d;
        if (!dest) { dest = mat3.create(); }
        dest[0] = b01 * id;
        dest[1] = (-a22 * a01 + a02 * a21) * id;
        dest[2] = (a12 * a01 - a02 * a11) * id;
        dest[3] = b11 * id;
        dest[4] = (a22 * a00 - a02 * a20) * id;
        dest[5] = (-a12 * a00 + a02 * a10) * id;
        dest[6] = b21 * id;
        dest[7] = (-a21 * a00 + a01 * a20) * id;
        dest[8] = (a11 * a00 - a01 * a10) * id;
        return dest;
    };
    mat3.multiply = function (mat, mat2, dest) {
        if (!dest) { dest = mat; }
        var a00 = mat[0], a01 = mat[1], a02 = mat[2],
            a10 = mat[3], a11 = mat[4], a12 = mat[5],
            a20 = mat[6], a21 = mat[7], a22 = mat[8],
            b00 = mat2[0], b01 = mat2[1], b02 = mat2[2],
            b10 = mat2[3], b11 = mat2[4], b12 = mat2[5],
            b20 = mat2[6], b21 = mat2[7], b22 = mat2[8];
        dest[0] = b00 * a00 + b01 * a10 + b02 * a20;
        dest[1] = b00 * a01 + b01 * a11 + b02 * a21;
        dest[2] = b00 * a02 + b01 * a12 + b02 * a22;
        dest[3] = b10 * a00 + b11 * a10 + b12 * a20;
        dest[4] = b10 * a01 + b11 * a11 + b12 * a21;
        dest[5] = b10 * a02 + b11 * a12 + b12 * a22;
        dest[6] = b20 * a00 + b21 * a10 + b22 * a20;
        dest[7] = b20 * a01 + b21 * a11 + b22 * a21;
        dest[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return dest;
    };
    mat3.multiplyVec2 = function(matrix, vec, dest) {
      if (!dest) dest = vec;
      var x = vec[0], y = vec[1];
      dest[0] = x * matrix[0] + y * matrix[3] + matrix[6];
      dest[1] = x * matrix[1] + y * matrix[4] + matrix[7];
      return dest;
    };
    mat3.multiplyVec3 = function(matrix, vec, dest) {
      if (!dest) dest = vec;
      var x = vec[0], y = vec[1], z = vec[2];
      dest[0] = x * matrix[0] + y * matrix[3] + z * matrix[6];
      dest[1] = x * matrix[1] + y * matrix[4] + z * matrix[7];
      dest[2] = x * matrix[2] + y * matrix[5] + z * matrix[8];
      return dest;
    };
    mat3.set = function (mat, dest) {
        dest[0] = mat[0];
        dest[1] = mat[1];
        dest[2] = mat[2];
        dest[3] = mat[3];
        dest[4] = mat[4];
        dest[5] = mat[5];
        dest[6] = mat[6];
        dest[7] = mat[7];
        dest[8] = mat[8];
        return dest;
    };
    mat3.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON &&
            Math.abs(a[3] - b[3]) < FLOAT_EPSILON &&
            Math.abs(a[4] - b[4]) < FLOAT_EPSILON &&
            Math.abs(a[5] - b[5]) < FLOAT_EPSILON &&
            Math.abs(a[6] - b[6]) < FLOAT_EPSILON &&
            Math.abs(a[7] - b[7]) < FLOAT_EPSILON &&
            Math.abs(a[8] - b[8]) < FLOAT_EPSILON
        );
    };
    mat3.identity = function (dest) {
        if (!dest) { dest = mat3.create(); }
        dest[0] = 1;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 0;
        dest[4] = 1;
        dest[5] = 0;
        dest[6] = 0;
        dest[7] = 0;
        dest[8] = 1;
        return dest;
    };
    mat3.transpose = function (mat, dest) {
        if (!dest || mat === dest) {
            var a01 = mat[1], a02 = mat[2],
                a12 = mat[5];
            mat[1] = mat[3];
            mat[2] = mat[6];
            mat[3] = a01;
            mat[5] = mat[7];
            mat[6] = a02;
            mat[7] = a12;
            return mat;
        }
        dest[0] = mat[0];
        dest[1] = mat[3];
        dest[2] = mat[6];
        dest[3] = mat[1];
        dest[4] = mat[4];
        dest[5] = mat[7];
        dest[6] = mat[2];
        dest[7] = mat[5];
        dest[8] = mat[8];
        return dest;
    };
    mat3.toMat4 = function (mat, dest) {
        if (!dest) { dest = mat4.create(); }
        dest[15] = 1;
        dest[14] = 0;
        dest[13] = 0;
        dest[12] = 0;
        dest[11] = 0;
        dest[10] = mat[8];
        dest[9] = mat[7];
        dest[8] = mat[6];
        dest[7] = 0;
        dest[6] = mat[5];
        dest[5] = mat[4];
        dest[4] = mat[3];
        dest[3] = 0;
        dest[2] = mat[2];
        dest[1] = mat[1];
        dest[0] = mat[0];
        return dest;
    };
    mat3.str = function (mat) {
        return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] +
            ', ' + mat[3] + ', ' + mat[4] + ', ' + mat[5] +
            ', ' + mat[6] + ', ' + mat[7] + ', ' + mat[8] + ']';
    };
    var mat4 = {};
    mat4.create = function (mat) {
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
    mat4.createFrom = function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        var dest = new MatrixArray(16);
        dest[0] = m00;
        dest[1] = m01;
        dest[2] = m02;
        dest[3] = m03;
        dest[4] = m10;
        dest[5] = m11;
        dest[6] = m12;
        dest[7] = m13;
        dest[8] = m20;
        dest[9] = m21;
        dest[10] = m22;
        dest[11] = m23;
        dest[12] = m30;
        dest[13] = m31;
        dest[14] = m32;
        dest[15] = m33;
        return dest;
    };
    mat4.set = function (mat, dest) {
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
        return dest;
    };
    mat4.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON &&
            Math.abs(a[3] - b[3]) < FLOAT_EPSILON &&
            Math.abs(a[4] - b[4]) < FLOAT_EPSILON &&
            Math.abs(a[5] - b[5]) < FLOAT_EPSILON &&
            Math.abs(a[6] - b[6]) < FLOAT_EPSILON &&
            Math.abs(a[7] - b[7]) < FLOAT_EPSILON &&
            Math.abs(a[8] - b[8]) < FLOAT_EPSILON &&
            Math.abs(a[9] - b[9]) < FLOAT_EPSILON &&
            Math.abs(a[10] - b[10]) < FLOAT_EPSILON &&
            Math.abs(a[11] - b[11]) < FLOAT_EPSILON &&
            Math.abs(a[12] - b[12]) < FLOAT_EPSILON &&
            Math.abs(a[13] - b[13]) < FLOAT_EPSILON &&
            Math.abs(a[14] - b[14]) < FLOAT_EPSILON &&
            Math.abs(a[15] - b[15]) < FLOAT_EPSILON
        );
    };
    mat4.identity = function (dest) {
        if (!dest) { dest = mat4.create(); }
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
    mat4.transpose = function (mat, dest) {
        if (!dest || mat === dest) {
            var a01 = mat[1], a02 = mat[2], a03 = mat[3],
                a12 = mat[6], a13 = mat[7],
                a23 = mat[11];
            mat[1] = mat[4];
            mat[2] = mat[8];
            mat[3] = mat[12];
            mat[4] = a01;
            mat[6] = mat[9];
            mat[7] = mat[13];
            mat[8] = a02;
            mat[9] = a12;
            mat[11] = mat[14];
            mat[12] = a03;
            mat[13] = a13;
            mat[14] = a23;
            return mat;
        }
        dest[0] = mat[0];
        dest[1] = mat[4];
        dest[2] = mat[8];
        dest[3] = mat[12];
        dest[4] = mat[1];
        dest[5] = mat[5];
        dest[6] = mat[9];
        dest[7] = mat[13];
        dest[8] = mat[2];
        dest[9] = mat[6];
        dest[10] = mat[10];
        dest[11] = mat[14];
        dest[12] = mat[3];
        dest[13] = mat[7];
        dest[14] = mat[11];
        dest[15] = mat[15];
        return dest;
    };
    mat4.determinant = function (mat) {
        var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3],
            a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7],
            a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11],
            a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
        return (a30 * a21 * a12 * a03 - a20 * a31 * a12 * a03 - a30 * a11 * a22 * a03 + a10 * a31 * a22 * a03 +
                a20 * a11 * a32 * a03 - a10 * a21 * a32 * a03 - a30 * a21 * a02 * a13 + a20 * a31 * a02 * a13 +
                a30 * a01 * a22 * a13 - a00 * a31 * a22 * a13 - a20 * a01 * a32 * a13 + a00 * a21 * a32 * a13 +
                a30 * a11 * a02 * a23 - a10 * a31 * a02 * a23 - a30 * a01 * a12 * a23 + a00 * a31 * a12 * a23 +
                a10 * a01 * a32 * a23 - a00 * a11 * a32 * a23 - a20 * a11 * a02 * a33 + a10 * a21 * a02 * a33 +
                a20 * a01 * a12 * a33 - a00 * a21 * a12 * a33 - a10 * a01 * a22 * a33 + a00 * a11 * a22 * a33);
    };
    mat4.inverse = function (mat, dest) {
        if (!dest) { dest = mat; }
        var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3],
            a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7],
            a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11],
            a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15],
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,
            d = (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06),
            invDet;
            if (!d) { return null; }
            invDet = 1 / d;
        dest[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
        dest[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
        dest[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
        dest[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
        dest[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
        dest[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
        dest[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
        dest[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
        dest[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
        dest[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
        dest[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
        dest[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
        dest[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
        dest[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
        dest[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
        dest[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
        return dest;
    };
    mat4.toRotationMat = function (mat, dest) {
        if (!dest) { dest = mat4.create(); }
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
        dest[12] = 0;
        dest[13] = 0;
        dest[14] = 0;
        dest[15] = 1;
        return dest;
    };
    mat4.toMat3 = function (mat, dest) {
        if (!dest) { dest = mat3.create(); }
        dest[0] = mat[0];
        dest[1] = mat[1];
        dest[2] = mat[2];
        dest[3] = mat[4];
        dest[4] = mat[5];
        dest[5] = mat[6];
        dest[6] = mat[8];
        dest[7] = mat[9];
        dest[8] = mat[10];
        return dest;
    };
    mat4.toInverseMat3 = function (mat, dest) {
        var a00 = mat[0], a01 = mat[1], a02 = mat[2],
            a10 = mat[4], a11 = mat[5], a12 = mat[6],
            a20 = mat[8], a21 = mat[9], a22 = mat[10],
            b01 = a22 * a11 - a12 * a21,
            b11 = -a22 * a10 + a12 * a20,
            b21 = a21 * a10 - a11 * a20,
            d = a00 * b01 + a01 * b11 + a02 * b21,
            id;
        if (!d) { return null; }
        id = 1 / d;
        if (!dest) { dest = mat3.create(); }
        dest[0] = b01 * id;
        dest[1] = (-a22 * a01 + a02 * a21) * id;
        dest[2] = (a12 * a01 - a02 * a11) * id;
        dest[3] = b11 * id;
        dest[4] = (a22 * a00 - a02 * a20) * id;
        dest[5] = (-a12 * a00 + a02 * a10) * id;
        dest[6] = b21 * id;
        dest[7] = (-a21 * a00 + a01 * a20) * id;
        dest[8] = (a11 * a00 - a01 * a10) * id;
        return dest;
    };
    mat4.multiply = function (mat, mat2, dest) {
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
    mat4.multiplyVec3 = function (mat, vec, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2];
        dest[0] = mat[0] * x + mat[4] * y + mat[8] * z + mat[12];
        dest[1] = mat[1] * x + mat[5] * y + mat[9] * z + mat[13];
        dest[2] = mat[2] * x + mat[6] * y + mat[10] * z + mat[14];
        return dest;
    };
    mat4.multiplyVec4 = function (mat, vec, dest) {
        if (!dest) { dest = vec; }
        var x = vec[0], y = vec[1], z = vec[2], w = vec[3];
        dest[0] = mat[0] * x + mat[4] * y + mat[8] * z + mat[12] * w;
        dest[1] = mat[1] * x + mat[5] * y + mat[9] * z + mat[13] * w;
        dest[2] = mat[2] * x + mat[6] * y + mat[10] * z + mat[14] * w;
        dest[3] = mat[3] * x + mat[7] * y + mat[11] * z + mat[15] * w;
        return dest;
    };
    mat4.translate = function (mat, vec, dest) {
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
    mat4.scale = function (mat, vec, dest) {
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
    mat4.rotate = function (mat, angle, axis, dest) {
        var x = axis[0], y = axis[1], z = axis[2],
            len = Math.sqrt(x * x + y * y + z * z),
            s, c, t,
            a00, a01, a02, a03,
            a10, a11, a12, a13,
            a20, a21, a22, a23,
            b00, b01, b02,
            b10, b11, b12,
            b20, b21, b22;
        if (!len) { return null; }
        if (len !== 1) {
            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
        }
        s = Math.sin(angle);
        c = Math.cos(angle);
        t = 1 - c;
        a00 = mat[0]; a01 = mat[1]; a02 = mat[2]; a03 = mat[3];
        a10 = mat[4]; a11 = mat[5]; a12 = mat[6]; a13 = mat[7];
        a20 = mat[8]; a21 = mat[9]; a22 = mat[10]; a23 = mat[11];
        b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
        b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
        b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
        if (!dest) {
            dest = mat;
        } else if (mat !== dest) {
            dest[12] = mat[12];
            dest[13] = mat[13];
            dest[14] = mat[14];
            dest[15] = mat[15];
        }
        dest[0] = a00 * b00 + a10 * b01 + a20 * b02;
        dest[1] = a01 * b00 + a11 * b01 + a21 * b02;
        dest[2] = a02 * b00 + a12 * b01 + a22 * b02;
        dest[3] = a03 * b00 + a13 * b01 + a23 * b02;
        dest[4] = a00 * b10 + a10 * b11 + a20 * b12;
        dest[5] = a01 * b10 + a11 * b11 + a21 * b12;
        dest[6] = a02 * b10 + a12 * b11 + a22 * b12;
        dest[7] = a03 * b10 + a13 * b11 + a23 * b12;
        dest[8] = a00 * b20 + a10 * b21 + a20 * b22;
        dest[9] = a01 * b20 + a11 * b21 + a21 * b22;
        dest[10] = a02 * b20 + a12 * b21 + a22 * b22;
        dest[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return dest;
    };
    mat4.rotateX = function (mat, angle, dest) {
        var s = Math.sin(angle),
            c = Math.cos(angle),
            a10 = mat[4],
            a11 = mat[5],
            a12 = mat[6],
            a13 = mat[7],
            a20 = mat[8],
            a21 = mat[9],
            a22 = mat[10],
            a23 = mat[11];
        if (!dest) {
            dest = mat;
        } else if (mat !== dest) {
            dest[0] = mat[0];
            dest[1] = mat[1];
            dest[2] = mat[2];
            dest[3] = mat[3];
            dest[12] = mat[12];
            dest[13] = mat[13];
            dest[14] = mat[14];
            dest[15] = mat[15];
        }
        dest[4] = a10 * c + a20 * s;
        dest[5] = a11 * c + a21 * s;
        dest[6] = a12 * c + a22 * s;
        dest[7] = a13 * c + a23 * s;
        dest[8] = a10 * -s + a20 * c;
        dest[9] = a11 * -s + a21 * c;
        dest[10] = a12 * -s + a22 * c;
        dest[11] = a13 * -s + a23 * c;
        return dest;
    };
    mat4.rotateY = function (mat, angle, dest) {
        var s = Math.sin(angle),
            c = Math.cos(angle),
            a00 = mat[0],
            a01 = mat[1],
            a02 = mat[2],
            a03 = mat[3],
            a20 = mat[8],
            a21 = mat[9],
            a22 = mat[10],
            a23 = mat[11];
        if (!dest) {
            dest = mat;
        } else if (mat !== dest) {
            dest[4] = mat[4];
            dest[5] = mat[5];
            dest[6] = mat[6];
            dest[7] = mat[7];
            dest[12] = mat[12];
            dest[13] = mat[13];
            dest[14] = mat[14];
            dest[15] = mat[15];
        }
        dest[0] = a00 * c + a20 * -s;
        dest[1] = a01 * c + a21 * -s;
        dest[2] = a02 * c + a22 * -s;
        dest[3] = a03 * c + a23 * -s;
        dest[8] = a00 * s + a20 * c;
        dest[9] = a01 * s + a21 * c;
        dest[10] = a02 * s + a22 * c;
        dest[11] = a03 * s + a23 * c;
        return dest;
    };
    mat4.rotateZ = function (mat, angle, dest) {
        var s = Math.sin(angle),
            c = Math.cos(angle),
            a00 = mat[0],
            a01 = mat[1],
            a02 = mat[2],
            a03 = mat[3],
            a10 = mat[4],
            a11 = mat[5],
            a12 = mat[6],
            a13 = mat[7];
        if (!dest) {
            dest = mat;
        } else if (mat !== dest) {
            dest[8] = mat[8];
            dest[9] = mat[9];
            dest[10] = mat[10];
            dest[11] = mat[11];
            dest[12] = mat[12];
            dest[13] = mat[13];
            dest[14] = mat[14];
            dest[15] = mat[15];
        }
        dest[0] = a00 * c + a10 * s;
        dest[1] = a01 * c + a11 * s;
        dest[2] = a02 * c + a12 * s;
        dest[3] = a03 * c + a13 * s;
        dest[4] = a00 * -s + a10 * c;
        dest[5] = a01 * -s + a11 * c;
        dest[6] = a02 * -s + a12 * c;
        dest[7] = a03 * -s + a13 * c;
        return dest;
    };
    mat4.frustum = function (left, right, bottom, top, near, far, dest) {
        if (!dest) { dest = mat4.create(); }
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
    mat4.perspective = function (fovy, aspect, near, far, dest) {
        var top = near * Math.tan(fovy * Math.PI / 360.0),
            right = top * aspect;
        return mat4.frustum(-right, right, -top, top, near, far, dest);
    };
    mat4.ortho = function (left, right, bottom, top, near, far, dest) {
        if (!dest) { dest = mat4.create(); }
        var rl = (right - left),
            tb = (top - bottom),
            fn = (far - near);
        dest[0] = 2 / rl;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 0;
        dest[4] = 0;
        dest[5] = 2 / tb;
        dest[6] = 0;
        dest[7] = 0;
        dest[8] = 0;
        dest[9] = 0;
        dest[10] = -2 / fn;
        dest[11] = 0;
        dest[12] = -(left + right) / rl;
        dest[13] = -(top + bottom) / tb;
        dest[14] = -(far + near) / fn;
        dest[15] = 1;
        return dest;
    };
    mat4.lookAt = function (eye, center, up, dest) {
        if (!dest) { dest = mat4.create(); }
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
            return mat4.identity(dest);
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
    mat4.fromRotationTranslation = function (quat, vec, dest) {
        if (!dest) { dest = mat4.create(); }
        var x = quat[0], y = quat[1], z = quat[2], w = quat[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,
            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;
        dest[0] = 1 - (yy + zz);
        dest[1] = xy + wz;
        dest[2] = xz - wy;
        dest[3] = 0;
        dest[4] = xy - wz;
        dest[5] = 1 - (xx + zz);
        dest[6] = yz + wx;
        dest[7] = 0;
        dest[8] = xz + wy;
        dest[9] = yz - wx;
        dest[10] = 1 - (xx + yy);
        dest[11] = 0;
        dest[12] = vec[0];
        dest[13] = vec[1];
        dest[14] = vec[2];
        dest[15] = 1;
        return dest;
    };
    mat4.str = function (mat) {
        return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + ', ' + mat[3] +
            ', ' + mat[4] + ', ' + mat[5] + ', ' + mat[6] + ', ' + mat[7] +
            ', ' + mat[8] + ', ' + mat[9] + ', ' + mat[10] + ', ' + mat[11] +
            ', ' + mat[12] + ', ' + mat[13] + ', ' + mat[14] + ', ' + mat[15] + ']';
    };
    var quat4 = {};
    quat4.create = function (quat) {
        var dest = new MatrixArray(4);
        if (quat) {
            dest[0] = quat[0];
            dest[1] = quat[1];
            dest[2] = quat[2];
            dest[3] = quat[3];
        } else {
            dest[0] = dest[1] = dest[2] = dest[3] = 0;
        }
        return dest;
    };
    quat4.createFrom = function (x, y, z, w) {
        var dest = new MatrixArray(4);
        dest[0] = x;
        dest[1] = y;
        dest[2] = z;
        dest[3] = w;
        return dest;
    };
    quat4.set = function (quat, dest) {
        dest[0] = quat[0];
        dest[1] = quat[1];
        dest[2] = quat[2];
        dest[3] = quat[3];
        return dest;
    };
    quat4.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON &&
            Math.abs(a[3] - b[3]) < FLOAT_EPSILON
        );
    };
    quat4.identity = function (dest) {
        if (!dest) { dest = quat4.create(); }
        dest[0] = 0;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 1;
        return dest;
    };
    var identityQuat4 = quat4.identity();
    quat4.calculateW = function (quat, dest) {
        var x = quat[0], y = quat[1], z = quat[2];
        if (!dest || quat === dest) {
            quat[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
            return quat;
        }
        dest[0] = x;
        dest[1] = y;
        dest[2] = z;
        dest[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
        return dest;
    };
    quat4.dot = function(quat, quat2){
        return quat[0]*quat2[0] + quat[1]*quat2[1] + quat[2]*quat2[2] + quat[3]*quat2[3];
    };
    quat4.inverse = function(quat, dest) {
        var q0 = quat[0], q1 = quat[1], q2 = quat[2], q3 = quat[3],
            dot = q0*q0 + q1*q1 + q2*q2 + q3*q3,
            invDot = dot ? 1.0/dot : 0;
        if(!dest || quat === dest) {
            quat[0] *= -invDot;
            quat[1] *= -invDot;
            quat[2] *= -invDot;
            quat[3] *= invDot;
            return quat;
        }
        dest[0] = -quat[0]*invDot;
        dest[1] = -quat[1]*invDot;
        dest[2] = -quat[2]*invDot;
        dest[3] = quat[3]*invDot;
        return dest;
    };
    quat4.conjugate = function (quat, dest) {
        if (!dest || quat === dest) {
            quat[0] *= -1;
            quat[1] *= -1;
            quat[2] *= -1;
            return quat;
        }
        dest[0] = -quat[0];
        dest[1] = -quat[1];
        dest[2] = -quat[2];
        dest[3] = quat[3];
        return dest;
    };
    quat4.length = function (quat) {
        var x = quat[0], y = quat[1], z = quat[2], w = quat[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    quat4.normalize = function (quat, dest) {
        if (!dest) { dest = quat; }
        var x = quat[0], y = quat[1], z = quat[2], w = quat[3],
            len = Math.sqrt(x * x + y * y + z * z + w * w);
        if (len === 0) {
            dest[0] = 0;
            dest[1] = 0;
            dest[2] = 0;
            dest[3] = 0;
            return dest;
        }
        len = 1 / len;
        dest[0] = x * len;
        dest[1] = y * len;
        dest[2] = z * len;
        dest[3] = w * len;
        return dest;
    };
    quat4.add = function (quat, quat2, dest) {
        if(!dest || quat === dest) {
            quat[0] += quat2[0];
            quat[1] += quat2[1];
            quat[2] += quat2[2];
            quat[3] += quat2[3];
            return quat;
        }
        dest[0] = quat[0]+quat2[0];
        dest[1] = quat[1]+quat2[1];
        dest[2] = quat[2]+quat2[2];
        dest[3] = quat[3]+quat2[3];
        return dest;
    };
    quat4.multiply = function (quat, quat2, dest) {
        if (!dest) { dest = quat; }
        var qax = quat[0], qay = quat[1], qaz = quat[2], qaw = quat[3],
            qbx = quat2[0], qby = quat2[1], qbz = quat2[2], qbw = quat2[3];
        dest[0] = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        dest[1] = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        dest[2] = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        dest[3] = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        return dest;
    };
    quat4.multiplyVec3 = function (quat, vec, dest) {
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
    quat4.scale = function (quat, val, dest) {
        if(!dest || quat === dest) {
            quat[0] *= val;
            quat[1] *= val;
            quat[2] *= val;
            quat[3] *= val;
            return quat;
        }
        dest[0] = quat[0]*val;
        dest[1] = quat[1]*val;
        dest[2] = quat[2]*val;
        dest[3] = quat[3]*val;
        return dest;
    };
    quat4.toMat3 = function (quat, dest) {
        if (!dest) { dest = mat3.create(); }
        var x = quat[0], y = quat[1], z = quat[2], w = quat[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,
            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;
        dest[0] = 1 - (yy + zz);
        dest[1] = xy + wz;
        dest[2] = xz - wy;
        dest[3] = xy - wz;
        dest[4] = 1 - (xx + zz);
        dest[5] = yz + wx;
        dest[6] = xz + wy;
        dest[7] = yz - wx;
        dest[8] = 1 - (xx + yy);
        return dest;
    };
    quat4.toMat4 = function (quat, dest) {
        if (!dest) { dest = mat4.create(); }
        var x = quat[0], y = quat[1], z = quat[2], w = quat[3],
            x2 = x + x,
            y2 = y + y,
            z2 = z + z,
            xx = x * x2,
            xy = x * y2,
            xz = x * z2,
            yy = y * y2,
            yz = y * z2,
            zz = z * z2,
            wx = w * x2,
            wy = w * y2,
            wz = w * z2;
        dest[0] = 1 - (yy + zz);
        dest[1] = xy + wz;
        dest[2] = xz - wy;
        dest[3] = 0;
        dest[4] = xy - wz;
        dest[5] = 1 - (xx + zz);
        dest[6] = yz + wx;
        dest[7] = 0;
        dest[8] = xz + wy;
        dest[9] = yz - wx;
        dest[10] = 1 - (xx + yy);
        dest[11] = 0;
        dest[12] = 0;
        dest[13] = 0;
        dest[14] = 0;
        dest[15] = 1;
        return dest;
    };
    quat4.slerp = function (quat, quat2, slerp, dest) {
        if (!dest) { dest = quat; }
        var cosHalfTheta = quat[0] * quat2[0] + quat[1] * quat2[1] + quat[2] * quat2[2] + quat[3] * quat2[3],
            halfTheta,
            sinHalfTheta,
            ratioA,
            ratioB;
        if (Math.abs(cosHalfTheta) >= 1.0) {
            if (dest !== quat) {
                dest[0] = quat[0];
                dest[1] = quat[1];
                dest[2] = quat[2];
                dest[3] = quat[3];
            }
            return dest;
        }
        halfTheta = Math.acos(cosHalfTheta);
        sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            dest[0] = (quat[0] * 0.5 + quat2[0] * 0.5);
            dest[1] = (quat[1] * 0.5 + quat2[1] * 0.5);
            dest[2] = (quat[2] * 0.5 + quat2[2] * 0.5);
            dest[3] = (quat[3] * 0.5 + quat2[3] * 0.5);
            return dest;
        }
        ratioA = Math.sin((1 - slerp) * halfTheta) / sinHalfTheta;
        ratioB = Math.sin(slerp * halfTheta) / sinHalfTheta;
        dest[0] = (quat[0] * ratioA + quat2[0] * ratioB);
        dest[1] = (quat[1] * ratioA + quat2[1] * ratioB);
        dest[2] = (quat[2] * ratioA + quat2[2] * ratioB);
        dest[3] = (quat[3] * ratioA + quat2[3] * ratioB);
        return dest;
    };
    quat4.fromRotationMatrix = function(mat, dest) {
        if (!dest) dest = quat4.create();
        var fTrace = mat[0] + mat[4] + mat[8];
        var fRoot;
        if ( fTrace > 0.0 ) {
            fRoot = Math.sqrt(fTrace + 1.0);
            dest[3] = 0.5 * fRoot;
            fRoot = 0.5/fRoot;
            dest[0] = (mat[7]-mat[5])*fRoot;
            dest[1] = (mat[2]-mat[6])*fRoot;
            dest[2] = (mat[3]-mat[1])*fRoot;
        } else {
            var s_iNext = quat4.fromRotationMatrix.s_iNext = quat4.fromRotationMatrix.s_iNext || [1,2,0];
            var i = 0;
            if ( mat[4] > mat[0] )
              i = 1;
            if ( mat[8] > mat[i*3+i] )
              i = 2;
            var j = s_iNext[i];
            var k = s_iNext[j];
            fRoot = Math.sqrt(mat[i*3+i]-mat[j*3+j]-mat[k*3+k] + 1.0);
            dest[i] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            dest[3] = (mat[k*3+j] - mat[j*3+k]) * fRoot;
            dest[j] = (mat[j*3+i] + mat[i*3+j]) * fRoot;
            dest[k] = (mat[k*3+i] + mat[i*3+k]) * fRoot;
        }
        return dest;
    };
    mat3.toQuat4 = quat4.fromRotationMatrix;
    (function() {
        var mat = mat3.create();
        quat4.fromAxes = function(view, right, up, dest) {
            mat[0] = right[0];
            mat[3] = right[1];
            mat[6] = right[2];
            mat[1] = up[0];
            mat[4] = up[1];
            mat[7] = up[2];
            mat[2] = view[0];
            mat[5] = view[1];
            mat[8] = view[2];
            return quat4.fromRotationMatrix(mat, dest);
        };
    })();
    quat4.identity = function(dest) {
        if (!dest) dest = quat4.create();
        dest[0] = 0;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 1;
        return dest;
    };
    quat4.fromAngleAxis = function(angle, axis, dest) {
        if (!dest) dest = quat4.create();
        var half = angle * 0.5;
        var s = Math.sin(half);
        dest[3] = Math.cos(half);
        dest[0] = s * axis[0];
        dest[1] = s * axis[1];
        dest[2] = s * axis[2];
        return dest;
    };
    quat4.toAngleAxis = function(src, dest) {
        if (!dest) dest = src;
        var sqrlen = src[0]*src[0]+src[1]*src[1]+src[2]*src[2];
        if (sqrlen > 0)
        {
            dest[3] = 2 * Math.acos(src[3]);
            var invlen = glMath.invsqrt(sqrlen);
            dest[0] = src[0]*invlen;
            dest[1] = src[1]*invlen;
            dest[2] = src[2]*invlen;
        } else {
            dest[3] = 0;
            dest[0] = 1;
            dest[1] = 0;
            dest[2] = 0;
        }
        return dest;
    };
    quat4.str = function (quat) {
        return '[' + quat[0] + ', ' + quat[1] + ', ' + quat[2] + ', ' + quat[3] + ']';
    };
    var vec2 = {};
    vec2.create = function(vec) {
        var dest = new MatrixArray(2);
        if (vec) {
            dest[0] = vec[0];
            dest[1] = vec[1];
        } else {
            dest[0] = 0;
            dest[1] = 0;
        }
        return dest;
    };
    vec2.createFrom = function (x, y) {
        var dest = new MatrixArray(2);
        dest[0] = x;
        dest[1] = y;
        return dest;
    };
    vec2.add = function(vecA, vecB, dest) {
        if (!dest) dest = vecB;
        dest[0] = vecA[0] + vecB[0];
        dest[1] = vecA[1] + vecB[1];
        return dest;
    };
    vec2.subtract = function(vecA, vecB, dest) {
        if (!dest) dest = vecB;
        dest[0] = vecA[0] - vecB[0];
        dest[1] = vecA[1] - vecB[1];
        return dest;
    };
    vec2.multiply = function(vecA, vecB, dest) {
        if (!dest) dest = vecB;
        dest[0] = vecA[0] * vecB[0];
        dest[1] = vecA[1] * vecB[1];
        return dest;
    };
    vec2.divide = function(vecA, vecB, dest) {
        if (!dest) dest = vecB;
        dest[0] = vecA[0] / vecB[0];
        dest[1] = vecA[1] / vecB[1];
        return dest;
    };
    vec2.scale = function(vecA, scalar, dest) {
        if (!dest) dest = vecA;
        dest[0] = vecA[0] * scalar;
        dest[1] = vecA[1] * scalar;
        return dest;
    };
    vec2.dist = function (vecA, vecB) {
        var x = vecB[0] - vecA[0],
            y = vecB[1] - vecA[1];
        return Math.sqrt(x*x + y*y);
    };
    vec2.set = function (vec, dest) {
        dest[0] = vec[0];
        dest[1] = vec[1];
        return dest;
    };
    vec2.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON
        );
    };
    vec2.negate = function (vec, dest) {
        if (!dest) { dest = vec; }
        dest[0] = -vec[0];
        dest[1] = -vec[1];
        return dest;
    };
    vec2.normalize = function (vec, dest) {
        if (!dest) { dest = vec; }
        var mag = vec[0] * vec[0] + vec[1] * vec[1];
        if (mag > 0) {
            mag = Math.sqrt(mag);
            dest[0] = vec[0] / mag;
            dest[1] = vec[1] / mag;
        } else {
            dest[0] = dest[1] = 0;
        }
        return dest;
    };
    vec2.cross = function (vecA, vecB, dest) {
        var z = vecA[0] * vecB[1] - vecA[1] * vecB[0];
        if (!dest) return z;
        dest[0] = dest[1] = 0;
        dest[2] = z;
        return dest;
    };
    vec2.length = function (vec) {
      var x = vec[0], y = vec[1];
      return Math.sqrt(x * x + y * y);
    };
    vec2.squaredLength = function (vec) {
      var x = vec[0], y = vec[1];
      return x * x + y * y;
    };
    vec2.dot = function (vecA, vecB) {
        return vecA[0] * vecB[0] + vecA[1] * vecB[1];
    };
    vec2.direction = function (vecA, vecB, dest) {
        if (!dest) { dest = vecA; }
        var x = vecA[0] - vecB[0],
            y = vecA[1] - vecB[1],
            len = x * x + y * y;
        if (!len) {
            dest[0] = 0;
            dest[1] = 0;
            dest[2] = 0;
            return dest;
        }
        len = 1 / Math.sqrt(len);
        dest[0] = x * len;
        dest[1] = y * len;
        return dest;
    };
    vec2.lerp = function (vecA, vecB, lerp, dest) {
        if (!dest) { dest = vecA; }
        dest[0] = vecA[0] + lerp * (vecB[0] - vecA[0]);
        dest[1] = vecA[1] + lerp * (vecB[1] - vecA[1]);
        return dest;
    };
    vec2.str = function (vec) {
        return '[' + vec[0] + ', ' + vec[1] + ']';
    };
    var mat2 = {};
    mat2.create = function(src) {
        var dest = new MatrixArray(4);
        if (src) {
            dest[0] = src[0];
            dest[1] = src[1];
            dest[2] = src[2];
            dest[3] = src[3];
        } else {
            dest[0] = dest[1] = dest[2] = dest[3] = 0;
        }
        return dest;
    };
    mat2.createFrom = function (m00, m01, m10, m11) {
        var dest = new MatrixArray(4);
        dest[0] = m00;
        dest[1] = m01;
        dest[2] = m10;
        dest[3] = m11;
        return dest;
    };
    mat2.set = function (mat, dest) {
        dest[0] = mat[0];
        dest[1] = mat[1];
        dest[2] = mat[2];
        dest[3] = mat[3];
        return dest;
    };
    mat2.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON &&
            Math.abs(a[3] - b[3]) < FLOAT_EPSILON
        );
    };
    mat2.identity = function (dest) {
        if (!dest) { dest = mat2.create(); }
        dest[0] = 1;
        dest[1] = 0;
        dest[2] = 0;
        dest[3] = 1;
        return dest;
    };
    mat2.transpose = function (mat, dest) {
        if (!dest || mat === dest) {
            var a00 = mat[1];
            mat[1] = mat[2];
            mat[2] = a00;
            return mat;
        }
        dest[0] = mat[0];
        dest[1] = mat[2];
        dest[2] = mat[1];
        dest[3] = mat[3];
        return dest;
    };
    mat2.determinant = function (mat) {
      return mat[0] * mat[3] - mat[2] * mat[1];
    };
    mat2.inverse = function (mat, dest) {
        if (!dest) { dest = mat; }
        var a0 = mat[0], a1 = mat[1], a2 = mat[2], a3 = mat[3];
        var det = a0 * a3 - a2 * a1;
        if (!det) return null;
        det = 1.0 / det;
        dest[0] = a3 * det;
        dest[1] = -a1 * det;
        dest[2] = -a2 * det;
        dest[3] = a0 * det;
        return dest;
    };
    mat2.multiply = function (matA, matB, dest) {
        if (!dest) { dest = matA; }
        var a11 = matA[0],
            a12 = matA[1],
            a21 = matA[2],
            a22 = matA[3];
        dest[0] = a11 * matB[0] + a12 * matB[2];
        dest[1] = a11 * matB[1] + a12 * matB[3];
        dest[2] = a21 * matB[0] + a22 * matB[2];
        dest[3] = a21 * matB[1] + a22 * matB[3];
        return dest;
    };
    mat2.rotate = function (mat, angle, dest) {
        if (!dest) { dest = mat; }
        var a11 = mat[0],
            a12 = mat[1],
            a21 = mat[2],
            a22 = mat[3],
            s = Math.sin(angle),
            c = Math.cos(angle);
        dest[0] = a11 * c + a12 * s;
        dest[1] = a11 * -s + a12 * c;
        dest[2] = a21 * c + a22 * s;
        dest[3] = a21 * -s + a22 * c;
        return dest;
    };
    mat2.multiplyVec2 = function(matrix, vec, dest) {
      if (!dest) dest = vec;
      var x = vec[0], y = vec[1];
      dest[0] = x * matrix[0] + y * matrix[1];
      dest[1] = x * matrix[2] + y * matrix[3];
      return dest;
    };
    mat2.scale = function(matrix, vec, dest) {
      if (!dest) { dest = matrix; }
      var a11 = matrix[0],
          a12 = matrix[1],
          a21 = matrix[2],
          a22 = matrix[3],
          b11 = vec[0],
          b22 = vec[1];
      dest[0] = a11 * b11;
      dest[1] = a12 * b22;
      dest[2] = a21 * b11;
      dest[3] = a22 * b22;
      return dest;
    };
    mat2.str = function (mat) {
        return '[' + mat[0] + ', ' + mat[1] + ', ' + mat[2] + ', ' + mat[3] + ']';
    };
    var vec4 = {};
    vec4.create = function(vec) {
        var dest = new MatrixArray(4);
        if (vec) {
            dest[0] = vec[0];
            dest[1] = vec[1];
            dest[2] = vec[2];
            dest[3] = vec[3];
        } else {
            dest[0] = 0;
            dest[1] = 0;
            dest[2] = 0;
            dest[3] = 0;
        }
        return dest;
    };
    vec4.createFrom = function (x, y, z, w) {
        var dest = new MatrixArray(4);
        dest[0] = x;
        dest[1] = y;
        dest[2] = z;
        dest[3] = w;
        return dest;
    };
    vec4.add = function(vecA, vecB, dest) {
      if (!dest) dest = vecB;
      dest[0] = vecA[0] + vecB[0];
      dest[1] = vecA[1] + vecB[1];
      dest[2] = vecA[2] + vecB[2];
      dest[3] = vecA[3] + vecB[3];
      return dest;
    };
    vec4.subtract = function(vecA, vecB, dest) {
      if (!dest) dest = vecB;
      dest[0] = vecA[0] - vecB[0];
      dest[1] = vecA[1] - vecB[1];
      dest[2] = vecA[2] - vecB[2];
      dest[3] = vecA[3] - vecB[3];
      return dest;
    };
    vec4.multiply = function(vecA, vecB, dest) {
      if (!dest) dest = vecB;
      dest[0] = vecA[0] * vecB[0];
      dest[1] = vecA[1] * vecB[1];
      dest[2] = vecA[2] * vecB[2];
      dest[3] = vecA[3] * vecB[3];
      return dest;
    };
    vec4.divide = function(vecA, vecB, dest) {
      if (!dest) dest = vecB;
      dest[0] = vecA[0] / vecB[0];
      dest[1] = vecA[1] / vecB[1];
      dest[2] = vecA[2] / vecB[2];
      dest[3] = vecA[3] / vecB[3];
      return dest;
    };
    vec4.scale = function(vecA, scalar, dest) {
      if (!dest) dest = vecA;
      dest[0] = vecA[0] * scalar;
      dest[1] = vecA[1] * scalar;
      dest[2] = vecA[2] * scalar;
      dest[3] = vecA[3] * scalar;
      return dest;
    };
    vec4.set = function (vec, dest) {
        dest[0] = vec[0];
        dest[1] = vec[1];
        dest[2] = vec[2];
        dest[3] = vec[3];
        return dest;
    };
    vec4.equal = function (a, b) {
        return a === b || (
            Math.abs(a[0] - b[0]) < FLOAT_EPSILON &&
            Math.abs(a[1] - b[1]) < FLOAT_EPSILON &&
            Math.abs(a[2] - b[2]) < FLOAT_EPSILON &&
            Math.abs(a[3] - b[3]) < FLOAT_EPSILON
        );
    };
    vec4.negate = function (vec, dest) {
        if (!dest) { dest = vec; }
        dest[0] = -vec[0];
        dest[1] = -vec[1];
        dest[2] = -vec[2];
        dest[3] = -vec[3];
        return dest;
    };
    vec4.length = function (vec) {
      var x = vec[0], y = vec[1], z = vec[2], w = vec[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    vec4.squaredLength = function (vec) {
      var x = vec[0], y = vec[1], z = vec[2], w = vec[3];
      return x * x + y * y + z * z + w * w;
    };
    vec4.lerp = function (vecA, vecB, lerp, dest) {
        if (!dest) { dest = vecA; }
        dest[0] = vecA[0] + lerp * (vecB[0] - vecA[0]);
        dest[1] = vecA[1] + lerp * (vecB[1] - vecA[1]);
        dest[2] = vecA[2] + lerp * (vecB[2] - vecA[2]);
        dest[3] = vecA[3] + lerp * (vecB[3] - vecA[3]);
        return dest;
    };
    vec4.str = function (vec) {
        return '[' + vec[0] + ', ' + vec[1] + ', ' + vec[2] + ', ' + vec[3] + ']';
    };
    if(root) {
        root.glMatrixArrayType = MatrixArray;
        root.MatrixArray = MatrixArray;
        root.setMatrixArrayType = setMatrixArrayType;
        root.determineMatrixArrayType = determineMatrixArrayType;
        root.glMath = glMath;
        root.vec2 = vec2;
        root.vec3 = vec3;
        root.vec4 = vec4;
        root.mat2 = mat2;
        root.mat3 = mat3;
        root.mat4 = mat4;
        root.quat4 = quat4;
    }
    return {
        glMatrixArrayType: MatrixArray,
        MatrixArray: MatrixArray,
        setMatrixArrayType: setMatrixArrayType,
        determineMatrixArrayType: determineMatrixArrayType,
        glMath: glMath,
        vec2: vec2,
        vec3: vec3,
        vec4: vec4,
        mat2: mat2,
        mat3: mat3,
        mat4: mat4,
        quat4: quat4
    };
}));
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
 function __error(message, file, line) {
  throw new Error(message + "(" + file + ":" + line + ")");
 }
function Id(id) {
 "use strict";
 this.asNumber = function() {
  return id;
 };
 this.asColor = function() {
  var r,g,b;
  b = (id % 128) / 128;
  g = ((id >> 7) % 128) / 128;
  r = ((id >> 14) % 128) / 128;
  return [r,g,b];
 };
};
Id.fromColor = function (r,g,b) {
 "use strict";
 var id = 0;
 id += b >> 1;
 id += (g >> 1) * 128;
 id += (r >> 1) * (128 * 128);
 return new Id(id);
};
Id.Generator = function() {
 "use strict";
 var id = 1;
 this.reset = function() {
  id = 1;
 };
 this.next = function() {
  return new Id(id++);
 };
}
var Cube = (function() {
 var tmpvector = vec3.create();
 function Statemachine(cube) {
  "use strict";
  var speed = 2.0;
  var state = 0;
  var grid = cube.grid;
  var direction = vec3.create();
  var startpos = vec3.create();
  var blingoffset = 0.0;
  var movetime = 0;
  this.tick = function(time) {
   switch(state) {
    case 0:
    break;
    case 2:
    cube.bling = 0.618 * Math.sin(2.0 * Math.PI * (time.total - blingoffset));
    break;
    case 1:
    vec3.add(cube.vector, vec3.scale(direction, time.delta * speed, tmpvector));
    movetime += time.delta * speed;
    if(movetime >= 1) {
     state = 0;
     vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector);
     movetime = 0.0;
     cube.bling = 0;
    }
    break;
    default:
    console.error("ERROR (" + "src/cube.js" + ":" + 51 + ")", "unknow state.", state );
    break;
   }
  };
  this.tap = function(time, dir) {
   do { if(!(time.delta instanceof Number) && !("Number".toLowerCase() === typeof time.delta)) { __error("Objct " + "time.delta" + " is not from type " + "Number", "src/cube.js", 57); } } while(false);
   do { if(!(dir instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof dir)) { __error("Objct " + "dir" + " is not from type " + "Float32Array", "src/cube.js", 58); } } while(false);
   do { if(!(Math.abs((vec3.length(dir) - 1.0)) < 0.0001)) { __error("assertion failed: " + "Math.abs((vec3.length(dir) - 1.0)) < 0.0001" + " = " + (Math.abs((vec3.length(dir) - 1.0)) < 0.0001), "src/cube.js", 59); } } while(false);
   switch(state) {
    case 0:
    state = 2;
    break;
    case 1:
    break;
    case 2:
    blingoffset = time.total;
    direction = dir;
    vec3.set(cube.vector, startpos);
    cube.bling = 0;
    movetime = 0.0;
    state = 1;
    break;
    default:
    console.error("ERROR (" + "src/cube.js" + ":" + 79 + ")", "unknow state.", state );
    break;
   }
  };
 }
 return function(position, id) {
  do { if(typeof (position . x) === "undefined") { __error("No property " + "x" + " in " + "position", "src/cube.js", 86); } } while(false);
  do { if(typeof (position . y) === "undefined") { __error("No property " + "y" + " in " + "position", "src/cube.js", 87); } } while(false);
  do { if(typeof (position . z) === "undefined") { __error("No property " + "z" + " in " + "position", "src/cube.js", 88); } } while(false);
  do { if(!(id instanceof Id) && !("Id".toLowerCase() === typeof id)) { __error("Objct " + "id" + " is not from type " + "Id", "src/cube.js", 89); } } while(false);
  var vect = vec3.create([position.x, position.y, position.z]);
  this.grid = [position.x, position.y, position.z];
  this.id = id;
  this.vector = vect;
  this.bling = 0;
  var state = new Statemachine(this);
  this.tap = function(info, dir) {
   state.tap(info, dir);
  };
  this.tick = function(info) {
   state.tick(info);
  };
 };
}());
var Sphere = (function() {
 var tmpvector = vec3.create();
 function Statemachine(sphere) {
  "use strict";
  var speed = 2.0;
  var state = 0;
  var direction = vec3.create();
  var startpos = vec3.create();
  var movetime = 0;
  this.tick = function(time) {
   switch(state) {
    case 0:
    break;
    case 1:
    vec3.add(sphere.position, vec3.scale(direction, time.delta * speed, tmpvector));
    movetime += time.delta * speed;
    if(movetime >= 1) {
     state = 0;
     vec3.set(vec3.add(startpos, direction, tmpvector), sphere.position);
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
   do { if(!(Math.abs((vec3.length(dir) - 1.0)) < 0.0001)) { __error("assertion failed: " + "Math.abs((vec3.length(dir) - 1.0)) < 0.0001" + " = " + (Math.abs((vec3.length(dir) - 1.0)) < 0.0001), "src/sphere.js", 50); } } while(false);
   switch(state) {
    case 1:
    break;
    case 0:
    vec3.set(dir, direction);
    vec3.set(sphere.position, startpos);
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
  this.position = vec3.create([position.x, position.y, position.z]);
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
(function() {
"use strict";
function Statemachine(canvas, cameraPos, cameraDir) {
 do { if(!(cameraPos instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof cameraPos)) { __error("Objct " + "cameraPos" + " is not from type " + "Float32Array", "src/statemachine.js", 21); } } while(false);
 do { if(!(cameraDir instanceof Float32Array) && !("Float32Array".toLowerCase() === typeof cameraDir)) { __error("Objct " + "cameraDir" + " is not from type " + "Float32Array", "src/statemachine.js", 22); } } while(false);
 do { if(!(cameraPos.length === 3)) { __error("assertion failed: " + "cameraPos.length === 3" + " = " + (cameraPos.length === 3), "src/statemachine.js", 23); } } while(false);
 do { if(!(cameraDir.length === 3)) { __error("assertion failed: " + "cameraDir.length === 3" + " = " + (cameraDir.length === 3), "src/statemachine.js", 24); } } while(false);
 var speed = 2.0;
 var DRAGDIST = 100;
 var state = 0;
 var markedCube = null;
 var blingoffset = 0.0;
 var direction = vec3.create();
 var tmpvector = vec3.create();
 var tmpmatrix = mat4.create();
 var dragStartPosition = { x : 0, y : 0 };
 var diceSide = 0;
 function markCube(obj) {
  do { if(typeof (obj . cube) === "undefined") { __error("No property " + "cube" + " in " + "obj", "src/statemachine.js", 39); } } while(false);
  if(obj.cube !== null) {
   do { if(!(obj.cube instanceof Cube) && !("Cube".toLowerCase() === typeof obj.cube)) { __error("Objct " + "obj.cube" + " is not from type " + "Cube", "src/statemachine.js", 41); } } while(false);
   obj.cube.bling = 0.0;
  }
  if(markedCube !== null) {
   markedCube.bling = 0.0;
  }
  markedCube = obj.cube;
  do { if(typeof (obj . info) === "undefined") { __error("No property " + "info" + " in " + "obj", "src/statemachine.js", 50); } } while(false);
  do { if(typeof (obj.info . time) === "undefined") { __error("No property " + "time" + " in " + "obj.info", "src/statemachine.js", 51); } } while(false);
  markedTime = obj.time.total;
 }
 function hasCube(obj) {
  do { if(typeof (obj . cube) === "undefined") { __error("No property " + "cube" + " in " + "obj", "src/statemachine.js", 57); } } while(false);
  if(obj.cube !== null) {
   do { if(!(obj.cube instanceof Cube) && !("Cube".toLowerCase() === typeof obj.cube)) { __error("Objct " + "obj.cube" + " is not from type " + "Cube", "src/statemachine.js", 59); } } while(false);
   return true;
  }
  return false;
 }
 function transaction(trans, obj) {
  switch(state) {
   case 0:
   state = stateNone(trans, obj);
   break;
   case 2:
   state = stateCubeMarked(trans, obj);
   break;
   case 3:
   state = stateCubeDrag(trans, obj);
   break;
   case 4:
   state = stateCubeMove(trans, obj);
   break;
   case 1:
   state = stateSkyDrag(trans, obj);
   break;
   default:
   do { if(!(false && ("unknown transaction " + trans))) { __error("assertion failed: " + "false && (\"unknown transaction \" + trans)" + " = " + (false && ("unknown transaction " + trans)), "src/statemachine.js", 88); } } while(false);
   break;
  }
 }
 function stateNone(trans, obj) {
  switch(trans) {
   case 0:
   if(hasCube(obj)) {
    markCube(obj);
    return 2;
   }
   break;
   case 1:
   case 2:
   if(hasCube(obj)) {
    markCube(obj);
    return 3;
   }
   else {
    return 1;
   }
  }
  return 0;
 }
 function stateCubeMarked(trans, obj) {
  switch(trans) {
   case 0:
   if(hasCube(obj)) {
    if(markedCube === obj.cube) {
     markedcube.bling = 0.0;
     return 4;
    }
    markCube(obj);
    return 2;
   }
   return 0;
   break;
   case 1:
   case 2:
   if(hasCube(obj)) {
    if(obj.cube === markedCube) {
     return 3;
    }
    markCube(obj);
   }
   return 2;
   break;
   case 4:
   do { if(typeof (obj . info) === "undefined") { __error("No property " + "info" + " in " + "obj", "src/statemachine.js", 144); } } while(false);
   markedCube.bling = (1.0 + Math.sin(markedTime - info.time.total) ) / 2.0;
   return 2;
   break;
  }
  return 2;
 }
 function stateCubeDrag(trans, obj) {
  switch(trans) {
   case 0:
   return stateCubeMarked(0, obj);
   break;
   case 1:
   return 3;
   break;
   case 3:
   return 0;
   break;
  }
  return 3;
 }
 function stateCubeMove(trans, obj) {
  switch(trans, obj) {
   case 4:
   do { if(typeof (obj . info) === "undefined") { __error("No property " + "info" + " in " + "obj", "src/statemachine.js", 175); } } while(false);
   var cube = markedCube;
   var info = obj.info;
   vec3.add(cube.vector, vec3.scale(direction, info.time.delta * speed, tmpvector));
   movetime += info.time.delta * speed;
   if(movetime >= 1) {
    vec3.set(vec3.add(startpos, direction, tmpvector), cube.vector);
    movetime = 0.0;
    cube.bling = 0;
    return 0;
   }
   break;
  }
  return 4;
 }
 function stateSkyDrag(trans, obj) {
  switch(trans) {
   case 1:
   case 2:
   var rot = mat4.identity(tmpmatrix);
   var negDir = vec3.create(cameraDir);
   vec3.scale(negDir, -1);
   mat4.translate(rot, negDir);
   mat4.rotateY(rot, (-2 * Math.PI * dragEvent.distanceX / canvas.width) / 50);
   mat4.translate(rot, cameraDir);
   mat4.multiplyVec3(rot, cameraPos);
   return 1;
   break;
   case 0:
   return stateNone(trans, obj);
   break;
   case 4:
   break;
   case 3:
   return 0;
   break;
  }
  return 1;
 }
 this.tap = function(info, obj) {
  var oldstate = state;
  transaction(0, obj);
  console.log("DEBUG (" + "src/statemachine.js" + ":" + 229 + ")", "Tap",oldstate,"->",state );
 };
 this.dragStart = function(info, obj) {
  var oldstate = state;
  transaction(2, obj);
  console.log("DEBUG (" + "src/statemachine.js" + ":" + 235 + ")", "DragStart",oldstate,"->",state );
 };
 this.drag = function(info, obj) {
  var oldstate = state;
  transaction(1, obj);
  console.log("DEBUG (" + "src/statemachine.js" + ":" + 241 + ")", "Drag",oldstate,"->",state );
 };
 this.dragEnd = function(info, obj) {
  var oldstate = state;
  transaction(3, obj);
  console.log("DEBUG (" + "src/statemachine.js" + ":" + 247 + ")", "DragEnd",oldstate,"->",state );
 };
 this.tick = function(info, obj) {
  var oldstate = state;
  transaction(4, obj);
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
var Map = {
 "OUT_OF_BOUNDS" : -1,
 "AIR" : 0,
 "CUBE" : 1,
 "START" : 2,
 "GOAL" : 3
};
Map.create = function (seed, DIMENSION) {
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
 var startingPosition = { x : (DIMENSION/2) | 0, y : (DIMENSION/2) | 0, z : (DIMENSION/2) | 0 };
 var path = [];
 function clearField() {
  field = [];
  for(var x = DIMENSION; x--;) {
   field[x] = [];
   for(var y = DIMENSION; y--;) {
    field[x][y] = [];
    for(var z = DIMENSION; z--;) {
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
  if(x<0 || y<0 || z<0 || x>= DIMENSION || y>=DIMENSION || z>=DIMENSION) {
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
  var steps = 3 + rand.next() % (DIMENSION - 3);
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
  } while(!fillRec(rand, startingPosition, 13, 0, -1));
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
var idprogram;
var cubeBuffer;
var sphereBuffer;
var skyBuffer;
var borderBuffer;
var map;
var funkycube = new Funkycube();
var canvas = document.getElementsByTagName("canvas")[0];
var gl = GLT.createContext(canvas);
var projection = mat4.perspective(60, 4/3, 0.1, 1000);
var cameraPos = vec3.create();
var cameraDir = vec3.create();
var cameraUp = vec3.create([0,1,0]);
var camera = mat4.identity();
var tmpmatrix = mat4.create();
var cubetex = null;
var skytex = null;
var asisX = vec3.create([1,0,0]);
var asisY = vec3.create([0,1,0]);
var asisZ = vec3.create([0,0,1]);
var cameraRotX = 0;
var cameraRotY = 0;
var cameraRotZ = 0;
var cubeNormals = [
 vec3.create([ 0, 0, 0]),
 vec3.create([ 1, 0, 0]),
 vec3.create([ 0, 1, 0]),
 vec3.create([ 0, 0, 1]),
 vec3.create([ 0, 0,-1]),
 vec3.create([ 0,-1, 0]),
 vec3.create([-1, 0, 0])
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
 vec3.add(cameraDir, cameraPos, cameraWorldPos);
 mat4.lookAt(cameraWorldPos, cameraDir, cameraUp, camera);
}
function spinHorz(angle) {
 var q = quat4.fromAngleAxis(angle, cameraUp);
 quat4.multiplyVec3(q, cameraPos);
 recalcCamera();
}
function spinVert(angle) {
 var tmpvec = tmpmatrix;
 var camHorz = vec3.normalize( vec3.cross(cameraUp, cameraPos, tmpvec) );
 var q = quat4.fromAngleAxis(angle, camHorz);
 quat4.multiplyVec3(q, cameraPos);
 vec3.normalize( vec3.cross( cameraPos, camHorz, cameraUp ) );
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
 var asisXMinus = vec3.create([-1,0,0]);
 var asisYMinus = vec3.create([0,-1,0]);
 var asisZMinus = vec3.create([0,0,-1]);
 var vectorNormals = [
  asisX,
  asisXMinus,
  asisY,
  asisYMinus,
  asisZ,
  asisZMinus
 ];
 var cam = vec3.create();
 var div = vec3.create();
 return function(camPos) {
  vec3.set(camPos, cam);
  console.log("DEBUG (" + "src/main.js" + ":" + 209 + ")", "Pos", camPos );
  vec3.normalize(cam);
  var lastLength = 99999;
  var lastIndex = -1;
  for(var i = 0; i !== 6; i++) {
   var current = vectorNormals[i];
   vec3.subtract(cam, current, div);
   var length = vec3.length(div);
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
  console.log("DEBUG (" + "src/main.js" + ":" + 243 + ")", dir );
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
function getCubeById(id) {
 for(var i = 0; i != cubelist.length; i++) {
  var object = cubelist[i];
  if(object.id.asNumber() === id) {
   return object;
  }
 }
 console.error("ERROR (" + "src/main.js" + ":" + 281 + ")", "id", id, "not found." );
 return null;
}
function drawCubes(program) {
 gl.useProgram(program);
 var uModelviewprojection = gl.getUniformLocation(program, "uModelviewprojection");
 var uIdColor = gl.getUniformLocation(program, "uIdColor");
 var uTexture = gl.getUniformLocation(program, "uTexture");
 var uBling = gl.getUniformLocation(program, "uBling");
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
  if(uIdColor) {
   gl.uniform3fv(uIdColor, object.id.asColor());
  }
  if(uBling) {
   gl.uniform1f(uBling, object.bling);
  }
  mat4.multiply(projection, camera, modelviewprojection);
  mat4.translate(modelviewprojection, object.vector);
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
 mat4.multiply(projection, camera, modelviewprojection);
 mat4.translate(modelviewprojection, sphere.position);
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
 mat4.multiply(projection, camera, modelviewprojection);
 mat4.translate(modelviewprojection, cameraDir);
 mat4.translate(modelviewprojection, cameraPos);
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
 mat4.multiply(projection, camera, modelviewprojection);
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
 "files" : ["cube.obj", "sphere.obj", "diffuse.shader", "id.shader", "cube.png", "skybox3.obj", "border.shader", "map1.json"],
 "error" : function(file, err) {
  console.error("ERROR (" + "src/main.js" + ":" + 458 + ")", file, err );
 },
 "finished" : function(files) {
  cube = files["cube.obj"];
  sky = files["skybox3.obj"];
  sphereData = files["sphere.obj"];
  program = GLT.shader.compileProgram(gl,files["diffuse.shader"]);
  idprogram = GLT.shader.compileProgram(gl,files["id.shader"]);
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
  var idgen = new Id.Generator();
  for(var x = 0; x !== 16; x++)
   for(var y = 0; y !== 16; y++)
    for(var z = 0; z !== 16; z++) {
     var obj = map.getObject(x,y,z);
     if(obj === Map.CUBE) {
      cubelist.push( new Cube({x : x, y : y, z : z}, idgen.next()) );
     }
    }
  cameraDir[0] = 8;
  cameraDir[1] = 8;
  cameraDir[2] = 8;
  sphere = new Sphere({ x : cameraDir[0], y : cameraDir[1], z : cameraDir[2] });
  vec3.set(cameraDir, cameraPos);
  cameraPos[0] = 0;
  cameraPos[1] = 0;
  cameraPos[2] = 20;
  setup();
  recalcCamera();
  GLT.requestGameFrame(gameloop);
 }
});
console.log("DEBUG (" + "src/main.js" + ":" + 547 + ")", "DEBUG Build:", "Sep  6 2012", "19:35:07" );
