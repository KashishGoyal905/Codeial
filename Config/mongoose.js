// requiring mongoosse
const mongoose = require('mongoose');

// connecting mongoose to database db
mongoose.connect('mongodb://localhost/todoapp') ;

// acquire the coonection (to check if it succersfull)  
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console, "error connecting to db"));
// if up then console successfull
db.once('open',() => console.log('Succesfully connected to the database'));
