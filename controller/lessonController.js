const Lesson = require('../models/lesson');


//getLesson,
const getLesson = (req, res, next)=>{
    const {id}= req.params
    Lesson.find({_id: id}, (err,result)=>{
        if (err) {
            res.status(200).json('lesson not found')
        } else {
            res.send(result)
        }
    });
}
  //      findAllLesson,
  const findAllLesson = (req,res, next)=>{
      Lesson.find({}, (err, result)=>{
          if (err) {
              console.log('error occur')
          } else {
              console.log('lesson found')
              res.send(result)
          }
      });
  }
    //    bookLesson,
const bookLesson = (req,res,next)=>{
    const {name, subject, category, tutor} = req.body;
    //check for requirement
    if (!name || !subject || !category || !tutor) {
        return res.status(403).json('All field required');
    }
    Lesson.findOne(req.body,(err,result)=>{
        if (err) {
            console.log('error occur')
        } else {
            console.log('lesson booked')
            res.send(result)
        }
    });
}
      //  updateLesson,
const updateLesson = (req,res,next)=>{
    Lesson.findByIdAndUpdate(
        {_id : req.params.id}, { name: req.body.name, tutor: req.body.tutor, subject: req.body.subject, category: req.body.category}, (err, result)=>{
            if (err) {
                console.log('error occur')
            } else {
                console.log('lesson updated')
                res.send(result)
            }
        }
    );
}
        //deleteLesson
const deleteLesson = (req,res,next)=>{
    Lesson.findByIdAndDelete({_id: req.params}, (err)=>{
        if (err) {
            console.log('Error')
        }else{
            console.log('Successfully deleted')
        }
    });
}

module.exports = {
    deleteLesson,
    updateLesson,
    bookLesson,
    findAllLesson,
    getLesson
}