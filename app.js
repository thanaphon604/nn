const express = require('express')
const mongodb = require('mongodb')

var app = express() //เรียกใช้เสมอถ้าใช้ express

app.get('/', (req, res) => {
    res.send('hello')
})
let student = [
    {
        id: 'st1',
        name: 'p1'
    }, {
        id: 'st2',
        name: 'p2'
    }, {
        id: 'st3',
        name: 'p3'
    }
]
app.get('/all-student', (req, res) => {
    res.send(student)
})

app.get('/all-student/:id', (req, res) => {
    let studentID = req.params.id
    for (let i = 0; i< student.length; i++) {
        if (studentID == student[i].id) {
            res.send(student[i])
            break;
        }
    }
    res.send('not found this id :' + studentID)
})

app.get('/all-student/name/:name', (req, res) => {
    let studentNAME = req.params.name
    for (let i = 0; i< student.length; i++) {
        if (studentNAME == student[i].name) {
            res.send(student[i])
            break;
        }
    }
    res.send('not found this name :' + studentNAME)
})


app.listen(3000, () => {
    console.log('is listen on port 3000')
})