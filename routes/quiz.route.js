const express = require("express");
const router = express.Router();
const { getAllQuiz } = require("../controllers/quiz.controller");

router.get("/", getAllQuiz);

module.exports = router;