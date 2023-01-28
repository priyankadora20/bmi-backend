const express =require("express")

const {CalModel}=require("../models/calculateBMI.model")

const CalRouter =express.Router()

CalRouter.get("/",async(req,res)=>{
    const userID=req.body.CalId
    try{
        const caluser=await CalModel.find({CalId:userID})
        res.send(caluser)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})


CalRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        // await CalModel.insertMany(payload)
        const new_note=new CalModel(payload)
        await new_note.save()
        console.log(payload)
        res.send({"mesg":"detail save successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})


CalRouter.delete("/delete/:calculid",async (req,res)=>{
    const userID=req.body.CalId
    // const payload=req.body;
    console.log(req.headers,userID)
    const calculID=req.params.calculid
    console.log(calculID)
    const cal=await CalModel.findOne({_id:calculID})
    // console.log("not",note.NoteID,"use",userID)
    // console.log("cal",cal,calculID)

    if(userID!==cal.CalId){
        res.send("not authorised")

    }
    else{
        try{
            await CalModel.findByIdAndDelete({_id:calculID})
            console.log("calid",calculID)
            res.send({"meg":"one note delete successfully"})
        }
        catch(err){
            console.log(err)
            res.send("something wrong in deleting the note")
        }

    }
    
    
    
})

module.exports={CalRouter}