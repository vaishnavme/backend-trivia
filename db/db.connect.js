const mongoose = require("mongoose");

function dbConnection() {
    mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("Connected Successfully..."))
    .catch(error => console.log("mongoose connection failed ERROR: ", error));
}

module.exports = { dbConnection }