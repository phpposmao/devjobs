const { Router } = require('express');

const CreateLanguagesController = require('../controllers/Language/CreateLanguagesController');
const ListLanguagesController = require('../controllers/Language/ListLanguagesController');
const DeleteLanguagesController = require('../controllers/Language/DeleteLanguagesController');

const languagesRoutes = Router();

const createLanguagesController = new CreateLanguagesController();
const listLanguagesController = new ListLanguagesController();
const deleteLanguagesController = new DeleteLanguagesController();

languagesRoutes.post('/', createLanguagesController.handle);
languagesRoutes.get('/', listLanguagesController.handle);
languagesRoutes.delete('/:id', deleteLanguagesController.handle);

module.exports = languagesRoutes;
