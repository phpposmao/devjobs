const Framework = require('../../models/Framework');

class DeleteFrameworksController {
  async handle(request, response) {
    const { id } = request.params;

    const framework = await Framework.findByPk(id);

    if (!framework) {
      return response.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    await framework.destroy();

    return response.json(null);
  }
}

module.exports = DeleteFrameworksController;
