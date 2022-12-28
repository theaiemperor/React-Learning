const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name : {type : String , required : true} , 
    password : {type : String , required : true } , 
    gmail : {type : String , required : true , unique : true} , 
    timestamp : {type : Date, default : Date.now} 
})

const User = mongoose.model("user", userSchema);
User.createIndexes()      // for preventing multiple occurence of same  values
module.exports = User;