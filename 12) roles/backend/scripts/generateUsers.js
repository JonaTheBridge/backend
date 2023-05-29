async function register({ username, password }) {
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    await response.json();
  } catch (e) {
    console.log(e);
  }
}

function registerMany(users) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    register(user);
  }
}

function getDefaultUsers(length) {
  const users = [];
  for (let i = 0; i < length; i++) {
    users.push({ username: `user${i}`, password: `pass${i}` });
  }

  return users;
}

const users = getDefaultUsers(20);
registerMany(users);
