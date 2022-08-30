const db=require('../db/index');

module.exports={
    getAllUser:async ()=>{
        console.log("inside user repository");
        return db.User.findAll();
    },

    addUser:async (userInfo)=>{
        const user=db.User.create(userInfo);
        return user;
    }
}