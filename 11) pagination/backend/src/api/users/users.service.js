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

export async function getByUsername({ username }) {
  const user = await usersRepo.getByUsername({ username });
  return user;
}

export async function getById({ id }) {
  const user = await usersRepo.getById({ id });
  return user;
}

export async function getPaginated({ page, itemsPerPage }) {
  const skip = page * itemsPerPage;
  const limit = itemsPerPage;
  const paginatedUsers = await usersRepo.getPaginated({ skip, limit });
  return paginatedUsers;
}

export async function getByFilter({ filter }) {
  const users = await usersRepo.getByFilter({ filter });
  return users;
}

export async function replace({ id, newUser }) {
  const replacedUser = await usersRepo.replace({ id, newUser });
  return replacedUser;
}

export async function update({ id, newProps }) {
  const updatedUser = await usersRepo.update({ id, newProps });
  return updatedUser;
}

export async function markAsDelete({ id }) {
  const deletedUser = await usersRepo.markAsDelete({ id });
  return deletedUser;
}

export function remove({ id }) {
  return usersRepo.remove({ id });
}
