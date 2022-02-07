const { Router } = require('express');

const companiesRoutes = require('./companies.routes');
const languagesRoutes = require('./languages.routes');

const router = Router();

router.use('/companies', companiesRoutes);
router.use('/languages', languagesRoutes);

module.exports = router;
