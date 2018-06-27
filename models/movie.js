'use strict';
module.exports = (sequelize, DataTypes) => {
  var movie = sequelize.define('movie', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
    models.movie.hasMany(models.comment);
    models.movie.belongsToMany(models.list, {through: "moviesLists"});
  };
  return movie;
};
