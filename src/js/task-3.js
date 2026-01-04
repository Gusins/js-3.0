const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', (e) => {
	const inputValue = e.currentTarget.value.trim();
	output.textContent = inputValue;
	if (!inputValue) {
		output.textContent = "Anonymous";
	}
});
