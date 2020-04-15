const modals = () => {
	function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const triggers = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				allModals = document.querySelectorAll("[data-modal]");
		
		triggers.forEach(item => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				allModals.forEach(item => {
					item.style.display = "none";
				});
				
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
			});
		})

		close.addEventListener("click", () => {
			allModals.forEach(item => {
				item.style.display = "none";
			});
			modal.style.display = "none";
			document.body.style.overflow = "";
		});
		
		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeClickOverlay) {
				allModals.forEach(item => {
					item.style.display = "none";
				});
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}, time);
	}

	bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModals(".phone_link", ".popup", ".popup .popup_close");
	bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
	bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
	bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
	// showModalByTime(".popup", 60000);

};

export default modals;