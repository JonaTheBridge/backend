import Router from 'express';
import usersRouter from './users/users.router.js';
import * as authController from './auth/auth.controller.js';

const router = Router();

router.use('/users', usersRouter);

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
