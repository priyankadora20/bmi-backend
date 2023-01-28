const mongoose=require("mongoose")


const ProfileSchema=mongoose.Schema({
   Name:String,
   Email:String,
   ProfileId:String,
   Weight:String,
   Height:String,
   Bmi:String,

})

const ProfileModel=mongoose.model("Profile",ProfileSchema)

module.exports={ProfileModel}