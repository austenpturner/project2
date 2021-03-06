// Creating our Duck model
module.exports = (sequelize, DataTypes) => {
  const Duck = sequelize.define('Duck', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30]
      }
    },
    hungry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    sleepy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'yellow'
    }
  });

  Duck.associate = models => {
    Duck.belongsTo(models.User, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
  };

  return Duck;
};
