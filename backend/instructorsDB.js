require("dotenv").config();
//get connecetDB
const connectDB=require("./db/connect")
// get model
const instructor=require("./models/instructorschema")

//get product json  data
//const ProductJson=require("./products.json");
const instructorsJson=require("./instructors.json");
const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URL)
        // await Product.create(ProductJson)
        await instructor.deleteMany();
        const instructors = await instructor.create(instructorsJson)
        console.log("Data inserted successfully:",instructors)
        console.log("success")
    }catch(error){
        console.log(error);
    }
}
start()

