const {DataTypes, Model } = require('sequelize');
const db=require('../db/index');
const sequelize=db.sequelize
class User extends Model {}

User.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true
        }
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'User',
    createdAt:false,
    updatedAt:false
});

module.exports=User


