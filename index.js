const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const { dbConnection } = require("./db/db.connect");

const quizDataRoute = require("./routes/quiz.route");

dbConnection();

app.use("/quizdata", quizDataRoute);

app.get("/", (req, res) => {
    res.send("Trivia App active...")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Project running on http://localhost:${PORT}...`);
})

