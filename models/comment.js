'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    imdbId: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.movie);
    models.comment.belongsTo(models.user);
  };
  return comment;
};
