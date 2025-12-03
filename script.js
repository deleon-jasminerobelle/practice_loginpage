function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('userType').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    // Validation
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
    if (!userType) {
        errorMessage.textContent = 'Please select a user type.';
        errorMessage.style.display = 'block';
        return;
    }

    
    if (username === 'omlingo' && password === 'pupt') {
        alert(`Login successful! Welcome, ${username} (${userType}).`);
        document.getElementById('loginForm').reset(); 
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
}
