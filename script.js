function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    if (!username) {
        errorMessage.textContent = 'Please enter a username.';
        errorMessage.style.display = 'block';
        return;
    }

    if (!password) {
        errorMessage.textContent = 'Please enter a password.';
        errorMessage.style.display = 'block';
        return;
    }

    // Hardcoded credentials
    if (username === 'omlingo' && password === 'pupt') {
        // redirect to team page
        window.location.href = 'pages/team.html';
        return;
    }

    errorMessage.textContent = 'Invalid username or password.';
    errorMessage.style.display = 'block';
}
