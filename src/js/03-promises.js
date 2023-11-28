import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

const forms = {
  form: document.querySelector('.js-form'),
  submitButton: document.querySelector('button'),
  amount: document.querySelector('[name="amount"]'),
  step: document.querySelector('[name="step"]'),
  delay: document.querySelector('[name="delay"]'),
}

forms.submitButton.addEventListener('click', formSubmit)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
};

function formSubmit(event) {
  event.preventDefault();

  let newDelay = +forms.delay.value;
  let amount = +forms.amount.value;
  let step = +forms.step.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        iziToast.show({
          position: 'topRight',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          position: 'topRight',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
    newDelay += step;
  }
  forms.form.reset();
};