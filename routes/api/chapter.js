
const express = require("express");
const multer = require("multer");

const Chapter = require("../../models/Chapter");

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/pdfs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

var upload = multer({
  storage: storage
}).array("pdf",10);

//posting an ad
router.post("/", upload, async (req, res) => {
  console.log()
  try {
    const newChapter = new Chapter({
      pdf : req.files,
      name: req.body.name,
      class: req.body.class,
      subject: req.body.subject  
    });

    const chapter = await newChapter.save();

    console.log(chapter);
    res.json(chapter);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});



//Get all chapters
router.get("/", async (req, res) => {
  try {
    const chapters = await Chapter.find();
    return res.json(chapters);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/fy", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      class: "F.Y"
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});


router.get("/sy", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      class: "S.Y"
   
   });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});


router.get("/ty", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      class: "T.Y"
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
