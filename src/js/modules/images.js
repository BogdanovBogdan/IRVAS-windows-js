const images = () => {
	const imgPopup = document.createElement("div"),
		img = document.createElement("img"),
		imgContainer = document.querySelector(".works");
	

	imgPopup.classList.add("popup");
	imgPopup.style.display = "none";
	imgPopup.style.justifyContent = "center";
	imgPopup.style.alignItems = "center";
	imgPopup.appendChild(img);

	img.style.maxWidth = "80vw";
	img.style.maxHeight = "90vh";
	
	imgContainer.appendChild(imgPopup);


	imgContainer.addEventListener("click", (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains("preview")) {
			let path = target.parentNode.getAttribute("href");
			img.setAttribute("src", path);

			imgPopup.style.display = "flex";
			document.body.style.overflow = "hidden";
		}

		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
			document.body.style.overflow = "";
		}
	});
};

export default images;