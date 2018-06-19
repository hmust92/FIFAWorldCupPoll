module.exports = function(sequelize, DataTypes) {
  var vote = sequelize.define("vote", {
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    matchID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "WC",
      validate: {
        len: [1]
      }
    }
  });

  vote.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    vote.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return vote;
};