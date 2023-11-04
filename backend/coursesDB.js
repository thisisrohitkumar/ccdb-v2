require("dotenv").config();
//get connecetDB
const connectDB=require("./db/connect")
// get model
const course=require("./models/courseschema")

//get product json  data
//const ProductJson=require("./products.json");
const coursesJson=require("./courses.json");
const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URL)
        // await Product.create(ProductJson)
        await course.deleteMany();
        const courses = await course.create(coursesJson)
        console.log("Data inserted successfully:",courses)
        console.log("success")
    }catch(error){
        console.log(error);
    }
}
start()

