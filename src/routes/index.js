const { Router } = require('express');

const companiesRoutes = require('./companies.routes');

const router = Router();

router.use('/companies', companiesRoutes);

module.exports = router;
