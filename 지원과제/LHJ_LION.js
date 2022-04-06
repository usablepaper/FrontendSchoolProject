const loginOpener = document.querySelector('.login-form-opener');
const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('.login-button');
const loginContainer = document.querySelector('.login-modal');
const closeButton = document.querySelector('.login-modal-close-button');

function loginOpen() {
    loginForm.classList.add('open');
    loginOpener.classList.add('close');
}

function login() {
    alert('열심히 하겠습니다!');
}

function modalClose() {
    loginContainer.remove();
}

loginOpener.addEventListener('click', loginOpen);
loginButton.addEventListener('click', login);
closeButton.addEventListener('click', modalClose);
