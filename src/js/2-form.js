const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem(KEY)) ?? {
	email: "",
	message: "",
};

form.email.value = formData.email;
form.message.value = formData.message;


form.addEventListener("input", e => {

	if (e.target.name === "email") {
		formData.email = e.target.value.trim();
	} else if (e.target.name === "message") {
		formData.message = e.target.value.trim();
	}
	localStorage.setItem(KEY, JSON.stringify(formData));

});

form.addEventListener("submit", e => {
	e.preventDefault();
	if (!e.target.email.value.trim() || !e.target.message.value.trim()) {
		alert("Fill please all fields");
		return;
	}
	console.log(formData);

	formData.email = "";
	formData.message = "";
	localStorage.removeItem(KEY);
	form.reset();
});


