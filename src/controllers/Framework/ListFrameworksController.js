const Framework = require('../../models/Framework');

class ListFrameworksController {
  async handle(request, response) {
    const frameworks = await Framework.findAll({
      attributes: ['id', 'name', 'language_id'],
    });

    return response.json(frameworks);
  }
}

module.exports = ListFrameworksController;
