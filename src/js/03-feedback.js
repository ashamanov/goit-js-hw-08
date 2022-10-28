import throttle from 'lodash.throttle';
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('form');

form.addEventListener('input', throttle(inputFoo, 500));
form.addEventListener('submit', submitFoo);

function inputFoo() {
  const data = {
    email: `${input.value}`,
    message: `${textArea.value}`,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

const availableData = localStorage.getItem('feedback-form-state');
const values = JSON.parse(availableData);

if (values !== null) {
  input.value = values.email;
  textArea.textContent = values.message;
}

function submitFoo(event) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  textArea.textContent = '';
}
