function Point(x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.rgb = 'rgb(0,0,0)';
}

Point.prototype.color = function( r, g, b ) {
	this.rgb = 'rgb('+r+','+g+','+b+')';
}

Point.prototype.distance = function( p ) {
	dx = this.x - p.x;
	dy = this.y - p.y;
	dz = this.z - p.z;
	return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

Point.prototype.dot = function( p ) {
	dx = this.x * p.x;
	dy = this.y * p.y;
	dz = this.z * p.z;
	return dx+dy+dz;
}

Point.prototype.add = function( p ) {
	nx = this.x + p.x;
	ny = this.y + p.y;
	nz = this.z + p.z;
	return new Point(nx, ny, nz);
}

Point.prototype.subtract = function( p ) {
	nx = this.x - p.x;
	ny = this.y - p.y;
	nz = this.z - p.z;
	return new Point(nx, ny, nz);
}

Point.prototype.cross = function( p ) {
	a = (this.y*p.z) - (this.z*p.y);
	b = (this.z*p.x) - (this.x*p.z);
	c = (this.x*p.y) - (this.y*p.x);
	return new Point(a,b,c);
}

Point.prototype.length = function( p ) {
	return Math.sqrt(p.x*p.x + p.y*p.y + p.z*p.z);
}

Point.prototype.string = function() {
	return '( ' + this.x + ', ' + this.y + ', ' + this.z + ')';
}