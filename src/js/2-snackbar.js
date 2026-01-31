import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");
const promiseGenerator = (state, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state === "fulfilled") {
				resolve(delay);
			}
			else {
				reject(delay);
			}
		}, delay);
	});
};
form.addEventListener('submit', e => {
	e.preventDefault();
	const delay = Number(e.target.delay.value);
	const state = e.target.state.value;
	promiseGenerator(state, delay).then(value => {
		iziToast.success({ title: "Fulfilled", message: `✅ Fulfilled promise in ${value}ms` });
		form.reset();
	}).catch(error => {
		iziToast.error({ title: "Reject", message: `❌ Rejected promise in ${error}ms` });
		form.reset();
	});

});
