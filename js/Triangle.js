function Triangle(a,b,c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype.normal = function(parent) {
	dab = parent.vertices[this.a].subtract(parent.vertices[this.b]);
	dcb = parent.vertices[this.c].subtract(parent.vertices[this.b]);
	return dab.cross(dcb);
}