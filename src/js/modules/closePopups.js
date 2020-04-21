const closePopups = () => {
	const allPopups = document.querySelectorAll("[data-modal]");
	
	allPopups.forEach(item => {
		item.style.display = "none";
	});
	document.body.style.overflow = "";
	document.body.style.marginRight = "0px"
};

export default closePopups;