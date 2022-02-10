const Framework = require('../../models/Framework');

class CreateFrameworksController {
  async handle(request, response) {
    const newFramework = await Framework.create(request.body);

    const { id, name } = newFramework;

    return response.json({ id, name });
  }
}

module.exports = CreateFrameworksController;
