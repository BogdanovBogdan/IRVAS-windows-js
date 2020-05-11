const checkFillFields = (modalSelector, fieldsSelector, triggerSelector) => {
	const modal = document.querySelector(modalSelector),
		fields = document.querySelectorAll(fieldsSelector),
		trigger = document.querySelector(triggerSelector);

	trigger.addEventListener("click", (e) => {
		for (let input of fields) {
			switch (input.getAttribute("type")) {
				case "text":
					if (input.value === "") {
						alert("Заполните пустые поля!");
						e.stopImmediatePropagation();
						return;
					};
					break;
				case "checkbox":
					for (let item of fields) {
						if (item.checked) return;
					}
					alert("Заполните пустые поля!");
					e.stopImmediatePropagation();
					return;
			};
		};
	});
};

export default checkFillFields;