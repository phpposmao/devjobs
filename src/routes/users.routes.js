const { Router } = require('express');

const CreateUsersController = require('../controllers/User/CreateUsersController');
const ListUsersController = require('../controllers/User/ListUsersController');
const DeleteUsersController = require('../controllers/User/DeleteUsersController');

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const deleteUsersController = new DeleteUsersController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.delete('/:id', deleteUsersController.handle);

module.exports = usersRoutes;
