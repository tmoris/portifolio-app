import emailjs from 'emailjs-com';

emailjs.init('U9h2cQeseMkxog38Q');

window.onload = function () {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		const serviceId = 'service_r8k6kmz';
		const templateId = 'template_qzujp2i';

		emailjs.sendForm(serviceId, templateId, this)
			.then(function () {
				console.log('SUCCESS!');
			}, function (error) {
				console.log('FAILED...', error);
			});
	});
}
