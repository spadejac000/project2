'use strict';
module.exports = (sequelize, DataTypes) => {
  var moviesLists = sequelize.define('moviesLists', {
    movieId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  moviesLists.associate = function(models) {
    // associations can be defined here
  };
  return moviesLists;
};