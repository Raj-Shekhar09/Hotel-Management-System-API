let mongoose=require("mongoose")
let UserSc4=new mongoose.Schema({
    "userId":Number,
    "bookingId":Number,
    "amount":Number, 
    "status":Boolean
})
let md4= mongoose.model("md4",UserSc4)
module.exports={md4}