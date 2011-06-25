function Engine(canvas) {
	// the camera "object"
	this.camera = new Point(0,0,1);
	
	// references to the important browser objects, the "screen" and the drawing context
	this.canvas  = document.getElementById(canvas);
	this.context = this.canvas.getContext('2d');
	
	// widht, height of the "screen"
	this.width  = this.canvas.width;
	this.height = this.canvas.height;
	
	// constants (half of the width and height) we don't want to recompute all the time
	this.hw      = this.canvas.width/2;
	this.hh      = this.canvas.height/2;
	
	// the objects registered in the engien
	this.elements = [];

	// store a boolean flag to indicate the engine is running
	this.running = false
}

// register geometry in the scene
Engine.prototype.register = function(object) {
	this.elements.push(object);
}

// start the engine
Engine.prototype.run = function() {
	if(!this.running) {
		this.running = true;
		this.tick();
		if( this.timer ) {
			clearInterval(this.timer);
		}
		this.timer = setInterval('engine.tick()', 30);
	}
}

// stop the engine
Engine.prototype.stop = function() {
	if(this.running) {
		clearInterval(this.timer);
		this.running = false;
	}
}

// clear all
Engine.prototype.clear = function() {
	this.context.clearRect( 0, 0, this.width, this.height);
}

// this function gets called +/- each 30ms (31 FPS) to do one timeslice of actions
Engine.prototype.tick = function() {
	engine.clear();
	for( var i = 0; i < this.elements.length; i++ )
		this.draw(this.elements[i].update());
}

// draw the geometry in perspective
Engine.prototype.draw = function(object) {
	for( var i = 0; i < object.triangles.length; i++ ) {
		p = object.triangles[i];
		v1 = object.vertices[p.a];		
		d = 60;

		this.context.beginPath();
		v1zd = d/(v1.z+d);
		this.context.moveTo(this.hw + (v1.x*v1zd), this.hh + (v1.y*v1zd));
		v2 = object.vertices[p.b];
		this.context.lineTo(this.hw + (v2.x*d)/(v2.z+d), this.hh + (v2.y*d)/(v2.z+d));
		v3 = object.vertices[p.c];
		this.context.lineTo(this.hw + (v3.x*d)/(v3.z+d), this.hh + (v3.y*d)/(v3.z+d));
		this.context.closePath();
		this.context.strokeStyle = 'rgb(0,0,0)';
		this.context.stroke();
	}
}