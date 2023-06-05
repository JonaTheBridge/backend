import nodemailer from 'nodemailer';
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

export async function getChangePasswordMail({ email }) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, // https://support.microsoft.com/es-es/office/configuraci%C3%B3n-pop-imap-y-smtp-para-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"FullStack PartTime" <theBridgeFsPt@outlook.com>',
    to: email || 'theBridgeFsPt@outlook.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
}

export async function getById({ id }) {
  const user = await usersRepo.getById({ id });
  return user;
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
