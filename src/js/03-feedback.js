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
    formEl.elements.email.value = localValues.email;
    formEl.elements.message.value = localValues.message;
  } else {
    formEl.elements.email.value = '';
    formEl.elements.message.value = '';
  }
}

function submitForm(event) {
  event.preventDefault();

  storage.remove(`feedback-form-state`);

  const {
    elements: { email, message },
  } = event.currentTarget;

  const inputValues = {
    email: email.value,
    message: message.value,
  };

  console.log(inputValues);
  event.currentTarget.reset();
}
