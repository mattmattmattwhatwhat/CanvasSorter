console.log("sorter.js");

CanvasSorter = function(canvas_element) {
	this.canvas = canvas_element;
	this.ctx = this.canvas.getContext("2d");
}

CanvasSorter.prototype.clear_canvas = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

CanvasSorter.prototype.draw_rect = function(x, y, w, h) {
	this.ctx.beginPath();
	this.ctx.fillRect(x, y, w, h);
	this.ctx.fill();
}

CanvasSorter.prototype.set_fill_color = function(new_color) {
	this.ctx.fillStyle = new_color;
}


console.log("end of sorter.js file");
