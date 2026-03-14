const mongoose = require("mongoose")
require("dotenv").config();


function connectToDB(){
    console.log("Database connection initiated...");
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Databse Connection Established.")
    })

}

// connectToDB()

module.exports = connectToDB;