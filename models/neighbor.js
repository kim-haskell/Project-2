module.exports = function(sequelize, DataTypes) {
    const Neighbor = sequelize.define("Neighbor", {
      name: DataTypes.STRING
    });
  
    Neighbor.associate = function(models) {

      Neighbor.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Neighbor;
  };
  