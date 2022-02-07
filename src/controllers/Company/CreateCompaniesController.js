const Company = require('../../models/Company');

class CreateCompaniesController {
  async handle(request, response) {
    const newCompany = await Company.create(request.body);

    const { id, name, email } = newCompany;

    return response.json({ id, name, email });
  }
}

module.exports = CreateCompaniesController;
