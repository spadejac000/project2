'use strict';
module.exports = (sequelize, DataTypes) => {
  var list = sequelize.define('list', {
    name: DataTypes.STRING
  }, {});
  list.associate = function(models) {
    // associations can be defined here
    models.list.belongsToMany(models.movie {through: "movieList"});
    models.list.belongsTo(models.user);
  };
  return list;
};
