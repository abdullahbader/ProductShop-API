
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username : { type: DataTypes.STRING,
        unique:true
     },
    password : {
      type: DataTypes.STRING,
      
    },
   
    email : DataTypes.STRING,

    firstName :{
        type: DataTypes.STRING,

    },
    lastName :{
        type: DataTypes.STRING,

    }

  });
  User.associate = (models) => {
    User.hasMany(models.Shop, {
      foreignKey: "userId",
      as: "users",
    });
    models.Shop.belongsTo(User, {
      foreignKey: "userId",
    });
  }


  
  return User;
};
