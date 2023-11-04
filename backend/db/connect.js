const mongoose=require('mongoose');


const connect=(uri)=>{
    console.log(`connect`);
    return mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,})
}
module.exports=connect;