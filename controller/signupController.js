const bcrypt = require('bcryptjs');
const User = require('../models/user');

//Student Registration

exports.SignUPStudent = (req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    if (!username || !firstname || !lastname || !email || !password) {
        res.status(400).send({
            status:false,
            message :"All field are required"
        })
        return;
    }
    User.findOne({email}).then(user => {
        if (user) {
            return res.status(423).send({
                status: false,
                message: "email already exist"
            })
        }
    })
    bcrypt.hash(password, 12)
    .then(password => {
        let user = new User({
            username,
            firstname,
            lastname,
            email,
            password,
            role: "Student",
        }) 
        return user.save();
    })
    .then(() => res.status(200).send({
        status: true,
        message: "Student registered successfully"}))
    .catch(err => console.log(err))   
};

exports.SignUpTutor = (req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !username || !firstname || !lastname || !password) {
        res.status(400).send({
            status: false,
            message: "All fields required"
        })
        return;
    } 
    User.findOne({email})
    .then(user => {
        if (user) {
            return res.status(423).send({
                status: false,
                message: "email already exist"
            })
        }
    })
    bcrypt.hash(password, 12)
    .then(password => {
        let tutor = new User({
            username,
            firstname,
            lastname,
            email,
            password,
            role: "Tutor"
        }) 
        return tutor.save();
    })
    .then(() => {
        res.status(200).send("Tutor registered successfully")
    })
    .catch(err => console.log(err))   
}