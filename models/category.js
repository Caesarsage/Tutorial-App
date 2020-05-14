const mongoose = require('mongoose');

//CREATE A SCHEMA new 
const categorySchema = new mongoose.Schema({
    name: { type:String, required: true },
    description: { type: String}
},
{timestamps: true});

Category = mongoose.model('Category', categorySchema);


module.exports = Category;