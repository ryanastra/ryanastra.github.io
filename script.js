const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeButton = document.getElementById('close-button');
const loginForm = document.getElementById('login-form');
const welcomeText = document.getElementById('welcome-text');

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    welcomeText.textContent = `HAI ${username.toUpperCase()}`;
    loginModal.style.display = 'none';
});