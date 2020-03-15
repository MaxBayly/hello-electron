
function changeBackgroundColour() {
	var colour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	document.body.style.background = colour;
	document.getElementById("colourText").innerHTML = colour;

}