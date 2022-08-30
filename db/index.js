const { Sequelize } = require('sequelize');
const  sequelize = new Sequelize('todo', 'root', 'Root@123', {
    host: 'localhost',
    dialect: 'mysql',
});

const db={};
db.sequelize=sequelize;
module.exports = db;
db.User=require('../models/user');
db.Todo=require('../models/todo');

db.User.hasMany(db.Todo);

// syncModels =async ()=>{
//     await sequelize.sync({ alter: true });
//     sequelize.models.User.hasMany(sequelize.models.Todo);
// }

// syncModels();

// module.exports=sequelize;
// require('../models/user');
// require('../models/todo');


