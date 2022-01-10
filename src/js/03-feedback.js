import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageObj = {};

form.addEventListener('input', throttle(OnFormInput, 500));
form.addEventListener('submit', onSubmitForm);

populateInputForm();

function OnFormInput() {
  localStorageObj.email = document.querySelector('input').value;
  localStorageObj.message = document.querySelector('textarea').value;

  localStorage.setItem('feedback-form-state', JSON.stringify(localStorageObj));
}

function populateInputForm() {
  if (localStorage.getItem('feedback-form-state')) {
    const savedInputValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    const { email, message } = savedInputValue;
    const formEl = form.elements;

    if (email) {
      formEl.email.value = email;
    }
    if (message) {
      formEl.message.value = message;
    }
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  const formEl = e.target.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  if (email === '' || message === '') {
    return;
  }

  const formData = {
    email,
    message,
  };

  console.log(formData);
  localStorage.clear();
  form.reset();
}
