import jwt from 'jsonwebtoken';
import Company from '../models/Company';

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, 'dasnijfhnfdidfodfsfofjdfj468474879a7sdff68');
    const { id, email } = dados;

    const company = await Company.findOne({
      where: {
        id,
        email,
      },
    });

    if (!company) {
      return response.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    request.companyId = id;
    request.companyEmail = email;

    return next();
  } catch {
    return response.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
