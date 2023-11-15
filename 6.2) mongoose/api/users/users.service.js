import * as usersRepo from './users.repository.js';

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

export async function getAll() {
  const users = await usersRepo.getAll();
  return users;
}

export async function getLength() {
  const length = await usersRepo.getLength();
  return length;
}

export async function getRandom() {
  const length = await usersRepo.getLength();
  const index = getRandomNumber(0, length);
  const randomUser = await usersRepo.getByIndex({ index });
  return randomUser;
}

export async function getById({ id }) {
  const user = await usersRepo.getById({ id });
  return user;
}

export async function getByFilter({ filter }) {
  const users = await usersRepo.getByFilter({ filter });
  return users;
}

export async function create({ user }) {
  const createdUser = await usersRepo.create({ user });
  return createdUser;
}

export async function replace({ id, newUser }) {
  const replacedUser = await usersRepo.replace({ id, newUser });
  return replacedUser;
}

export async function update({ id, newProps }) {
  const updatedUser = await usersRepo.update({ id, newProps });
  return updatedUser;
}

export async function markAsDeleted({ id }) {
  const deletedUser = await usersRepo.markAsDeleted({ id });
  const nonDeletedUsers = await usersRepo.getAll();
  return nonDeletedUsers;
}

export async function remove({ id }) {
  const deletedUser = await usersRepo.remove({ id });
  const nonDeletedUsers = await usersRepo.getAll();
  return nonDeletedUsers;
}
