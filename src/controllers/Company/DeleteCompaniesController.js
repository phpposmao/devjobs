const Company = require('../../models/Company');

class DeleteCompaniesController {
  async handle(request, response) {
    const { id } = request.params;

    const company = await Company.findByPk(id);

    if (!company) {
      return response.status(400).json({
        errors: ['Empresa não existe'],
      });
    }

    await company.destroy();

    return response.json(null);
  }
}

module.exports = DeleteCompaniesController;
