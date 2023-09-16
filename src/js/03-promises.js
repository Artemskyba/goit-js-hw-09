import Notiflix from 'notiflix';

const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let positionValue = 1;
  let amountValue = +amountInputEl.value;
  let totalDelay = 0;
  const delayValue = +delayInputEl.value;
  const stepValue = +stepInputEl.value;

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve ({position, delay})
        } else {
          reject({position, delay})
        }
      }, delay);
    });
  }

  function callPromises() {
    if (positionValue <= amountValue) {
      createPromise(positionValue, positionValue === 1 ? delayValue : stepValue)
        .then(({ position, delay }) => {
          totalDelay += delay;
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${totalDelay}ms`, {
            useIcon: false,
          });
        })
        .catch(({ position, delay }) => {
          totalDelay += delay;;
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${totalDelay}ms`, {
            useIcon: false,
          })
        })
        .finally(() => {
          positionValue += 1;
          setTimeout(callPromises, stepValue);
        })
    };
  };
  callPromises()
};