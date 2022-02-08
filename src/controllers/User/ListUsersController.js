const User = require('../../models/User');

class ListUsersController {
  async handle(request, response) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return response.json(users);
  }
}

module.exports = ListUsersController;
