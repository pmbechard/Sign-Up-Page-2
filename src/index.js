import './style.css';

const form = document.getElementsByTagName('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const postalCode = document.getElementById('postal-code');
const country = document.getElementById('country');
const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const agree = document.getElementById('agree');

const CAN_POSTAL_CODE = '/^[a-zA-z]\d[a-zA-z]\s?\d[a-zA-z]\d$/';
const US_POSTAL_CODE = '/(\d{5}([\-]\d{4})?)/';

form.addEventListener('submit', () => {});
