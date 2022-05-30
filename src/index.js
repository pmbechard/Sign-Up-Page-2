// TODO: Display custom error messages

import './style.css';

const name = document.getElementById('name');
const email = document.getElementById('email');
const postalCode = document.getElementById('postal-code');
const country = document.getElementById('country');
const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const agree = document.getElementById('agree');

const fieldsToValidate = [name, email, postalCode, country, pwd, confirmPwd];

fieldsToValidate.forEach((field) => {
  if (field === confirmPwd) {
    field.addEventListener('input', () => {
      field.validity.valid && field.value === pwd.value
        ? showValid(field)
        : showInvalid(field);
    });
  } else {
    field.addEventListener('input', () => {
      field.validity.valid ? showValid(field) : showInvalid(field);
    });
  }
});

function showValid(element) {
  element.style.border = '1px solid green';
  element.style.borderLeft = '5px solid green';
  if (element.parentNode.lastElementChild.classList.contains('invalid')) {
    element.parentNode.lastElementChild.remove();
  }
  if (element === element.parentNode.lastElementChild) {
    const valid = document.createElement('span');
    valid.innerHTML = '&check;';
    valid.classList.add('valid');
    element.parentNode.insertBefore(valid, element.nextSibling);
  }
}

function showInvalid(element) {
  element.style.border = '1px solid #900';
  element.style.borderLeft = '5px solid #900';
  if (element !== element.parentNode.lastElementChild) {
    element.parentNode.lastElementChild.remove();
  }

  if (element === element.parentNode.lastElementChild) {
    const invalid = document.createElement('span');
    invalid.innerHTML = 'X';
    invalid.classList.add('invalid');
    element.parentNode.insertBefore(invalid, element.nextSibling);
  }
}
