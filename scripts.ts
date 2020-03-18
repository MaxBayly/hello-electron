
var prevColour = "#FFFFFF";

function getRandomColour() {
	var colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();
	return colour;


}

function setColour(choice) {
	if (choice === "prev") {
		var colour = localStorage.getItem("prevColour");
	}
	else {
		var colour = getRandomColour()
	}
	localStorage.setItem("prevColour", prevColour);
	prevColour = colour
	document.getElementById("colourButton").innerHTML = colour;
	document.body.style.background = colour;
}