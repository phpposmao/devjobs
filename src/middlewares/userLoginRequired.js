import jwt from 'jsonwebtoken';
import User from '../models/User';

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

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return response.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    request.userId = id;
    request.userEmail = email;

    return next();
  } catch {
    return response.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
