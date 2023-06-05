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

export async function getPaginated(req, res) {
  const { page, itemsPerPage } = req.params;
  const paginatedUsers = await userService.getPaginated({ page, itemsPerPage });
  res.json(paginatedUsers);
}

export async function getByFilter(req, res) {
  const filter = req.query;
  const filteredUsers = await userService.getByFilter({ filter });
  res.json(filteredUsers);
}

export async function getChangePasswordMail(req, res) {
  const { email } = req.params;
  try {
    await userService.getChangePasswordMail({ email });
  } catch (error) {
    res.status(500);
    res.json('Some error sending the mail');
  }

  res.status(200);
  res.json('The mail has been sent');
}

export async function getById(req, res) {
  const { id } = req.params;
  const userById = await userService.getById({ id });
  res.json(userById);
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

export async function markAsDelete(req, res) {
  const { id } = req.params;
  const deletedUser = await userService.markAsDelete({ id });
  res.json(deletedUser);
}

export function remove(req, res) {
  const { id } = req.params;
  const nonDeletedUsers = userService.remove({ id });
  res.json(nonDeletedUsers);
}
