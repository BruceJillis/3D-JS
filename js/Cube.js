w=0.5; h=0.5; d=0.5;

verts = [
	new Point(-w, -h, d),
	new Point( w, -h, d),
	new Point( w, -h, -d),
	new Point(-w, -h, -d),
	new Point(-w,  h, d),
	new Point( w,  h, d),
	new Point( w,  h, -d),
	new Point(-w,  h, -d)
];

tris = [
	new Triangle(0,5,1),
	new Triangle(0,4,5),

	new Triangle(2,6,1),
	new Triangle(6,5,1),

	new Triangle(3,7,2),
	new Triangle(7,6,2),

	new Triangle(3,4,7),
	new Triangle(3,0,4),

	new Triangle(7,4,5),
	new Triangle(7,5,6),

	new Triangle(2,3,1),
	new Triangle(1,3,2)
];

cube = new Object( verts, tris );