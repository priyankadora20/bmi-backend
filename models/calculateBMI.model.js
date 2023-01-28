const mongoose=require("mongoose")


const CalSchema=mongoose.Schema({
    Investment:Number,
    Time:Number,
    Rate:Number,
    Investment_amount:Number,
    Total_interest:Number,
    Maturity_value:Number,

    CalId:String
})

const CalModel=mongoose.model("Cal",CalSchema)

module.exports={CalModel}