const { QuizData } = require("../models/quizdata.model");

const getQuizById = async(req, res, next, quizID) => {
    try {
        console.log(quizID);
        const quizdata = await QuizData.findById(quizID);
        if(!quizdata) {
            return res.status(400).json({
                success: false,
                message: `Error getting quiz details`
            })
        }
        req.quizdata = quizdata;
        next();
    } 
    catch(err) {
        res.json({
            success: false,
            message: `Quiz details not found`
        })
    }
}

module.exports = {
    getQuizById
}