const db=require('./db/index');
const express = require('express')
const app = express();
const controller=require('./controllers/index');

app.use('/api',controller);

db.sequelize.sync({alter:true}).then(()=>{
    app.listen(3000,()=>{
        console.log("server started");
    })
})