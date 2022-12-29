const mongoose = require("mongoose");
const {Schema} = mongoose;

const notesSchema = new Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user'},  // user derived from userschema's user
    title : {type : String , required : true} , 
    description : {type : String , required : true} , 
    tag : {type : String , default : "General"} , 
    timestamp : {type : Date, default : Date.now} 
})

module.exports = mongoose.model("noteOfuser", notesSchema);