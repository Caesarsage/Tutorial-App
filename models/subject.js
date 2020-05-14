const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name : {type: String, required : true},
    category : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    tutors : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }],
},
{ timestamps: true });

//convert to model
Subject = mongoose.model('Subject', subjectSchema);

//exporting model
module.exports = Subject;