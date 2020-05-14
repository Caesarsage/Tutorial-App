const Register = require('../models/register');
const User = require('../models/user')




const registerSubject = (req, res, next) => {
        const { _id } = req.user
        const { name, subject, category} = req.body;
        if (!name || !subject || !category) {
            return res.status(400).json("requires all field")
        }
        User.findOne({role: "Tutor"}, (err, result)=>{
            if (err) {
                console.log('error occur')
            } else {
                res.send(result);
                res.status(423).json("You already registered for this subject")
            }
        });        
        Register.findOne({ name, subject, category }, (err,result)=>{
            if (result) return
        });
    }


const deleteSubject = (req, res, next) => {
        const { _id  } = req.user;
        const { id } = req.params;
        Register.find({person: _id }, (err,result)=>{
            if (err) {
               return res.send('Tutor not registered!!!');
            } else {
               return res.send("Tutor is registered")
            }
        }); 
        Register.findOneAndDelete({ subject: id }, (err,result)=>{
            if (err) {
                return res.send("Error occur");
            } else {
                return res.send(`You have successfully deleted ${result}`);
            }
        });
    }


const updateSubjectReg = (req, res, next) => {
    const { name, subject, category, update } = req.body; 
    Register.findOneAndUpdate(
        { person: req.params.id, subject}, 
        { name, subject: update, category },
        {new: true}, (err, result)=>{
            if (err) {
                return res.status(404).json("Subject not registered yet");
            } else {
                return res.status(200).json(`message updated successfully ${result}`)
            }
        });  
    }  

const findSubject = (req,res)=>{
    const { _id}=req.user;
    Register.find({user : _id}, {subject: 1, _id:0}, (err, result)=>{
        if (err) {
            return res.status(404).send('Error occur!!! Check if subject is registered')
        } else {
            return res.status(200).json({
                message: "Registered Subject are: ",
                data : result
            });
        }
    });
}

module.exports = {
    updateSubjectReg,
    deleteSubject,
    registerSubject,
    findSubject,
}