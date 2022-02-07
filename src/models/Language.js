const { DataTypes, Model } = require('sequelize');

class Language extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 15],
            msg: 'Nome da linguagem precisa ter entre 1 e 15 caracteres',
          },
        },
      },
      file_extension: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 5],
            msg: 'Extensão de arquivo da linguagem deve ter entre 1 e 5 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
  }
}

module.exports = Language;
