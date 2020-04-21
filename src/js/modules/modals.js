import calcScroll from "./calcScrollWidth";

const modals = () => {
	function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const triggers = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				allModals = document.querySelectorAll("[data-modal]"),
				scrollWidth = calcScroll();
		
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
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		})

		close.addEventListener("click", () => {
			allModals.forEach(item => {
				item.style.display = "none";
			});
			modal.style.display = "none";
			document.body.style.overflow = "";
			document.body.style.marginRight = "0px";
		});
		
		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeClickOverlay) {
				allModals.forEach(item => {
					item.style.display = "none";
				});
				modal.style.display = "none";
				document.body.style.overflow = "";
				document.body.style.marginRight = "0px";

			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${scrollWidth}px`;
		}, time);
	}

	bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModals(".phone_link", ".popup", ".popup .popup_close");
	bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
	bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
	bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
	showModalByTime(".popup", 6000);

};

export default modals;