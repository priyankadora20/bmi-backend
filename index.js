const express = require("express")
const cors=require("cors")
require("dotenv").config()

const {connection} = require("./config/db")


const {UserRouter} = require("./routes/user.route")
// const{ProfileRouter}=require("./routers/Profile.routes")
const {CalRouter} =require("./routes/calculator.route")
const{authentication}=require("./middlewares/authentication")

const app=express();



app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("welcome")
}) 

app.use("/user",UserRouter)

app.use(authentication)

app.use("/cal",CalRouter)
// app.use("/Profile",ProfileRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on port")
})