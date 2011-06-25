w=0.5; h=0.5; d=0.5;

verts = [
	new Point(-w, -h, d),
	new Point( w, h, d),
	new Point( w, h, -d),
	new Point(-w, -h, -d),
	new Point(0,  h, 0),
];

tris = [
	new Triangle(0,1,2),
	new Triangle(0,3,2),
	new Triangle(3,3,3),
];

pyra = new Object( verts, tris );