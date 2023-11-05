
//let setup controllers
const { query } = require("express");
const multer=require('multer')
const course=require("../models/courseschema");
const getAllcourses=async(req,res)=>{
   
    const {_id,course_title,duration,category,sort,select}=req.query;
    const queryobject={};
    // if(company){
    //     queryobject.company=company;
    //     console.log(queryobject);
    // }
    if(_id){
        queryobject._id=_id;
        console.log(queryobject);
    }
    if(category){
        queryobject.category={$regex:category,$options:"i"};
        console.log(queryobject);
    }
    if(course_title){
        queryobject.course_title={$regex:course_title,$options:"i"};
        console.log(queryobject);
    }
    // if(feature){
    //     queryobject.feature=feature;
    //     console.log(queryobject);

    // }
    if(duration){
        queryobject.duration=duration;
        console.log(duration);
    }
   
     let apiData=course.find(queryobject);
     
     if(sort){
        //let sortfix=sort.replace(","," ");
        let sortfix=sort.split(",").join(" ");
        apiData=apiData.sort(sortfix);
     }
     
     if(select){
        let selectfix=select.split(",").join(" ");
        apiData=apiData.select(selectfix);
     }

    
     let limit =Number(req.query.limit);
     apiData=apiData.limit(limit);


    const courses=await apiData;
    //await Product.deleteMany({});
    res.status(200).json({ courses ,nbHits:courses.length});
};
// exports.getWebDevelopmentCourses = async (req, res) => {
   
//   };
const getwebdevelopmentcourses=async(req,res)=>{   
const {course_title,duration,category,sort,select}=req.query;
const queryobject={};
// if(company){
//     queryobject.company=company;
//     console.log(queryobject);
// }
if(category){
    queryobject.category={$regex:category,$options:"i"};
    console.log(queryobject);
}
if(course_title){
    queryobject.course_title={$regex:course_title,$options:"i"};
    console.log(queryobject);
}

if(duration){
    queryobject.duration=duration;
    console.log(duration);
}

 let apiData=course.find(queryobject);
 
 if(sort){
    //let sortfix=sort.replace(","," ");
    let sortfix=sort.split(",").join(" ");
    apiData=apiData.sort(sortfix);
 }
 
 if(select){
    let selectfix=select.split(",").join(" ");
    apiData=apiData.select(selectfix);
 }

//  let page=Number(req.query.page) || 1;
//  let limit =Number(req.query.limit) || 6;
//  let skip=(page-1)*limit;
//  apiData=apiData.skip(skip).limit(limit);
  try {
    const webDevelopmentCourses = await course.find({ category: 'Web Development' });
    res.json(webDevelopmentCourses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching web development courses' });
  }
// const courses=await apiData;
// //await Product.deleteMany({});
// res.status(200).json({ courses ,nbHits:courses.length});
};


//-----start testing


// const createCourse = async (req, res) => {
//     const { course_title, description, duration, category, rating } = req.body;
//     const image = req.file.path;
//     const newCourse = new Course({ course_title, description, duration, category, rating, image });
//     newCourse.save((err) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             res.status(201).json({ message: 'Course added successfully' });
//         }
//     });
// };
const createCourse = async (req, res) => {
    const { course_title, description, duration, category, rating, image} = req.body;
    try {
        const newCourse = await new course({ course_title, description, duration, category, rating, image });
        await newCourse.save();
        res.status(201).json({ message: 'Course added successfully' });
        console.log(newCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// const createCourse = async (req, res) => {
//     try {
//         // Check if the expected properties are in req.body
//         if (!req.body || !req.body.course_title || !req.body.description || !req.body.duration || !req.body.category) {
//             return res.status(400).json({ error: "Invalid request. Required properties missing." });
//         }
        
//         const { course_title, description, duration, category, rating } = req.body;
//         const image = req.file.path;
        
//         const newCourse = new Course({ course_title, description, duration, category, rating, image });
        
//         await newCourse.save();
//         res.status(201).json({ message: 'Course added successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
module.exports = {getAllcourses,createCourse,getwebdevelopmentcourses};
//------end testing
