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

	this.splitTriangle  = this.processOriginalTriangle(originalTriangle);
	//console.log(this.splitTriangle);

	// array to hold the valid numbers to sum for a result
	this.sumArray = [];

	// gives us a function with the context of the pagemanager
	var processLineFunction = $.proxy(this.processLine, this);

	// loop through each line of numbers and process them,
	// adding them to the sum array
	_.each(
		this.splitTriangle,
		function(currentLine) { processLineFunction(currentLine) }
	);

	console.log(this.sumArray);

	return false;
};

PageManager.prototype.processOriginalTriangle = function(originalTriangle) {
	return originalTriangle.split("\n");
};

PageManager.prototype.processLine = function(lineOfNumbers) {

	var splitsies = lineOfNumbers.split(" ");
	console.log(splitsies);
	return this.sumArray.push(splitsies[0]);
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