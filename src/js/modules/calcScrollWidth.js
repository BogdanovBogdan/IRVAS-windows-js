function calcScroll() {
	let calcBox = document.createElement("div");

	document.body.appendChild(calcBox);
	calcBox.style.width = "50px";
	calcBox.style.height = "50px";
	calcBox.style.overflowY = "scroll";
	calcBox.style.visibility = "hidden";

	let widthScroll = calcBox.offsetWidth - calcBox.clientWidth;
	calcBox.remove();

	return widthScroll;
}

export default calcScroll;