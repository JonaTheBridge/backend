import * as userService from './users.service.js';

export async function getAll(req, res) {
  const users = await userService.getAll();
  res.json(users);
}

export async function getLength(req, res) {
  const length = await userService.getLength();
  res.json(length);
}

export async function getRandom(req, res) {
  const randomUser = await userService.getRandom();
  res.json(randomUser);
}

export async function getById(req, res) {
  const { id } = req.params;
  const userById = await userService.getById({ id });
  res.json(userById);
}

export async function getByFilter(req, res) {
  const filter = req.query;
  const filteredUsers = await userService.getByFilter({ filter });
  res.json(filteredUsers);
}

export async function create(req, res) {
  const user = req.body;
  const createdUser = await userService.create({ user });
  res.json(createdUser);
}

export async function replace(req, res) {
  const { id } = req.params;
  const newUser = req.body;
  const replacedUser = await userService.replace({ id, newUser });
  res.json(replacedUser);
}

export async function update(req, res) {
  const { id } = req.params;
  const newProps = req.body;
  const updatedUser = await userService.update({ id, newProps });
  res.json(updatedUser);
}

export async function markAsDeleted(req, res) {
  const { id } = req.params;
  const nonDeletedUsers = await userService.markAsDeleted({ id });
  res.json(nonDeletedUsers);
}

export function remove(req, res) {
  const { id } = req.params;
  const nonDeletedUsers = userService.remove({ id });
  res.json(nonDeletedUsers);
}
