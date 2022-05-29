import './style.css';

const name = document.getElementById('name');
const email = document.getElementById('email');
const postalCode = document.getElementById('postal-code');
const country = document.getElementById('country');
const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const agree = document.getElementById('agree');

const fieldsToValidate = [name, email, postalCode, country, pwd, confirmPwd];

// PWD: Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)

fieldsToValidate.forEach((field) => {
  field.addEventListener('input', () => {
    field.validity.valid ? showValid(field) : showInvalid(field);
  });
});

function showValid(element) {
  element.style.backgroundColor = 'rgb(155, 255, 155)';
}

function showInvalid(element) {
  element.style.backgroundColor = 'rgb(255, 155, 155)';
}
