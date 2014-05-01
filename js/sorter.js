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

// ----------------------

CanvasSorter.prototype.create_shuffled_int_list = function(int_count) {
	// Create a list of integers from 1 to int_count, shuffled randomly
	var integer_list = [];
	var shuffled_list = [];

	for (var i = 0; i < int_count; i++) {
		integer_list.push(i+1);
	}

	while (integer_list.length > 0) {
		var random_location = Math.floor(Math.random() * integer_list.length);
		var random_value = integer_list.splice(random_location, 1);

		shuffled_list.push(random_value[0]);
	}
	return shuffled_list;
}
console.log("end of sorter.js file");
