const { Router } = require('express');

const CreateUsersController = require('../controllers/User/CreateUsersController');
const ListUsersController = require('../controllers/User/ListUsersController');
const DeleteUsersController = require('../controllers/User/DeleteUsersController');
const AuthenticateUsersController = require('../controllers/User/AuthenticateUsersController');

const usersRoutes = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const deleteUsersController = new DeleteUsersController();
const authenticateUsersController = new AuthenticateUsersController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.delete('/:id', deleteUsersController.handle);
usersRoutes.post('/login', authenticateUsersController.handle);

module.exports = usersRoutes;
