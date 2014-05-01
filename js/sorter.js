console.log("sorter.js");

CanvasSorter = function(canvas_element) {
	this.canvas = canvas_element;
	this.ctx = this.canvas.getContext("2d");
}

CanvasSorter.prototype.set_canvas_size = function(width, height) {
	this.canvas.width = width;
	this.canvas.height = height;
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

	this.list_to_sort = shuffled_list;
}

// --------------

CanvasSorter.prototype.draw_current_list = function() {
	var bar_count = this.list_to_sort.length;
	var bar_width = Math.floor(this.canvas.width / bar_count);
	var bar_height_step_size = this.canvas.height / bar_count;
	var dead_space = this.canvas.width - (bar_width * bar_count);

	for (var i = 0; i < bar_count; i++) {
		var x = (i * bar_width) + Math.floor(dead_space/2);
		var y = this.list_to_sort[i] * bar_height_step_size;
		
		this.draw_rect(x, y, bar_width, this.canvas.height - y);
	}

	
}


console.log("end of sorter.js file");

