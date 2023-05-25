async function sendAuth(route) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  try {
    const response = await fetch(`http://localhost:3000/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const { token } = await response.json();
    localStorage.token = token;
    console.log(localStorage.token);
  } catch(e) {
    console.log(e);
  }
}

function printAuthSection() {
  const rootElement = document.getElementById('root');
  const authContainer = document.createElement('div');

  const username = document.createElement('input');
  username.id = 'username';
  username.type = 'text';

  const password = document.createElement('input');
  password.id = 'password';
  password.type = 'password';

  const registerButton = document.createElement('button');
  registerButton.addEventListener('click', () => sendAuth('register'));
  registerButton.textContent = 'register';

  const loginButton = document.createElement('button');
  loginButton.addEventListener('click', () => sendAuth('login'));
  loginButton.textContent = 'login';

  authContainer.appendChild(username);
  authContainer.appendChild(password);
  authContainer.appendChild(registerButton);
  authContainer.appendChild(loginButton);
  rootElement.appendChild(authContainer);
}

async function getUsers() {
  console.log(localStorage.token);

  try {
    const response = await fetch('http://localhost:3000/users/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
      },
    });

    const users = await response.json();
    console.log(users);
  } catch(e) {
    console.log(e);
  }
}

function printUsersSection() {
  const rootElement = document.getElementById('root');
  const usersContainer = document.createElement('div');

  const usersButton = document.createElement('button');
  usersButton.addEventListener('click', getUsers);
  usersButton.textContent = 'Get Users';

  usersContainer.appendChild(usersButton);
  rootElement.appendChild(usersContainer);
}

function initPage() {
  localStorage.removeItem('token');
  printAuthSection();
  printUsersSection();
}

initPage();
