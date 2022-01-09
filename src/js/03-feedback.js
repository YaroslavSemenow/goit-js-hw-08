import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageObj = {};

form.addEventListener('input', throttle(OnFormInput, 500));
form.addEventListener('submit', onSubmitForm);

function OnFormInput(e) {
  let key = e.target.name;
  let value = e.target.value;

  localStorageObj[key] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(localStorageObj));
}

populateInputForm();

function populateInputForm() {
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

function onSubmitForm(e) {
  e.preventDefault();

  const formEl = e.target.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;
  const formData = {
    email,
    message,
  };

  console.log(formData);

  localStorage.clear();
  form.reset();
}
