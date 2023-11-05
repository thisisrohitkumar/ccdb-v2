const mongoose = require("mongoose");

require("dotenv").config();

let url = process.env.MONGODB_URL;

const connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {console.log("DB connected successfully.")})
    .catch((err) => {
        console.log("DB connection issues.");
        console.error(err);
        process.exit(1); 
    });
}

module.exports =connect;