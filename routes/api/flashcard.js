const express = require("express");
const router = express.Router();

/* Features
1. Create new Flashcards
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

// @route   GET api/todos
// @desc    Get All Todos
// @access  Public
router.get("/", (req, res) => {});

module.exports = router;
