function handleLogin() {
    try {
        console.log('Login function called');
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
            return false;
        }
        if (!password) {
            errorMessage.textContent = 'Please enter a password.';
            errorMessage.style.display = 'block';
            return false;
        }
        if (!userType) {
            errorMessage.textContent = 'Please select a user type.';
            errorMessage.style.display = 'block';
            return false;
        }

        console.log('Credentials entered:', { username, password });
        
        if (username === 'omlingo' && password === 'pupt') {
            console.log('Login successful, redirecting...');
            // Redirect to team page after successful login
            window.location.href = 'pages/team.html';
            return false; // Prevent form submission
        } else {
            console.log('Invalid credentials');
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
            return false;
        }
    } catch (error) {
        console.error('Login error:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'An error occurred. Please try again.';
        errorMessage.style.display = 'block';
        return false;
    }
}
