const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo : { type : Number, required : true},
  class : {type : String},
  email: { type: String, required: true, unique: true },
  phone: { type: Number},
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Student = mongoose.model("student", StudentSchema);
