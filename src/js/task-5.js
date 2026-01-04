function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorIsSet = document.querySelector('.color');
button.addEventListener("click", (e) => {
	e.preventDefault();
	const sameColor = getRandomHexColor();
	colorIsSet.textContent = sameColor;
	body.style.backgroundColor = sameColor;
});
