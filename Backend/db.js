const mongoose = require("mongoose");

const MongoUrl = "mongodb://localhost:27017/backendUsers"

const connectToMongo = ()=>{
    mongoose.connect(MongoUrl , ()=>{console.log("Connection Established sucessfully.");})
}

module.exports = connectToMongo;