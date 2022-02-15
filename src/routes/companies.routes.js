const { Router } = require('express');

const CreateCompaniesController = require('../controllers/Company/CreateCompaniesController');
const ListCompaniesController = require('../controllers/Company/ListCompaniesController');
const DeleteCompaniesController = require('../controllers/Company/DeleteCompaniesController');
const AuthenticateCompaniesController = require('../controllers/Company/AuthenticateCompaniesController');

const companiesRoutes = Router();

const createCompaniesController = new CreateCompaniesController();
const listCompaniesController = new ListCompaniesController();
const deleteCompaniesController = new DeleteCompaniesController();
const authenticateCompaniesController = new AuthenticateCompaniesController();

companiesRoutes.post('/', createCompaniesController.handle);
companiesRoutes.get('/', listCompaniesController.handle);
companiesRoutes.delete('/:id', deleteCompaniesController.handle);
companiesRoutes.post('/login', authenticateCompaniesController.handle);

module.exports = companiesRoutes;
