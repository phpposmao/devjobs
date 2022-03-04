const jwt = require('jsonwebtoken');
const User = require('../../models/User');

class AuthenticateUserController {
  async handle(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(401).json({
        errors: ['Empresa não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return response.status(404).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, 'dasnijfhnfdidfodfsfofjdfj468474879a7sdff68', {
      expiresIn: '7d',
    });

    return response.json({
      token,
      user: {
        name: user.name,
        id,
        email,
      },
    });
  }
}

module.exports = AuthenticateUserController;
