const Language = require('../../models/Language');

class DeleteLanguagesController {
  async handle(request, response) {
    const { id } = request.params;

    const language = await Language.findByPk(id);

    if (!language) {
      return response.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    await language.destroy();

    return response.json(null);
  }
}

module.exports = DeleteLanguagesController;
