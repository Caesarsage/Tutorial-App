const jwt = require('jsonwebtoken');



const token = async (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).json("no token provided, check on login");
    try {
        req.user = jwt.verify(token, 'caesarsage');
        next();
    } catch (err) {
        res.status(400).json("Invalid token!!!")
    }
}

module.exports = {
    token
}