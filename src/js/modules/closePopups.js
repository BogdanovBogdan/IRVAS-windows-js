const closePopups = (popupItem) => {
	const allPopups = document.querySelectorAll("[data-modal]");
	
	try {
		const popup = popupItem.closest("[data-modal]");
		if (getComputedStyle(popup).display === "none") {
			return;
		};
	} catch (error) {}
	
	allPopups.forEach(item => {
		item.style.display = "none";
	});
	document.body.style.overflow = "";
	document.body.style.marginRight = "0px"
};

export default closePopups;