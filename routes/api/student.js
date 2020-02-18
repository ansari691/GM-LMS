const express = require('express');
const multer = require('multer');

const Student = require('../../models/Student');

const router = express.Router();

var storage = multer.diskStorage({
  destination : (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename : (req, file, cb) => {
      cb(null,  Date.now() +  '_' +  file.originalname );
  }
})

var upload = multer({
  storage : storage,
}).single('image');


router.post("/", async (req, res) => {
    try {
      console.log(req.body);
      const studentData = new Student({
        //imagePath : req.file.filename,
        name : req.body.name,
        rollNo : req.body.rollNo,
        class: req.body.class,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
      });
      const student = await studentData.save();
  
      return res.json(student);
    } catch (err) {
      console.log(req.body);
      return res.json(err);
    }
  });
-

  //get all students
  router.get('/', (req, res) => {
    const students = await Student.find();
    return res.json(students);
  })


  module.exports = router;

