let mongoose = require('mongoose');
let UserSc1 = new mongoose.Schema({
    "_id":String,
    "name":String, 
    "email":String,
     "password" :String, 
     "isAdmin":Boolean});
     
let mod1= mongoose.model("md1",UserSc1)  
module.exports={mod1}
