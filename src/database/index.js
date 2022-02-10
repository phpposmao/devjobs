const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const Company = require('../models/Company');
const Language = require('../models/Language');
const User = require('../models/User');
const Framework = require('../models/Framework');

const models = [Company, Language, User, Framework];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

module.exports = connection;
