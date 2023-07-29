console.log("Script is running");
window.onload = function () {
	emailjs.init("U9h2cQeseMkxog38Q");

	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		let form = this;
		let params = {
			name: form.elements.name.value,
			email: form.elements.email.value,
			subject: form.elements.subject.value,
			message: form.elements.message.value
		};

		let loadingDiv = document.querySelector('.loading');
		let errorDiv = document.querySelector('.error-message');
		let successDiv = document.querySelector('.success-message ');

		loadingDiv.style.display = 'block';

		emailjs.send('service_r8k6kmz', 'template_qzujp2i', params, "U9h2cQeseMkxog38Q")
			.then(function (response) {
				loadingDiv.style.display = 'none';
				successDiv.style.display = 'block';
				console.log('SUCCESS!', response);
				// Clear the form.
				form.reset();
			}, function (error) {
				loadingDiv.style.display = 'none';
				errorDiv.innerHTML = 'Error: ' + error;
				errorDiv.style.display = 'block';
				console.log('FAILED...', error);
			});
	});
};
