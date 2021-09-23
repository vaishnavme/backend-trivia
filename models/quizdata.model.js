const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema({
    name: {type: String, required: "Quiz name is required"},
    coverImageUrl: {type: String, required: "Cover Image required"},
    totalScore: {type: Number, required: "Total Quiz Score required"},
    questions: [{
        question: {type: String, required: "Quiz question required"},
        points: {type: Number, required: "Per quiz points required"},
        negativePoints: {type: Number, required: "Per quiz negative points required"},
        options: [{
            content: {type: String, required: "Option is required"},
            isAnswer: {type: Boolean, required: "Option value is required"}
        }]
    }]
})

const QuizData = mongoose.model("Quizdata", QuizSchema);
module.exports = { QuizData }