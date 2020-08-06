const { BOOLEAN } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    const Neighbor = sequelize.define("Neighbor", {
      name:{
         type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,30]
        }
    }, 
      pets:{
         type: DataTypes.BOOLEAN,
         defaultValue: false
      }, 
      kids:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }, 
      cars: DataTypes.INTEGER
    });
  
    Neighbor.associate = function(models) {

      Neighbor.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Neighbor;
  };