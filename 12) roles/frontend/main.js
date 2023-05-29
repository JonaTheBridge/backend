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

  // const registerButton = document.createElement('button');
  // registerButton.addEventListener('click', () => sendAuth('register'));
  // registerButton.textContent = 'register';

  const loginButton = document.createElement('button');
  loginButton.addEventListener('click', () => sendAuth('login'));
  loginButton.textContent = 'login';

  authContainer.appendChild(username);
  authContainer.appendChild(password);
  // authContainer.appendChild(registerButton);
  authContainer.appendChild(loginButton);
  rootElement.appendChild(authContainer);
}

async function getUsers() {
  const pageInput = document.getElementById('page');
  const itemsPerPageInput = document.getElementById('itemsPerPage');

  const page = pageInput.value;
  const itemsPerPage = itemsPerPageInput.value;

  try {
    const response = await fetch(`http://localhost:3000/users/pagination/${page}/${itemsPerPage}`, {
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

  const page = document.createElement('input');
  page.id = 'page';
  page.placeholder = 'page';
  page.type = 'text';

  const itemsPerPage = document.createElement('input');
  itemsPerPage.id = 'itemsPerPage';
  itemsPerPage.placeholder = 'itemsPerPage';
  itemsPerPage.type = 'text';

  usersContainer.appendChild(page);
  usersContainer.appendChild(itemsPerPage);

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
