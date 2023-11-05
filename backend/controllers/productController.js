//let setup controllers
const { query } = require("express");
const Product=require("../models/productschema");
const getAllProducts=async(req,res)=>{
   
    const {company,name,price,feature,sort,select}=req.query;
    
  
    const queryobject={};
    if(company){
        queryobject.company=company;
        console.log(queryobject);
    }
    if(name){
        queryobject.name={$regex:name,$options:"i"};
        console.log(queryobject);
    }
    if(feature){
        queryobject.feature=feature;
        console.log(queryobject);

    }
    if(price){
        queryobject.price=price;
        console.log(price);
    }
   
     let apiData=Product.find(queryobject);
     
     if(sort){
        //let sortfix=sort.replace(","," ");
        let sortfix=sort.split(",").join(" ");
        apiData=apiData.sort(sortfix);
     }
     
     if(select){
        let selectfix=select.split(",").join(" ");
        apiData=apiData.select(selectfix);
     }

     let page=Number(req.query.page) || 1;
     let limit =Number(req.query.limit) || 5;
     let skip=(page-1)*limit;
     apiData=apiData.skip(skip).limit(limit);


    const Products=await apiData;
    //await Product.deleteMany({});
    res.status(200).json({ Products ,nbHits:Products.length});
};

const getAllProductsTesting=async(req,res)=>{
 
    const {company,name,price,feature,sort,select}=req.query;
    const queryobject={};
    if(company){
        queryobject.company=company;
        console.log(queryobject);
    }
    if(name){
        queryobject.name={ $regex:name ,$options:"i"};
        console.log(queryobject);
    }
    
    if(price){
        queryobject.price=price;
        console.log(price);
    }
    if(feature){
        queryobject.feature=feature;
        console.query(feature);
    }

    let apiData=Product.find(queryobject);
   
    if(sort){
        //let sortfix=sort.replace(","," ");
      let sortfix=sort.split(",").join(" ");
        apiData=apiData.sort(sortfix);
    }
    if(select){
        let selectfix=select.split(",").join(" ");
        apiData=apiData.select(selectfix);
    }
    const Products=await apiData;
    res.status(200).json({ Products,nbHits:Products.length});
};
module.exports={getAllProducts,getAllProductsTesting};
