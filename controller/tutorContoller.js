const user = require('../models/user');


//create tutor
//retrive a Tutor
const retrieveTutor = (req,res,next)=>{
    user.find(
        {role: 'Tutor'},
        {_id: 1, firstname: 1, lastname: 1, username: 1, email: 1},
        {sort: {firstname: 1}}
    ), (err, result)=>{
        if (err) {
            console,log('error occur');
        } else {
            res.send(results);
            console.log('Tutors Retrieved');
        }
}
}

//retrive one tutor
const findOneTutor = (req, res, next)=>{
    const { id } = req.params;
    user.findById(
        {_id : id},
        {_id: 1 , firstname: 1,lastname:1,username:1,email:1},
        {sort: {firstname: 1}}
    ), (err, result)=>{
        if (err) {
            console,log('error occur');
        } else {
            res.send(results);
            console.log('Tutor Retrieved');
        }
    }
}

//delete a tutor by id
const deactivateTutor = (req,res,next)=>{
    user.findByIdAndDelete(req.param.id, req.body, (err)=>{
        if (err) {
            console.log('tutor deleted')
        }
        res.send(`Tutor deleted`)
        console.log('Tutor deleted succesfully')
    });
}

//Search tutor
const findTutor = (req,res,next)=>{
    user.find(
        { firstname: req.params.name, role: 'Tutor'},
        {_id: 0, firstname:1, lastname:1, username: 1},
        {sort: { username: 1 }} // sort by username
    ), (err, result)=>{
        if (err) {
            console.log('An error occur');
        }else
            res.send(result);
            console.log('Tutor succesfully found');
    }
}

module.exports = {
    retrieveTutor,
    findOneTutor,
    findTutor,
    deactivateTutor,
}