import './style.css';

const form = document.getElementsByTagName('form')[0];
const name = document.getElementById('name');
const email = document.getElementById('email');
const postalCode = document.getElementById('postal-code');
const country = document.getElementById('country');
const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const agree = document.getElementById('agree');

const fieldsToValidate = [
  name,
  email,
  postalCode,
  country,
  pwd,
  confirmPwd,
  agree,
];

fieldsToValidate.forEach((field) => {
  if (field === confirmPwd) {
    field.addEventListener('input', () => {
      field.setCustomValidity('');
      field.validity.valid && field.value === pwd.value
        ? showValid(field)
        : showInvalid(field);
    });
  } else if (field === country) {
    field.setCustomValidity('');
    showValid(field);
  } else {
    field.addEventListener('input', () => {
      field.setCustomValidity('');
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

form.addEventListener('submit', (event) => {
  // if any field is invalid, display custom instructions underneath field
  if (!name.validity.valid) {
    name.setCustomValidity('Please enter a valid name.');
    name.reportValidity();
  } else if (!email.validity.valid) {
    email.setCustomValidity('Please enter a valid email address.');
    email.reportValidity();
  } else if (!postalCode.validity.valid) {
    postalCode.setCustomValidity(
      'Please enter a valid postal code (ie, A1A 1A1 or ##### or #####-####).'
    );
    postalCode.reportValidity();
  } else if (!pwd.validity.valid) {
    pwd.setCustomValidity(
      'Must be 8 characters with uppercase, lowercase, and number or special character.'
    );
    pwd.reportValidity();
  } else if (confirmPwd.value !== pwd.value) {
    confirmPwd.setCustomValidity('Passwords must match.');
    confirmPwd.reportValidity();
  } else if (!agree.checked) {
    agree.setCustomValidity(
      "Please confirm that you've read and agree to the Terms & Conditions"
    );
    agree.reportValidity();
  }
});
