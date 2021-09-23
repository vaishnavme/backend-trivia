const express = require("express");
const { getQuizById } = require("../controllers/param");
const router = express.Router();
const { getAllQuiz, getQuizDetails } = require("../controllers/quiz.controller");

router.get("/", getAllQuiz);
router.param("quizID", getQuizById);
router.get("/:quizID", getQuizDetails);

module.exports = router;