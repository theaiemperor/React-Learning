const mongoose = require("mongoose");

const MongoUrl = "mongodb://127.0.0.1:27017/backendUsers"

const connectToMongo = ()=>{
    mongoose.connect(MongoUrl , ()=>{console.log("Connection Established sucessfully.");})
}

module.exports = connectToMongo;