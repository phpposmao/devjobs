const { DataTypes, Model } = require('sequelize');

class Framework extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 15],
            msg: 'Nome da ferramenta precisa ter entre 1 e 15 caracteres',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'frameworks',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Language, { foreignKey: 'language_id' });
  }
}

module.exports = Framework;
