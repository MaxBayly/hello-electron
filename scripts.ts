
var prevColour = "#FFFFFF";
function changeBackgroundColour() {
	localStorage.setItem("prevColour", prevColour)
	var colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();
	prevColour = colour;
	document.body.style.background = colour;
	document.getElementById("colourButton").innerHTML = colour;	
}

function getPreviousColour() {
	var colour = localStorage.getItem("prevColour");
	document.getElementById("colourButton").innerHTML = colour;
	document.body.style.background = colour;

}