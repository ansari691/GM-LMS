const express = require("express");

const Chapter = require("../../models/Chapter");

const router = express.Router();

router.get("/", (req, res) => res.json("chapter api route"));



router.post("/", async (req, res) => {
  try {
    const newChapter = new Chapter({
      name: req.body.name,
      subject: req.body.subject,
      class: req.body.class
    });
    const chapter = await newChapter.save();

    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

//By class name and subject
router.get("/:class/:subject/:name", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      name: req.params.name,
      subject: req.params.subject,
      class: req.params.class
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

//By class
router.get("/:class", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      class: req.params.class
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

//By subject
router.get("/:subject", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      subject: req.params.subject
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const chapter = await Chapter.find({
      name: req.params.name
    });
    return res.json(chapter);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
