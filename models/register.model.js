const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({
   Name:String,
   Email:String,
   Password:String,
   

})

const UserModel=mongoose.model("userdata",UserSchema)

module.exports={UserModel}