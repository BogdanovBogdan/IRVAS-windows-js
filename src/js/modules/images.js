import calcScroll from "./calcScrollWidth";

const images = () => {
	const imgPopup = document.createElement("div"),
		img = document.createElement("img"),
		imgContainer = document.querySelector(".works"),
		scrollWidth = calcScroll();
	

	imgPopup.classList.add("popup");
	imgPopup.setAttribute("data-modal", "");
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
			document.body.style.marginRight = `${scrollWidth}px`;
		}

		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = `0px`;
		}
	});
};

export default images;