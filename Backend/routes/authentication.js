const express = require("express");
const User = require("../models/UserSchema");

const router = express.Router();


// Storing data using post request in mongodb
router.post("/", (req, res) => {
    const databody = req.body;      // This will take data as it is , we can do console.log
    const user = User(databody);    // This will convert data into UserSchema formate , we can do console.log
    user.save();                                // This will save all data into mongodb database.
    res.send("Create Users");
})


module.exports = router;