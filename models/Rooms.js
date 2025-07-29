const { default: mongoose } = require("mongoose")
let Mongoose=require("mongoose")
let UserSc2= new Mongoose.Schema({"number":Number,
     "type":String,
     "price":Number,
      "isAvailable":Boolean
})
let md2=mongoose.model("md2",UserSc2)
module.exports={md2}