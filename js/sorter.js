console.log("sorter.js");

CanvasSorter = function(canvas_element) {
	this.canvas = canvas_element;
	this.ctx = this.canvas.getContext("2d");
}

CanvasSorter.prototype.clear_canvas = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
console.log("end of sorter.js file");
