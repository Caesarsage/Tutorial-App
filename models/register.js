const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name : {String, required : true},
    subject: {
        type: String,
        required: true
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
});

//convert to model
Register = mongoose.model('Register', registerSchema);

//exporting model
module.exports = Register;