const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Trivia App active...")
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Project running on http://localhost:8000...`);
})