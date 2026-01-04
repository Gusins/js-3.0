const form = document.querySelector('.login-form');
let userData = {};
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = e.currentTarget.elements.email.value.trim();
	const password = e.currentTarget.elements.password.value.trim();
	if (!email || !password) {
		alert('All form fields must be filled in');
		return;
	}
	userData = {
		email,
		password,
	};
	console.log(userData);
	form.reset();
});