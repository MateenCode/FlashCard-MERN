const express = require("express");
const router = express.Router();

// FlashCard Model
const FlashCard = require("../../models/FlashCard");

// @route   GET api/flashcard/all
// @desc    Get All Flashcards
// @access  Public
router.get("/all", (req, res) => {
  FlashCard.find()
    .sort({ rank: 1 })
    .then(todo => res.json(todo));
});

// @route   POST api/flashcard/add
// @desc    Post new Flashcards
// @access  Public
router.post("/add", (req, res) => {
  const newFlash = new FlashCard({
    question: req.body.question,
    answer: req.body.answer
  });
  newFlash
    .save()
    .then(flash => res.json(flash))
    .catch(err => console.log(err));
});

// @route   PUT api/flashcard/rank/:id
// @desc    PUT  Flashcards
// @access  Public
router.patch("/rank/:id", (req, res) => {
  FlashCard.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(card => res.json({ statue: true, card }))
    .catch(err => res.json({ statue: false, err }));
});

// @route   PATCH api/flashcard/toggle/:id
// @desc    toggle change complete to false
// @access  Public
router.patch("/toggle/:id", (req, res) => {
  FlashCard.findById(req.params.id).then(card => {
    card.toggle = !card.toggle;
    card.save().then(() => res.json({ success: true }));
  });
});

// @route   DELETE api/flashcard/delete/:id
// @desc    DEL  Flashcards
// @access  Public
router.delete("/delete/:id", (req, res) => {
  FlashCard.deleteOne({ _id: req.params.id })
    .then(card => res.json({ statue: true, card }))
    .catch(err => res.json({ statue: false, err }));
});

module.exports = router;
