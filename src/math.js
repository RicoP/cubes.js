#ifndef MATH_JS 
#define MATH_JS 

var MatrixArray = Float32Array; 

//Borrowed from gl-matrix.js 

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


//function mat4createFrom(){}

//function mat4set(){}

//function mat4equal(){}

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

//function mat4transpose(){}

//function mat4determinant(){}

//function mat4inverse(){}

//function mat4toRotationMat(){}

//function mat4toMat3(){}

//function mat4toInverseMat3(){}

function mat4multiply (mat, mat2, dest) {
	if (!dest) { dest = mat; }

	// Cache the matrix values (makes for huge speed increases!)
	var a00 = mat[ 0], a01 = mat[ 1], a02 = mat[ 2], a03 = mat[3];
	var a10 = mat[ 4], a11 = mat[ 5], a12 = mat[ 6], a13 = mat[7];
	var a20 = mat[ 8], a21 = mat[ 9], a22 = mat[10], a23 = mat[11];
	var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];

	// Cache only the current line of the second matrix
	var b0  = mat2[0], b1 = mat2[1], b2 = mat2[2], b3 = mat2[3];  
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



//function mat4multiplyVec4(){}

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


//function mat4scale(){}

//function mat4rotate(){}

//function mat4rotateX(){}

//function mat4rotateY(){}

//function mat4rotateZ(){}

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



//function mat4ortho(){}

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

	//vec3.direction(eye, center, z);
	z0 = eyex - centerx;
	z1 = eyey - centery;
	z2 = eyez - centerz;

	// normalize (no check needed for 0 because of early return)
	len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;

	//vec3.normalize(vec3.cross(up, z, x));
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

	//vec3.normalize(vec3.cross(z, x, y));
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


//function mat4fromRotationTranslation(){}

//function mat4str(){}

//function vec4create(){}

//function vec4createFrom(){}

//function vec4add(){}

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


//function vec4multiply(){}

//function vec4divide(){}

//function vec4scale(){}

function vec3set(vec, dest) {
        dest[0] = vec[0];
        dest[1] = vec[1];
        dest[2] = vec[2];

        return dest;
    };


//function vec4equal(){}

//function vec4negate(){}

//function vec4length(){}

//function vec4squaredLength(){}

//function vec4lerp(){}

//function vec4str(){}

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



//function vec3createFrom(){}

//function vec3set(){}

//function vec3equal(){}

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


//function vec3subtract(){}

//function vec3multiply(){}

//function vec3negate(){}

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


//function vec3squaredLength(){}

//function vec3dot(){}

//function vec3direction(){}

//function vec3lerp(){}

//function vec3dist(){}

//function vec3unproject(){}

//function vec3rotationTo(){}

//function vec3str(){}

//function quat4create(){}

//function quat4createFrom(){}

//function quat4set(){}

//function quat4equal(){}

//function quat4identity(){}

//function quat4calculateW(){}

//function quat4dot(){}

//function quat4inverse(){}

//function quat4conjugate(){}

//function quat4length(){}

//function quat4normalize(){}

//function quat4add(){}

//function quat4multiply(){}

function quat4multiplyVec3(quat, vec, dest) {
        if (!dest) { dest = vec; }

        var x = vec[0], y = vec[1], z = vec[2],
            qx = quat[0], qy = quat[1], qz = quat[2], qw = quat[3],

            // calculate quat * vec
            ix = qw * x + qy * z - qz * y,
            iy = qw * y + qz * x - qx * z,
            iz = qw * z + qx * y - qy * x,
            iw = -qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        dest[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;

        return dest;
    };


//function quat4scale(){}

//function quat4toMat3(){}

//function quat4toMat4(){}

//function quat4slerp(){}

//function quat4fromRotationMatrix(){}

//function quat4fromAxes(){}

function quat4fromAngleAxis(angle, axis, dest) {
        // The quaternion representing the rotation is
        //   q = cos(A/2)+sin(A/2)*(x*i+y*j+z*k)
        if (!dest) dest = new MatrixArray(4); 
        
        var half = angle * 0.5;
        var s = Math.sin(half);
        dest[3] = Math.cos(half);
        dest[0] = s * axis[0];
        dest[1] = s * axis[1];
        dest[2] = s * axis[2];
        
        return dest;
    };


//function quat4toAngleAxis(){}

//function quat4str(){}

#endif 
