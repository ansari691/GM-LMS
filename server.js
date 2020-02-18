const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectDB = async () => {
  try {
    //mongodb://username:password@host:port/database
    //mongodb://unigro:Unigro%40123@103.123.47.130:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
    //mongodb://103.123.47.130:27017/test-
    await mongoose.connect("mongodb+srv://gmlms:gmlms123@cluster0-m7ysv.mongodb.net/test?retryWrites=true&w=majority", {
    //mongodb+srv://gmlms:gmlms123@cluster0-m7ysv.mongodb.net/test?retryWrites=true&w=majority  
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};



app.use(express.json());

app.listen(5000 , () => console.log("server running"));



app.get("/", (req, res) => {
  return res.send("home route");
});


app.use('/api/student', require('./routes/api/student'));
app.use('/api/chapter', require('./routes/api/chapter'));


connectDB();