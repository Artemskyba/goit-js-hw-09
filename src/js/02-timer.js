import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerEl = document.querySelector('.timer');
const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const inputDateEl = document.querySelector('#datetime-picker');
const daysCounterEl = document.querySelector('[data-days]');
const hoursCounterEl = document.querySelector('[data-hours]');
const minutesCounterEl = document.querySelector('[data-minutes]');
const secondsCounterEl = document.querySelector('[data-seconds]');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.append(inputDateEl, startBtnEl, timerEl);
bodyEl.append(wrapper);


startBtnEl.disabled = true;

flatpickr("#datetime-picker",
  {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      if (selectedDates[0] - new Date <= 0) {
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtnEl.disabled = true;
      } else {
        startBtnEl.disabled = false;
      }
    },
  });

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  let timerDateMs = new Date(inputDateEl.value).getTime() - new Date().getTime();
    const timerDateObj = convertMs(timerDateMs);
    setTimer(timerDateObj);

  const intervalTimer = setInterval(() => { 
    const timerDateObj = convertMs(timerDateMs);
    setTimer(timerDateObj);
    console.log(timerDateObj);
    timerDateMs -= 1000;

    if (timerDateMs < 0) {
      startBtnEl.disabled = true;
      clearInterval(intervalTimer);
    }
  }, 1000);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function setTimer ({ days, hours, minutes, seconds }) {
  daysCounterEl.textContent = addLeadingZero(days);
  hoursCounterEl.textContent = addLeadingZero(hours);
  minutesCounterEl.textContent = addLeadingZero(minutes);
  secondsCounterEl.textContent = addLeadingZero(seconds);
};