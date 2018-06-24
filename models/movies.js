'use strict';
module.exports = (sequelize, DataTypes) => {
  var movies = sequelize.define('movies', {
    title: DataTypes.STRING
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};