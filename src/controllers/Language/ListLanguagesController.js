const Language = require('../../models/Language');

class ListLanguagesController {
  async handle(request, response) {
    const languages = await Language.findAll({
      attributes: ['id', 'name', 'file_extension'],
    });

    return response.json(languages);
  }
}

module.exports = ListLanguagesController;
