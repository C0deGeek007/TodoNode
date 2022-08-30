const userRepository=require('../repository/userRepository');

module.exports={
    getAllUser:()=>{
        console.log("inside get all user service");
        return userRepository.getAllUser();
    },

    addUser:(data)=>{
        return userRepository.addUser(data);
    }
}