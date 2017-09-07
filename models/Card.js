module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    assignedTo: DataTypes.STRING,
    status: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Card;
};