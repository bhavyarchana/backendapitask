//  import
 const express=require("express")
 require("./connection")
 var stdModel = require("./model/student")

//  initialize
var app=express()


// midd
app.use (express.json());

// api creation
app.post('/add',async(req,res)=>{
    try {
         await stdModel(req.body).save()
         res.send("data added")
    } catch (error) {
        console.log(error);
        
    }
})
app.get('/view',async(req,res)=>{
    try {
        empee = await stdModel.find()
        res.send(empee);
    } catch (error) {
        console.log(error);
        
    }
})

app.delete('/remove/:id',async(req,res)=>{
    try {
        await stdModel.findByIdAndDelete(req.params.id)
        res.send("data Delete");
    } catch (error) {
        console.log(error);
    }
})

app.put('/edit/:id',async(req,res)=>{
    try {
        await stdModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("update successfully");
    } catch (error) {
        console.log(error);
    }
})

// port setting
app.listen(2802,()=>{
    console.log("port is Running")
})