const timer = (id, deadline) => {
	const addZero = (num) => {
		if (num <= 9) {
			return "0" + num;
		} else {
			return num;
		}
	};
	
	const getTimeRemaining = (endtime) => {
		const total = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((total / 1000) % 60),
			minutes = Math.floor((total / (1000 * 60)) % 60),
			hours = Math.floor((total / 1000 / 60 / 60) % 24),
			days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			"total": total,
			"seconds": seconds,
			"minutes": minutes,
			"hours": hours,
			"days": days
		}
	};



	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
			seconds = timer.querySelector("#seconds"),
			minutes = timer.querySelector("#minutes"),
			hours = timer.querySelector("#hours"),
			days = timer.querySelector("#days"),
			timerInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const time = getTimeRemaining(endtime);
			
			seconds.textContent = addZero(time.seconds);
			minutes.textContent = addZero(time.minutes);
			hours.textContent = addZero(time.hours);
			days.textContent = addZero(time.days);

			if (time.total <= 0) {
				seconds.textContent = "00";
				minutes.textContent = "00";
				hours.textContent = "00";
				days.textContent = "00";

				clearInterval(timerInterval);
			};
		};
	};

	setClock(id, deadline);
};

export default timer;