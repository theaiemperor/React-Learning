const connectToMongo = require("./db");
const express = require("express");
const cores = require("cors");

connectToMongo();

const app = express()
const port = 5000;

// We have to use this mediator to send data in json formate
app.use(express.json());
app.use(cores());


// Available routes
app.use("/api/authenticate" , require("./routes/authentication"))
app.use('/api/authenticate', require('./routes/Notes'))




app.get("/" , (request , responce)=>{
    responce.send("Responsce coming from backend.......");
})

app.listen(port , ()=>{
    console.log(`App listing at ${port}`)
})