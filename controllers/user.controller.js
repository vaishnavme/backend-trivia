const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const { User } = require('../models/user.model');

const createNewUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const alreadyExistUser = await User.findOne({ username: username });

        if (alreadyExistUser)
            return res.json({
                success: false,
                message: 'Username already exist, Try login'
            });

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, password: hashedPassword });
            const savedUser = await newUser.save();

            const token = jwt.sign({ userId: savedUser._id }, secret);
            res.json({
                success: true,
                user: {
                    _id: savedUser._id,
                    username: savedUser.username
                },
                token,
                message: 'Account created successfully!'
            });
        } catch (err) {
            res.json({
                success: false,
                message: 'Something went wrong!'
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: `unable to create user ERROR: ${err}`
        });
    }
};

const getUserLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            const token = jwt.sign({ userId: user._id }, secret);
            return res.json({
                success: true,
                user: { _id: user._id, username: user.username },
                token,
                message: 'Login Successfully!'
            });
        }
        return res.json({
            success: false,
            user: null,
            message: 'Invalid passowrd!'
        });
    }
    return res.json({
        success: false,
        user: null,
        message: 'No user found with this email'
    });
};

module.exports = {
    createNewUser,
    getUserLogin
};
