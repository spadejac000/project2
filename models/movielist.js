'use strict';
module.exports = (sequelize, DataTypes) => {
  var movieList = sequelize.define('movieList', {
    movieId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  movieList.associate = function(models) {
    // associations can be defined here
  };
  return movieList;
};