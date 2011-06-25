function Object( verts, tris ) {
	this.vertices  = verts;
	this.triangles = tris;
}

Object.prototype.translate = function(x,y,z) {
	tr = translation(x,y,z);
	return this.multiply(tr);
}

Object.prototype.scale = function(x,y,z) {
	sr = scaling(x,y,z);
	return this.multiply(sr);
}

Object.prototype.multiply = function(matrix) {
	vs = [];

	for( var i = 0; i < this.vertices.length; i++ ) 
		vs[i] = matrix.vmultiply(this.vertices[i]);
	
	no = new Object( vs, this.triangles );
	no.update = this.update;
	return no;
}