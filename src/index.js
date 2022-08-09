const express = require("express")
const bodyParser=express.json()
const mongoose =require("mongoose")
const route = require("./route/route")
const app =express()
const multer= require("multer");

app.use(bodyParser)
app.use( multer().any())


mongoose.connect("mongodb+srv://Subham_1234:Subham1@cluster0.fzu3b.mongodb.net/group71Database",{
    useNewUrlParser: true
})
.then(()=> console.log('mongoDb is connected'))
.catch((error) => console.log(error));

app.use("/",route)

app.listen(3000, function () {
    console.log("Express app running on port " +  3000);
  });
  