const User = require('../../models/User');

class CreateUsersController {
  async handle(request, response) {
    const newUser = await User.create(request.body);

    const { id, name, email } = newUser;

    return response.json({ id, name, email });
  }
}

module.exports = CreateUsersController;
