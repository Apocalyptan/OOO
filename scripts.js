function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function () {
			//alert(this.text);
			alert(self.text);
		});
		this.$element.appendTo($('body'));
		// $('body').append(this.$element);
	}
}

var btn1 = new Button('Siema!');

btn1.create();