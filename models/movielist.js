'use strict';
module.exports = (sequelize, DataTypes) => {
  var movieList = sequelize.define('movieList', {
    movieId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  movieList.associate = function(models) {
    // associations can be defined here
    models.movieList.belongsTo(models.user)
  };
  return movieList;
};
