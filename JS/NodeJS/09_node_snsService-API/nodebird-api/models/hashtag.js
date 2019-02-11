module.exports = (sequelize, DataTypes) => (
  sequelize.define('hastag', {
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  })
);