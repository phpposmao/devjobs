const Company = require('../../models/Company');

class ListCompaniesController {
  async handle(request, response) {
    const companies = await Company.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return response.json(companies);
  }
}

module.exports = ListCompaniesController;
