require("dotenv").config();
const express=require("express");
//instance get kar lete hai
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const cors = require('cors')
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");
app.use(multer().any())
const connectdb=require("./db/connect");


app.use(cors());


//const Product_route=require("./routes/product");
const courses_routes=require("./routes/courseRoute")
const instructors_routes=require("./routes/instructorRoute")
const users_routes=require("./routes/userRoute")
const review_routes=require("./routes/reviewRoute")

app.get("/",(req,res)=>{
    res.send("hi i m live");
}); 
//root define karege ,connect with server
//jab koi request karege toh usko yah msg milega

//middleware or set to router
//app.js ko batane b zaruri hai  ki new route use kar rahe hai
app.use("/api/courses",courses_routes)
app.use("/api/instructors",instructors_routes)
app.use("/api/users",users_routes)
app.use("/api/review",review_routes)

const start=async()=>{
    try{
        await connectdb(process.env.MONGO_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} YES I AM CONNECTED`);
        });
    }//check toh karle ki port connect hua hai ya nahi hua
    catch(error){
        console.log(error);
    }
}
start();
// aab server ko listen karne hai(function k through karege aur asyn await wala func hoga)
