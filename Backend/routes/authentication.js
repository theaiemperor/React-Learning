const express = require("express");

const router = express.Router();

router.get("/" , (req , res)=>{
object = {
    name : "authentication.js",
    work : "authenticate the user",
    developer : "Arman",
}
    res.json(object)

})

module.exports = router;