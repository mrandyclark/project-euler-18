PageManager = function () { };

PageManager.prototype.init = function () {
	// events
	this.bindEvents();

	return false;
};

// your project euler code goes here
PageManager.prototype.yourCode = function() {

	var originalTriangle = this.eulerText;
	console.log(originalTriangle);

	var six = this.anotherFunction("benson!");
	console.log(six);

	this.showResult(six);
	return false;
};

// an example seperate function
PageManager.prototype.anotherFunction = function(sayTheseWords) {

	console.log(sayTheseWords);
	return 6;
};


// handles the form submit, don't edit below here
PageManager.prototype.bindEvents = function() {

	$("#input-for-euler").on(
		"submit",
		$.proxy(this.handleFormSubmit, this)
	)
};

PageManager.prototype.handleFormSubmit = function(evt) {
	evt.preventDefault();

	this.eulerText = $("#euler-text").val();
	this.yourCode();
	return true;
};

PageManager.prototype.showResult = function(result) {
	return $("#result").html(result);
};