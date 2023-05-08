import * as usersRepo from './users.repository.js';

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

export function getAll() {
  return usersRepo.getAll();
}

export function getLength() {
  return usersRepo.getLength();
}

export function getRandom() {
  // const length = usersRepo.getLength();
  const length = getLength();
  const index = getRandomNumber(0, length);
  return usersRepo.getByIndex({ index });
}

export function getById({ id }) {
  return usersRepo.getById({ id });
}

export function getByFilter({ filter }) {
  const filterKeys = Object.keys(filter);
  const filterValues = Object.values(filter);
  return usersRepo.getByFilter({ filterKeys, filterValues });
}

export function create({ user }) {
  return usersRepo.create({ user });
}

export function replace({ id, newUser }) {
  return usersRepo.replace({ id, newUser });
}

export function update({ id, newProps }) {
  return usersRepo.update({ id, newProps });
}

export function markAsDelete({ id }) {
  return usersRepo.markAsDelete({ id });
}

export function remove({ id }) {
  return usersRepo.remove({ id });
}
