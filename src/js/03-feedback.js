import storage from './storage';
import throttle from 'lodash.throttle';

const formEl = document.querySelector(`.feedback-form`);

let localValues = storage.load(`feedback-form-state`);
setValues();

formEl.addEventListener(`input`, formState);
formEl.addEventListener(`submit`, submitForm);

function formState(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const inputValues = {
    email: email.value,
    message: message.value,
  };

  storage.save('feedback-form-state', inputValues);
}

function setValues() {
  if (localValues) {
    formEl.elements.email.value = localValues.email || '';
    formEl.elements.message.value = localValues.message || '';
  }
}

function submitForm(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    alert`Всі поля повинні бути заповнені!`;
    return;
  }

  storage.remove(`feedback-form-state`);

  const inputValues = {
    email: email.value,
    message: message.value,
  };

  console.log(inputValues);
  event.currentTarget.reset();
}
