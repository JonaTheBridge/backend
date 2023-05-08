import * as userService from './users.service.js';

export function getAll(req, res) {
  const users = userService.getAll();
  res.json(users);
}

export function getLength(req, res) {
  const length = userService.getLength();
  res.json(length);
}

export function getRandom(req, res) {
  const randomUser = userService.getRandom();
  res.json(randomUser);
}

export function getById(req, res) {
  const { id } = req.params;
  // const userById = userService.getById({ id });
  const userById = userService.getById({ id });
  res.json(userById);
}

export function getByFilter(req, res) {
  const filter = req.query;
  const filteredUsers = userService.getByFilter({ filter });
  res.json(filteredUsers);
}

export function create(req, res) {
  const user = req.body;
  const createdUser = userService.create({ user });
  res.json(createdUser);
}

export function replace(req, res) {
  const { id } = req.params;
  const newUser = req.body;
  const replacedUser = userService.replace({ id, newUser });
  res.json(replacedUser);
}

export function update(req, res) {
  const { id } = req.params;
  const newProps = req.body;
  const updatedUser = userService.update({ id, newProps });
  res.json(updatedUser);
}

export function markAsDelete(req, res) {
  const { id } = req.params;
  const nonDeletedUsers = userService.markAsDelete({ id });
  res.json(nonDeletedUsers);
}

export function remove(req, res) {
  const { id } = req.params;
  const nonDeletedUsers = userService.remove({ id });
  res.json(nonDeletedUsers);
}
