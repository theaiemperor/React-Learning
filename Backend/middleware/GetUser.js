const jwt = require("jsonwebtoken");

const JWT_SECRET = "This is a secret string for signing jwt token.";

const fetchUser = (req, res , next)=>{
    const token = req.header('authToken');

    if(!token){
        res.status(401).send({error : "Token not found."});
    }

    try {
        const data = jwt.verify(token , JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Token not found."});
    }
}

module.exports = fetchUser;