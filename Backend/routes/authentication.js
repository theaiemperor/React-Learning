const express = require("express");
const User = require("../models/UserSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();


// We will insert an array into post request for creating validations
router.post("/signUp",
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
            const securePassword = await bcrypt.hash(req.body.password, passwordSalt);

            user = await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
            });

            // Creating User Authentication token
            const JWT_SECRET = "This is a secret string for signing jwt token.";
            const data = { user: { id: user.id } }
            const authenticationToken = jwt.sign(data, JWT_SECRET);





            res.status(200).json({ authenticationToken });

        } catch (error) {
            res.status(500).send("Backend Error")
        }
    })



// Authenticating an user without login
router.post("/signIn",
    [
        body('password', "Password cannot be blank").exists(),
        body('email').isEmail(),
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {email , password} = req.body;

        try {
            let user = await User.findOne({ email});
            if (!user) {
                return res.status(400).json({ error: "Invalid credentials" })
            }


            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: "Invalid credentials" })
            }

            const JWT_SECRET = "This is a secret string for signing jwt token.";
            const data = { user: { id: user.id } }
            const authenticationToken = jwt.sign(data, JWT_SECRET);

            res.status(200).json({ authenticationToken });

        } catch (error) {
            res.status(500).send("Backend Error")
        }
    })


module.exports = router;