const User = require('../../models/User');

class DeleteUsersController {
  async handle(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      return response.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    await user.destroy();

    return response.json(null);
  }
}

module.exports = DeleteUsersController;
