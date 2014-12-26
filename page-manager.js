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

	this.previousPosition = 0;
	this.sumArray = [];

	// gives us a function with the context of the pagemanager
	var processLineFunction = $.proxy(this.processLine, this);

	// loop through each line of numbers and process them,
	// adding them to the sum array
	_.each(
		this.splitTriangle,
		function(currentLine) { processLineFunction(currentLine) }
	);
	
	var sum = _.reduce(this.sumArray, function(memo, num){ return memo + num; }, 0);
	this.showResult(sum);

	return false;
};

PageManager.prototype.processOriginalTriangle = function(originalTriangle) {
	return originalTriangle.split("\n");
};

// returns an object of {value: xxx, position: xxx}
// where value is the largest int within 1 of the position,
// and position is the new position of that int
PageManager.prototype.processLine = function(lineOfNumbers) {

	var splitsies = lineOfNumbers.split(" ");

	// the only available numbers are the current position and the one next to it
	var available = splitsies.slice(this.previousPosition, this.previousPosition + 2);

	// find the largest availble
	var largest = available[0];
	var currentPosition = 0;

	if(typeof available[1] != "undefined" && available[1] > available[0]) {
		largest = available[1];
		currentPosition = 1;
	}

	// set the previous position to the old position + the new position
	this.previousPosition = this.previousPosition + currentPosition;

	return this.sumArray.push(parseInt(largest));
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