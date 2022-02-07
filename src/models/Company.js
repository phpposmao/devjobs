const { DataTypes, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

class Company extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 70],
            msg: 'Nome da empresa precisa ter entre 3 e 70 caracteres',
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [15, 150],
            msg: 'Descrição da empresa precisa ter entre 15 e 150 caracteres',
          },
        },
      },
      cnpj: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'CNPJ já cadastrado',
        },
        validate: {
          len: {
            args: [10, 15],
            msg: 'CNJP inválido',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'A senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (company) => {
      if (company.password) {
        company.password_hash = await bcryptjs.hash(company.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

module.exports = Company;
