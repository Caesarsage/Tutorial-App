const Subject = require("../models/subject");

const subjectAddition =(req, res) => {
    const { name, category, tutors } = req.body;
    if (!name || !category){
        return res.status(400).json("All fields required")
    }
    Subject.findOne({name, category}, (result)=>{
        if (result) return res.status(423).send("Subject already exists");
    });
    let subject = new Subject({
        name,
        category,
        tutors
    })
    const success = subject.save();
    return res.status(200).json({
        message: "Subject added successfully",
        data: success
    }) 
}


const findAllSubject = async (req, res, next) => {
        const { category } = req.body;
        if(!category) {
            res.status(404).json("Please enter category");
        }
        Subject.find({category}, {name: 1, tutors: 1, category: 1}, {sort: {name: 1}}, (err,result)=>{
           if (err) {
               res.status(404).send("No subjects in this category")
           } else {
                return res.status(200).json({
                message: "All subjects in this category includes:",
                data: result
                })
           } 
        })
    }

const findOneSubject = (req, res, next) => {
        const { id } = req.params;
        const result =Subject.findById({ _id: id }, {name: 1, tutors: 1, category: 1}, (err,result)=>{
            if (!result) {
                res.status(404).send("Subject does not exist yet.");
            } else {
                return res.status(200).json({
                   message: "Retrieved subject",
                   data: result
               })   
            }
        })                
    }    


const findTutorsForASubject =(req, res, next) => {
        const { id } = req.params;
        Subject.findById({_id: id}, (err, result)=>{
            if (err) {
                return  res.status(200).json("Subject not found, review details")
            } else {
                return res.status(200).json(result);
            }
        });        
    }


const findSubject = (req, res, next) => {
    const { name } = req.params;
        if (!name) {
            return res.status(404).json("Please provide name")
        }
        Subject.find({ name }, { _id: 1, name: 1, tutors: 1, category: 1 }, {sort: {name: 1}}, (err, result)=>{
            if (err) {
                return res.status(404).send("Subject does not exist");
            } else {
                 return res.status(200).json({
                message: "Subject founds:",
                data: result
                })
            }
        });    
    } 




const deleteSubject = (req, res, next) => {
        const { id } = req.params;
        Subject.findByIdAndDelete({ _id: id }, (err,result)=>{
            if (err) {
                return res.status(200).json("Subect does not exist")
            } else {
                 return res.status(200).json({
                 message: "Subject deleted successfully",
                 data: result
                })
            }
        });
    }

const updateSubject = async (req, res, next) => {
     
    Subject.findByIdAndUpdate(
        { _id: req.params.id }, 
        { name: req.body.name, category: req.body.category, tutors: req.body.tutors },
        {new: true}, (err, result)=>{
            if (err) {
                return res.status(404).json("Subject does not exist");
            } else {
                return res.status(200).json({
                message: "Subject updated",
                data: result
                })
            }
    });
}



module.exports = {
    updateSubject,
    deleteSubject,
    subjectAddition,
    findOneSubject,
    findAllSubject,
    findSubject,
    findTutorsForASubject
}