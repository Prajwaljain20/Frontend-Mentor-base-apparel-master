submit = document.querySelector('.submit');
email = document.querySelector('.email');
emailError = document.querySelector('.email-error');
error = document.querySelector('.error');
regress = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
submit.addEventListener('click', (e) => {
    if (!email.value.match(regress)) {
        error.style.display = 'block';
        error.textContent = 'Please provide a valid email';
        emailError.style.display = 'block';
    } else {
        error.style.display = 'none';
        error.textContent = '';
        emailError.style.display = 'none';
    }
});