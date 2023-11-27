import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const variables = {
    input: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
let selectedNewDates = null;
variables.startButton.disabled = true;
variables.startButton.addEventListener('click', start);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);

        if (selectedDates[0] <= new Date()) {
            iziToast.show({
                position: 'center',
                title: 'Sorry !',
                message: 'Please choose a date in the future',
            });
        } else {
            selectedNewDates = selectedDates[0].getTime();
            variables.startButton.disabled = false;
            variables.input.disabled = false;
        }
    },
};

flatpickr('input#datetime-picker', options);

function start() {
    const timer = setInterval(() => {
        const currentDate = new Date().getTime();
        const selectedDate = selectedNewDates - currentDate;
        startTimer(convertTime(selectedDate));
        variables.startButton.disabled = true;
        variables.input.disabled = true;

        if (selectedNewDates - currentDate < 1000) {
            clearInterval(timer)
            iziToast.show({
                position: 'center',
                title: 'Congratulations!',
                message: 'Your time is now!'
            })
            variables.startButton.disabled = false;
            variables.input.disabled = false;
        }
    }, 1000)
}

function convertTime(ms) {
    const second = 1000
    const minute = seconds * 60
    const hour = minute * 60
    const day = hour * 24

    const remainingDays = addLeadingZero(Math.floor(ms / day))
    const remainingHours = addLeadingZero(Math.floor((ms % day) / hour))
    const remainingMinutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute))
    const remainngSeconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second))

    return { remainingDays, remainingHours, remainingMinutes, remainngSeconds }
}

function startTimer({ remainingDays, remainingHours, remainingMinutes, remainngSeconds }) {
    variables.days.textContent = remainingDays
    variables.hours.textContent = remainingHours
    variables.minutes.textContent = remainingMinutes
    variables.seconds.textContent = remainngSeconds
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}