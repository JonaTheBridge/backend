import Router from 'express';
import * as usersController from './users.controller.js';

const router = Router();

router.get('/all', usersController.getAll);
router.get('/length', usersController.getLength);
router.get('/random', usersController.getRandom);
router.get('/filter', usersController.getByFilter);
router.get('/:id', usersController.getById);
router.get('/pagination/:page/:itemsPerPage', usersController.getPaginated);

router.put('/:id', usersController.replace);

router.patch('/:id', usersController.update);
router.patch('/delete/:id', usersController.markAsDelete);

router.delete('/:id', usersController.remove);

export default router;
