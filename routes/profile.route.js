const express =require("express")

const {UserModel}=require("../models/User.module")

const ProfileRouter =express.Router()

ProfileRouter.get("/",async(req,res)=>{
    const userID=req.body.ProfileId
    try{
        const getuser=await UserModel.find({ProfileId:userID})
        res.send(getuser)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})



module.exports={ProfileRouter}