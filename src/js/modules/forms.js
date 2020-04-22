import checkNumInputs from "./checkNumInputs";
import closePopups from "./closePopups";

const forms = (state) => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input");

	checkNumInputs("input[name='user_phone']");
	
	const message = {
		loading : 'Загрузка...',
		success : 'Спасибо! Скоро мы с вами свяжемся',
		failure : 'Что-то пошло не так...' 
	};
	
	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: "post",
			body: data
		});
		return await res.text();
	};
	
	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
			item.checked = false;
		})
	};
	
	forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault()

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);
			
			const formData = new FormData(item);
			if (item.getAttribute("data-calc") === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
			.then(res => {
				console.log('success: ', res);
				statusMessage.textContent = message.success;
				for (let key in state) delete state[key];
				
			})
			.catch(() => statusMessage.textContent = message.failure)
			.finally(() => {
				clearInputs();
				setTimeout(() => {
					statusMessage.remove();
					closePopups();
				}, 4000);
				
			});
		});
		
	});
	
	
};

export default forms;