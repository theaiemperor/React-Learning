const express = require("express");
const User = require("../models/UserSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const router = express.Router();


// We will insert an array into post request for creating validations
router.post("/",
    [
        body('name', "Enter a valid name").isLength({ min: 3 }),
        body('password').isLength({ min: 3 }),
        body('email').isEmail(),
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.status(400).json({ user: "User already exists" })
            }

            // Using password Hashing
            const passwordSalt = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(req.body.password , passwordSalt);

            user = await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
            });
            res.status(200).json({ Ok: "User created" });

        } catch (error) {
            res.status(500).send("Backend Error")
        }
    })


module.exports = router;