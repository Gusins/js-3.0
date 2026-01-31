import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let userSelectedDate;
let dateDiff;
const selectors = {
	days: document.querySelector("[data-days]"),
	hours: document.querySelector("[data-hours]"),
	minutes: document.querySelector("[data-minutes]"),
	seconds: document.querySelector("[data-seconds]"),
	input: document.querySelector("#datetime-picker"),
	btn: document.querySelector("[data-start]")
};
const { days, hours, minutes, seconds, input, btn } = selectors;
btn.setAttribute('disabled', '');

const options = {
	enableTime: true,
	enableSeconds: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		userSelectedDate = selectedDates[0];
		dateDiff = userSelectedDate - new Date();
		if (dateDiff <= 0) {
			iziToast.error({
				title: 'Error',
				message: "Please choose a date in the future"
			});
			btn.setAttribute('disabled', '');
			return;
		}
		btn.removeAttribute('disabled', '');
	},
};


btn.addEventListener('click', (e) => {
	btn.setAttribute('disabled', '');
	input.setAttribute('disabled', '');

	const decrement = setInterval(() => {
		dateDiff = userSelectedDate - new Date();
		const convertedDate = convertMs(dateDiff);

		if (dateDiff <= 0) {
			input.removeAttribute('disabled', '');
			clearInterval(decrement);
			days.innerHTML = "00";
			hours.innerHTML = "00";
			minutes.innerHTML = "00";
			seconds.innerHTML = "00";

			return;
		}
		days.innerHTML = addLeadingZero(convertedDate.days);
		hours.innerHTML = addLeadingZero(convertedDate.hours);
		minutes.innerHTML = addLeadingZero(convertedDate.minutes);
		seconds.innerHTML = addLeadingZero(convertedDate.seconds);

	}, 1000);
});


const addLeadingZero = number => number.toString().padStart(2, "0");













function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}
flatpickr(input, options);
