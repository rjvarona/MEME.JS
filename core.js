//prototypal inheritance

function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.toString = function () {
	return 'x: ' + this.x + ' y: ' + this.y;
};

Vector.prototype.add = function (x, y) {
	this.x += x;
	this.y += y;
};

//prototypal inheritance
// .prototype is for the pr
function Point(x, y, colour) {
	Vector.apply(this, arguments);
	this.colour = colour;
}

Point.prototype = new Vector();

//-------------constructor is a property that allows you to specify the function's constructor
Point.prototype.constructor = Point;

//---------------------------------------Classical Inheritancedsfdsfsf
//dfsdf