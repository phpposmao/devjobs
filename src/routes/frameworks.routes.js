const { Router } = require('express');

const CreateFrameworksController = require('../controllers/Framework/CreateFrameworksController');
const ListFrameworksController = require('../controllers/Framework/ListFrameworksController');
const DeleteFrameworksController = require('../controllers/Framework/DeleteFrameworksController');

const frameworksRoutes = Router();

const createFrameworksController = new CreateFrameworksController();
const listFrameworksController = new ListFrameworksController();
const deleteFrameworksController = new DeleteFrameworksController();

frameworksRoutes.post('/', createFrameworksController.handle);
frameworksRoutes.get('/', listFrameworksController.handle);
frameworksRoutes.delete('/:id', deleteFrameworksController.handle);

module.exports = frameworksRoutes;
