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


module.exports = {
    getAllQuiz
}