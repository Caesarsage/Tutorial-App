 const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
    .then(user=> {
        if(!user) {
            return res
            .status(404)
            .send("User not fould please provide valid credentials");
        }
        bcrypt.compare(password, user.password).then(valid =>{
            if(!valid){
                return res
                .status(403)
                .send(
                    "Incorrect username or password, please review details and try agian"
                );
            }
            const token = jwt.sign(
                {email: user.email, _id:user._id , role: user.role},
                "caesarsage",
                { expiresIn: "1hr"}
            );
            res.status(200).send({
                _id:user._id,
                role : user.role,
                token
            });
        });
    })
    .catch (err => console.log(err));
}
