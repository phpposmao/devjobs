const { Router } = require('express');

const CreateCompaniesController = require('../controllers/Company/CreateCompaniesController');
const ListCompaniesController = require('../controllers/Company/ListCompaniesController');
const DeleteCompaniesController = require('../controllers/Company/DeleteCompaniesController');

const companiesRoutes = Router();

const createCompaniesController = new CreateCompaniesController();
const listCompaniesController = new ListCompaniesController();
const deleteCompaniesController = new DeleteCompaniesController();

companiesRoutes.post('/', createCompaniesController.handle);
companiesRoutes.get('/', listCompaniesController.handle);
companiesRoutes.delete('/:id', deleteCompaniesController.handle);

module.exports = companiesRoutes;
