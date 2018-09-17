const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.Promise - global.Promise;
//เชื่อม data base 
mongoose.connect('mongodb://localhost/database_study').then((doc) =>{
console.log('success to connect database study')
},(err) =>{
    console.log('fail to connect database study ')
})

var Schema = mongoose.Schema

var StudentSchema = new Schema({
    id: {
        type: String,
        unique:true,
        required:true,
        minlength:8,
        maxlength:8
    },
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    age:{
        type:Number
    }
})
var Student = mongoose.model('student',StudentSchema)

var app = express() //เรียกใช้เสมอถ้าใช้ express
app.use(bodyParser.json())

//api post
app.post('/post', (req,res) => {
    let newStudent = Student({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age
    })
    newStudent.save().then((doc) =>{
        res.send(doc)
    },(err) =>{
        res.send(err)
    })
})

app.get('/getStudent', (req, res) => {
    user.find().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(404).send(err)
    })
})


app.listen(3000, () => {
    console.log('is listen on port 3000')
})