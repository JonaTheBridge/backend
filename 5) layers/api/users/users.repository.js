import users from './users.database.js';

function getActiveUsers() {
  return users.filter((user) => !user.deleted);
}

export function getAll() {
  const activeUsers = getActiveUsers();
  return activeUsers;
}

export function getLength() {
  const activeUsers = getActiveUsers();
  return activeUsers.length;
}

export function getByIndex({ index }) {
  const activeUsers = getActiveUsers();
  return activeUsers[index];
}

export function getById({ id }) {
  const activeUsers = getActiveUsers();
  const findedUser = activeUsers.find((user) => user.id?.toString() === id.toString());
  return findedUser;
}

export function getByFilter({ query }) {
  const queryKeys = Object.keys(query);
  const queryValues = Object.values(query);
  let filteredUsers = getActiveUsers();
  for (let index = 0; index < queryKeys.length; index++) {
    const queryKey = queryKeys[index];
    const queryValue = queryValues[index];
    filteredUsers = users.filter((user) => {
      const userValue = user[queryKey];
      const stringifiedValue = JSON.stringify(userValue);
      const userValueType = typeof userValue;
      const userValueAsString = userValueType !== 'string' ? stringifiedValue : userValue;
      return userValueAsString === queryValue;
    });
  }

  return filteredUsers;
}

export function create({ user }) {
  const localUser = { ...user };
  const lastUser = users[users.length - 1];
  localUser.id = lastUser.id + 1;
  localUser.deleted = false;
  users.push(localUser);
  return localUser;
}

export function replace({ id, newUser }) {
  const index = users.findIndex((user) => user.id?.toString() === id.toString());
  users[index] = !users[index].deleted && { ...newUser, id: users[index].id };
  return users[index];
}

export function update({ id, newProps }) {
  const index = users.findIndex((user) => user.id?.toString() === id.toString());
  users[index] = !users[index].deleted && { ...users[index], ...newProps, id: users[index].id };
  return users[index];
}

export function markAsDelete({ id }) {
  const index = users.findIndex((user) => user.id?.toString() === id.toString());
  users[index] = { ...users[index], deleted: true };
  const activeUsers = getActiveUsers();
  return activeUsers;
}

export function remove({ id }) {
  const index = users.findIndex((user) => user.id?.toString() === id.toString());
  users.splice(index, 1);
  const activeUsers = getActiveUsers();
  return activeUsers;
}
