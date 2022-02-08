const { Router } = require('express');

const companiesRoutes = require('./companies.routes');
const languagesRoutes = require('./languages.routes');
const usersRoutes = require('./users.routes');

const router = Router();

router.use('/companies', companiesRoutes);
router.use('/languages', languagesRoutes);
router.use('/users', usersRoutes);

module.exports = router;
