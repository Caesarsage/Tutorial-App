const Category = require('../models/category'),
      Subject = require('../models/subject');

Subject.create({name : "Mathematics"});
Subject.create({name : "English Language"});
Subject.create({name : "Physics"});
Subject.create({name : "Elementary"});
Subject.create({name : "Arts"});


Category.create({name: "Primary", desciption : "Primary Student Categories"}, (err,result)=>{
    Subject.findOne({name: "Mathematics"}, (err, resfound)=>{
        if (err) {
            console.log(err);
    } else {
            resfound.category.push(result);
            resfound.save((err,data)=>{
                if (err) {
                    console.log(err)
                } else {
                    console.log()
                }
            });
    }
    });
});

Category.create({name: "SSS", description: "SSS Student Categories"}, (err, result)=>{
   Subject.findOne({name: "Physics"}, (err, resfound)=>{
        if (err) {
            console.log(err);
    } else {
            resfound.category.push(result);
            resfound.save((err,data)=>{
                if (err) {
                    console.log(err)
                } else {
                    console.log()
                }
            });
    }
    });
})

Category.create({ name: "JSS:",
                desciption : " JSS Student Categories" },(err,post)=>{
                Subject.findOne({ name : "Mathematics"}, (err, result)=>{
                     if (err) {
                    console.log()
                    } else {
                        result.category.push(post);
                        result.save((err, data)=>{
                            if (err) {
                                console.log(err)
                            } else {
                                console.log()
                            }
                        })

                    }
                });   
});



//find all category
const findAllCategory = (req,res, next)=>{
    Category.find({}, (err,result )=>{
        if (err) {
            console.log('Error');
        }else{
            console.log(`category retrieved ${result}`);           
            res.send(result);
        }
    });
}

const updateCategory = (req,res,next)=>{
    const { id} = req.params;
    const { name,desciption } = req.body;
    Category.findByIdAndUpdate({_id:id}, {$set: {name, desciption}} , (err, updatedCategory)=>{
        if (err) {
            res.send('Error');
        } else {
            res.send(`${updatedCategory} Category updated`) ;
            console.log('Updated')
        }
    });
}

const deleteCategory = (req, res) =>{
    const { id } = id.params;
    Category.findByIdAndDelete(req.param.id, req.body, (err)=>{
        if (err) {
            console.log('category deleted')
        }else{
            res.send(`Category deleted`)
        }
        });

    Subject.deleteMany({category: id}, (err, result)=>{
        if (err) {
            res.send('Error Occur!!! category not found')
        } else {
            res.send(`Category deleted`);
        }
    });

}

const deleteAllCategory = (req,res)=>{
    Category.find({}, (err, result)=>{
        if (err) {
            return res.send('Error Occur');
        } else {
            return res.send(`deleted successfully ${result}`);
        }
    });
}

module.exports = {
    findAllCategory,
    updateCategory,
    deleteCategory,
    deleteAllCategory
}