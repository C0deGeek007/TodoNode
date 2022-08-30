const express = require('express')
const router = express.Router();
const userService=require('../services/userService');
const bodyParser = require('body-parser');


router.use(bodyParser.json());

router.get('/',(req,res)=>{
    userService.getAllUser().then((response)=>{
        res.send(response);
    }).catch((err)=>{
        console.log(err);
    });
})

router.post('/signup',(req,res)=>{
    userService.addUser(req.body).then((response)=>{
        res.send(response);
    }).catch((err)=>{
        console.log(err.message);
        res.send("something went wrong");
    })
})

module.exports = router