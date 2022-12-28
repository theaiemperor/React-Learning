const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express()
const port = 3000;


// Available routes
app.use("/api/authenticate" , require("./routes/authentication"))



app.get("/" , (request , responce)=>{
    responce.send("Responsce coming from backend.......");
})

app.listen(port , ()=>{
    console.log(`App listing at ${port}`)
})