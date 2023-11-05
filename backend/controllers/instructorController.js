const {query}=require('express')
const multer=require('multer')
const instructor=require("../models/instructorschema")

exports.getAllinstructors=async(req,res)=>{
   
  const {name,sort,select}=req.query;
  const queryobject={};

  if(name){
      queryobject.name={$regex:name,$options:"i"};
      console.log(queryobject);
  }
  
   let apiData=instructor.find(queryobject);
   
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


  const instructors=await apiData;
  //await Product.deleteMany({});
  res.status(200).json({ instructors ,nbHits:instructors.length});
};
exports.createInstructor = async (req, res) => {
  try {
    const instructors = new instructor(req.body);
    const savedInstructor = await instructors.save();
    res.json(savedInstructor);
  } catch (error) {
    res.status(500).json({ error: 'Error creating an instructor' });
  }
};

// exports.updateInstructor = async (req, res) => {
//   try {
//     const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.instructorId, req.body, { new: true });
//     res.json(updatedInstructor);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating an instructor' });
//   }
// };

exports.updateInstructor = async (req, res) => {
  try {
    // Remove the 'email' field from the request body to ensure it can't be modified
    const { email, ...updatedData } = req.body;

    const updatedInstructor = await instructor.findByIdAndUpdate(
      req.params.instructorId,
      updatedData, 
      { new: true }
    );

    res.json(updatedInstructor);
  } catch (error) {
    res.status(500).json({ error: 'Error updating an instructor' });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    await instructor.findByIdAndRemove(req.params.instructorId);
    res.json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting an instructor' });
  }
};
// module.exports=getAllinstructors