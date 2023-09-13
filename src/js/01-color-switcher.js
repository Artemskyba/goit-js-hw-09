const bodyEl = document.querySelector('.first-task-body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

let colorParty;

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.append(startBtnEl, stopBtnEl);
bodyEl.append(wrapper);

bodyEl.style.width = '100vh';
bodyEl.style.height = '100vh';

wrapper.style.position = 'absolute';
wrapper.style.top = '50%';
wrapper.style.left = '50%';
wrapper.style.transform = 'translate(-50%, -50%)';
wrapper.style.display = 'flex';
wrapper.style.gap = '20px';

stopBtnEl.disabled = true;
stopBtnEl.style.width = '110px';
stopBtnEl.style.height = '40px';
startBtnEl.style.width = '110px';
startBtnEl.style.height = '40px';

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStartBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  colorParty = setInterval(changeBodyBg, 1000);

  function changeBodyBg() {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
};

function onStopBtnClick() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(colorParty);
};
