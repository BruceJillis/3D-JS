function Matrix( k, n, elements ) {
	this.k = k;
	this.n = n;
	this.matrix = elements;		
}

Matrix.prototype.mmultiply = function( other ) {
	var mat = new Array(other.k);

	for( var i = 0; i < this.n; i++ ) {
		mat[i] = new Array(other.n);
		for( var j = 0; j < other.n; j++ ) {
			mat[i][j] = 0;
			for( var m = 0; m < other.k; m++ ) 
				mat[i][j] += this.matrix[i][m] * other.matrix[m][j];

		}
	}
	return new Matrix( this.n, other.n, mat);
}

Matrix.prototype.vmultiply = function( other ) {
	var xx, yy, zz;
	xx = other.x * this.matrix[0][0] +
		 other.y * this.matrix[0][1] +
		 other.z * this.matrix[0][2] +
				   this.matrix[0][3];

	yy = other.x * this.matrix[1][0] +
		 other.y * this.matrix[1][1] +
		 other.z * this.matrix[1][2] +
					 this.matrix[1][3];

	zz = other.x * this.matrix[2][0] +
		 other.y * this.matrix[2][1] +
		 other.z * this.matrix[2][2] +
					 this.matrix[2][3];

	return new Point(xx, yy, zz);
}

identity = new Matrix( 4, 4, [
	[1,0,0,0],
	[0,1,0,0],
	[0,0,1,0],
	[0,0,0,1]
]);

translation = function( Tx, Ty, Tz ) {
	return new Matrix( 4, 4, [
		[1,0,0,Tx],
		[0,1,0,Ty],
		[0,0,1,Tz],
		[0,0,0,1]
	]);
}

scaling = function( Sx, Sy, Sz ) {
	return new Matrix( 4, 4, [
		[Sx,0,0,0],
		[0,Sy,0,0],
		[0,0,Sz,0],
		[0,0,0,1]
	]);
}

xrot = function( Rx, Ry, Rz ) {
	cx = Math.cos(Rx);
	sx = Math.sin(Rx);
	return new Matrix( 4, 4, [
		[1,0,0,0],
		[0,cx,-sx,0],
		[0,sx,cx,0],
		[0,0,0,1]
	]);
}

yrot = function( Rx, Ry, Rz ) {
	cy = Math.cos(Ry);
	sy = Math.sin(Ry);
	return new Matrix( 4, 4, [
		[cy,0,sy,0],
		[0,1,0,0],
		[-sy,0,cy,0],
		[0,0,0,1]
	]);
}

zrot = function( Rx, Ry, Rz ) {
	cz = Math.cos(Rz);
	sz = Math.sin(Rz);
	return new Matrix( 4, 4, [
		[cz,-sz,0,0],
		[sz,cz,0,0],
		[0,0,1,0],
		[0,0,0,1]
	]);
}