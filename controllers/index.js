const express = require('express')
const router = express.Router();
const user=require('./userController');

router.use('/user',user);

module.exports=router;