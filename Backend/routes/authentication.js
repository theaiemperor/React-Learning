const express = require("express");
const User = require("../models/UserSchema");
const {body , validationResult} = require("express-validator");

const router = express.Router();


// We will insert an array into post request for creating validations
router.post("/", 
[
    body('name' , "Enter a valid name").isLength({min : 3}),
    body('password').isLength({min : 3}),
    body('gmail').isEmail(),
], 

(req, res) => {

    // Checking validations
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    // Creating User

    // first method : 
    // const databody = req.body;
    // const user = User(databody);
    // user.save();
    // res.send("Created User");

    User.create({
        name : req.body.name,
        password : req.body.password,
        gmail : req.body.gmail,
    }).then(user => res.json(user)).catch(err=>{console.log("Error"); res.json(err)});



})


module.exports = router;