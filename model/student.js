const mongoose= require("mongoose");

var schema= mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Rollno:Number
})

var SudentModel = mongoose.model("sudent",schema)
module.exports=SudentModel