const express = require("express");

const Chapter = require("../../models/Chapter");

const router = express.Router();

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

//Get all chapters
router.get("/", async (req, res) => {
  try {
    const chapters = await Chapter.find();
    return res.json(chapters);
  } catch (err) {
    return res.json(err);
  }
});

//By Id
// router.get("/:id", async (req, res) => {
//   try {
//     const chapter = await Chapter.findById(req.params.id);
//     return res.json(chapter);
//   } catch (err) {
//     return res.json(err);
//   }
// });

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



// //By class name and subject
// router.get('/:class/:subject/:name', async (req, res) => {
//   try {
//     const chapter = await Chapter.find({
//       name: req.params.name,
//       subject: req.params.subject,
//       class: req.params.class
//     });
//     return res.json(chapter);
//   } catch (err) {
//     return res.json(err);
//   }
// });

// //By class
// router.get('/:class', async (req, res) => {
//   try {
//     console.log(req.params);
//     const chapter = await Chapter.find({
//       class: req.params.class
//     });
//     return res.json(chapter);
//   } catch (err) {
//     return res.json(err);
//   }
// });

// //By subject
// router.get("/:subject", async (req, res) => {
//   try {
//     const chapter = await Chapter.find({
//       subject: req.params.subject
//     });
//     return res.json(chapter);
//   } catch (err) {
//     return res.json(err);
//   }
// });

module.exports = router;
