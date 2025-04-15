const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeButton = document.getElementById('close-button');
const loginForm = document.getElementById('login-form');
const welcomeText = document.getElementById('welcome-text');
const options = document.getElementById('options');
const uploadPhotoButton = document.getElementById('upload-photo');
const viewPhotoButton = document.getElementById('view-photo');
const logoutButton = document.getElementById('logout');
const photoInput = document.getElementById('photo-input');
const photoContainer = document.getElementById('photo-container');
const uploadedPhoto = document.getElementById('uploaded-photo');

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
    options.style.display = 'block'; // Tampilkan opsi setelah login
});

uploadPhotoButton.addEventListener('click', () => {
    photoInput.click(); // Buka dialog unggah file
});

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedPhoto.src = e.target.result; // Tampilkan foto yang diunggah
            photoContainer.style.display = 'block'; // Tampilkan kontainer foto
        };
        reader.readAsDataURL(file);
    }
});

viewPhotoButton.addEventListener('click', () => {
    if (uploadedPhoto.src) {
        photoContainer.style.display = 'block'; // Tampilkan foto jika ada
    } else {
        alert('Belum ada foto yang diunggah!');
    }
});

logoutButton.addEventListener('click', () => {
    options.style.display = 'none';
    photoContainer.style.display = 'none';
    welcomeText.textContent = 'SELAMAT DATANG';
});
