const loginForm = document.getElementById('loginform'); 
const errorMsg = document.getElementById('errorMsg'); 

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const username = document.getElementById('Username').value;
  const password = document.getElementById('password').value;

  if (username === 'swift_fit' && password === '0000') {
    alert('Login Successful!');
  } else {
    errorMsg.textContent = 'Invalid username or password';
  }
});
