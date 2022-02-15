const jwt = require('jsonwebtoken');
const Company = require('../../models/Company');

class AuthenticateCompanyController {
  async handle(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const company = await Company.findOne({ where: { email } });

    if (!company) {
      return response.status(401).json({
        errors: ['Empresa não existe'],
      });
    }

    if (!(await company.passwordIsValid(password))) {
      return response.status(404).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = company;
    const token = jwt.sign({ id, email }, 'dasnijfhnfdidfodfsfofjdfj468474879a7sdff68', {
      expiresIn: '7d',
    });

    return response.json({
      token,
      company: {
        name: company.name,
        id,
        email,
      },
    });
  }
}

module.exports = AuthenticateCompanyController;
