let mongoose= require("mongoose")
let UserSc3=new mongoose.Schema({
     "userId":Number,
     "roomId":Number,
     "checkIn":Date, 
     "checkOut":Date, 
     "status":Boolean

})
let md3=mongoose.model("md3",UserSc3)
module.exports={md3}