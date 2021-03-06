const express = require('express'),
    mongoose = require('mongoose'),
    bodyparser = require('body-parser'),
    debug = require('debug'),
    //ROUTES
    adminRoute = require('./route/adminRoute'),
    categoryRoute = require('./route/categoryRoute'),
    lessonRoute = require('./route/lessonRoute'),
    loginRoute = require('./route/loginRoute'),
    subjectRoute = require('./route/subjectRoute'),
    index = require('./route/index'),
    tutorRoute = require('./route/tutorRoute'),
    signupRoute = require('./route/signupRoute');




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1', adminRoute);
app.use('/v1', categoryRoute);
app.use('/v1', lessonRoute);
app.use('/v1', loginRoute);
app.use('/v1', subjectRoute);
app.use('/v1', loginRoute);
app.use('/v1', signupRoute);
app.use('/v1', tutorRoute);
app.use('/v1', index);



//connect to a database
//mongoose.connect('mongodb://localhost/')
mongoose.connect('mongodb://caesar:mighty@cluster0-shard-00-00-r7d4u.mongodb.net:27017,cluster0-shard-00-01-r7d4u.mongodb.net:27017,cluster0-shard-00-02-r7d4u.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true,
useUnifiedTopology:true}
)
.then(result => {
    console.log(`database connected`);
})
.catch(err => console.log(err))

//create a port
const port = process.env.PORT || 3000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}`)
})