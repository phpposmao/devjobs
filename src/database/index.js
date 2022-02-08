const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const Company = require('../models/Company');
const Language = require('../models/Language');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

Company.init(connection);
Language.init(connection);
User.init(connection);

module.exports = connection;
