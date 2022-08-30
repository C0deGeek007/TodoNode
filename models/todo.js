const {DataTypes, Model } = require('sequelize');
const db=require('../db/index');
const sequelize=db.sequelize
class Todo extends Model {}

Todo.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    // Model attributes are defined here
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.ENUM('incomplete','complete'),
        allowNull:false,
        defaultValue:'incomplete'
    }
  }, {
    sequelize,
    modelName: 'Todo',
    createdAt:false,
    updatedAt:false
});

module.exports=Todo;