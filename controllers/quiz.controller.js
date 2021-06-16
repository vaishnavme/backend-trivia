const { QuizData } = require("../models/quizdata.model");

const getAllQuiz = async(req, res) => {
    try {
        const quizdata = await QuizData.find({});
        res.json({
            success: true,
            quizdata
        })
    } 
    catch(err) {
        res.status(500).json({
            success: false,
            message: `Unable to fetch data ERROR: ${err}`
        })
    }
}

const getQuizDetails = async(req, res) => {
    const quizdata = req.quizdata;
    console.log(quizdata);
    res.json({
        success: true,
        quizdata
    })
}

module.exports = {
    getAllQuiz,
    getQuizDetails
}