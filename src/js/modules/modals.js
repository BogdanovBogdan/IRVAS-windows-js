import calcScroll from "./calcScrollWidth";
import closePopups from "./closePopups";

const modals = () => {
	function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const triggers = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				scrollWidth = calcScroll();
		
		triggers.forEach(item => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault();
				}

				closePopups();
				
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		})

		close.addEventListener("click", () => {
			closePopups();
			modal.style.display = "none";
		});
		
		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeClickOverlay) {
				closePopups();
				modal.style.display = "none";
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
	// showModalByTime(".popup[data-modal]", 6000);

};

export default modals;