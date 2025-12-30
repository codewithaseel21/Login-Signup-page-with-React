
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginFormEl = document.getElementById('login');
const signupFormEl = document.getElementById('signup');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('bg-blue-500', 'text-white');
    loginTab.classList.remove('bg-gray-300', 'text-gray-700');
    signupTab.classList.add('bg-gray-300', 'text-gray-700');
    signupTab.classList.remove('bg-blue-500', 'text-white');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('bg-blue-500', 'text-white');
    signupTab.classList.remove('bg-gray-300', 'text-gray-700');
    loginTab.classList.add('bg-gray-300', 'text-gray-700');
    loginTab.classList.remove('bg-blue-500', 'text-white');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

loginFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Basic validation
    if (email && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

signupFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    // Basic validation
    if (email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Signup successful!');
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
