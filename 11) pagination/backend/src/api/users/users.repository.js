import userModel from './users.model.js';

export async function getAll() {
  const users = await userModel
    .find({ deleted: false })
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return users;
}

export async function getLength() {
  const usersLength = await userModel
    .count({ deleted: false })
    .lean();

  return usersLength;
}

export async function getByIndex({ index }) {
  const user = await userModel
    .findOne({}).skip(index)
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return user;
}

export async function getByUsername({ username }) {
  const user = await userModel
    .findOne({ username })
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return user;
}

export async function getById({ id }) {
  const user = await userModel
    .findById(id)
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return user;
}

export async function getPaginated({ skip, limit }) {
  const user = await userModel
    .find()
    .skip(skip)
    .limit(limit)
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return user;
}

export async function getByFilter({ filter }) {
  const users = await userModel
    .find({ deleted: false, ...filter })
    .populate({
      path: 'boss',
      select: 'username -_id',
    })
    .lean();

  return users;
}

export async function create({ username, password }) {
  const newUser = await userModel.create({ username, password });
  return newUser;
}

export async function replace({ id, newUser }) {
  const query = { _id: id };
  const replacedUser = await userModel.findOneAndReplace(query, newUser);
  return replacedUser;
}

export async function update({ id, newProps }) {
  const query = { _id: id };
  const updatedUser = await userModel.findOneAndUpdate(query, newProps);
  return updatedUser;
}

export async function markAsDelete({ id }) {
  const query = { _id: id };
  const newProps = { deleted: true };
  const deletedUser = await userModel.findOneAndUpdate(query, newProps);
  console.log(deletedUser);
  return deletedUser;
}

export async function remove({ id }) {
  const users = await userModel.findByIdAndDelete(id);
  console.log('delete', users);
  return {};
}
