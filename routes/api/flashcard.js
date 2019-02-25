const express = require("express");
const router = express.Router();

/* Features
2. Edit Flashcard Questions and Answers
3. Delete Flashcards
4. Answer Shown When requested.
5. Ability to self grade your own answer
6. Sort cards by answer ranking ascending
   Bad Answer => Rank = 0
   Good Answer => Rank = Rank + 1
   Great Great => Rank = Rank + 2 */

// FlashCard Model
const FlashCard = require("../../models/FlashCard");

// @route   GET api/flashcard/all
// @desc    Get All Flashcards
// @access  Public
router.get("/all", (req, res) => {
  FlashCard.find()
    .sort({ rank: -1 })
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

// @route   PUT api/flashcard/edit/:id
// @desc    PUT  Flashcards
// @access  Public
router.put("/edit/:id", (req, res) => {
  FlashCard.findById(req.params.id).then(card => {});
});

module.exports = router;
