require("dotenv").config();
//get connecetDB
const connectDB=require("./db/connect")
// get model
const user=require("./models/userschema")

//get product json  data
//const ProductJson=require("./products.json");
const userJson=require("./user.json");
const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URL)
        // await Product.create(ProductJson)
        await user.deleteMany();
        const users = await user.create(userJson)
        console.log("Data inserted successfully:",users)
        console.log("success")
    }catch(error){
        console.log(error);
    }
}
start()
