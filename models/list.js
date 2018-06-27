'use strict';
module.exports = (sequelize, DataTypes) => {
  var list = sequelize.define('list', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  list.associate = function(models) {
    // associations can be defined here
    models.list.belongsToMany(models.movie, {through: "moviesLists"});
    models.list.belongsTo(models.user);
  };
  return list;
};
