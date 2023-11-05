require("dotenv").config();
//get connecetDB
const connectDB=require("./db/connect")
// get model
const review=require("./models/reviewschema")

//get product json  data
//const ProductJson=require("./products.json");
const reviewsJson=require("./review.json");
const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URL)
        // await Product.create(ProductJson)
        await review.deleteMany();
        const reviews = await review.create(reviewsJson)
        console.log("Data inserted successfully:",reviews)
        console.log("success")
    }catch(error){
        console.log(error);
    }
}
start()

