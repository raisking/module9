const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/students', (req, res, next) => {
  const students = [ 
    { "id" : "1", "firstName" : "John" , "lastName" : "Dow" }, 
    { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith" }, 
    { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe" }];
//send the array as the response 
   res.json(students);
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// serve incoming post requests to /students
app.post('/students', (req, res, next) => {
    const student = req.body;
    console.log(student.firstName + " " + student.lastName);
    //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
  });
  
//to use this middleware in other parts of the application
module.exports=app;
