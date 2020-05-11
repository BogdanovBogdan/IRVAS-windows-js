import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
import checkFillFields from "./modules/checkFillFields";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	let modalState = {};
	let deadline = "2020-04-21";

	changeModalState(modalState);
	checkFillFields(".popup_calc", ".popup_calc .form-control", ".popup_calc_button");
	checkFillFields(".popup_calc_profile", ".popup_calc_profile .checkbox", ".popup_calc_profile_button");
	modals();
	tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
	tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
	tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
	forms(modalState);
	timer("#timer", deadline);
	images();
});