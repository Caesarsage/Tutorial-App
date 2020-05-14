const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    name : {type: String, required : true},
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    tutor :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
},
{timestamps: true});

//convert to model
Lesson = mongoose.model('Lesson', lessonSchema);

//exporting model
module.exports = Lesson;