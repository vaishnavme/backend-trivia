const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: 'Name is required'
    },
    password: {
        type: String,
        required
    },
    quizAttend: [
        {
            quiz: {
                type: Schema.Types.ObjectId,
                ref: 'QuizData'
            },
            score: {
                type: Number,
                default: 0
            }
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
