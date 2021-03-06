const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  pdf : { type : Array},
  name: { type: String, required: true },
  subject : {type : String, required : true},
  class: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Chapter = mongoose.model("chapter", StudentSchema);
