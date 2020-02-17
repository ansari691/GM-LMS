const express = require('express');

const Student = require('../../models/Student');

const router = express.Router();


router.get('/', (req, res) => res.json('student api route'));


router.post("/", async (req, res) => {
    try {
      const studentData = new Student({
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
      return res.json(err);
    }
  });


  module.exports = router;

