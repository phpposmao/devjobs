const Language = require('../../models/Language');

class CreateLanguagesController {
  async handle(request, response) {
    const newLanguage = await Language.create(request.body);

    const { id, name, file_extension } = newLanguage;

    return response.json({ id, name, file_extension });
  }
}

module.exports = CreateLanguagesController;
