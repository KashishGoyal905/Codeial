const express = require('express');
const port = 8000;
const app = express();

// connecing 
const db = require('./config/mongoose');


// setting view engines
app.set('view engine', 'ejs');
app.set('views', './views');
// parser convert encoded to readable and send to route 
app.use(express.urlencoded());


// using express router  tellin gmain file to take further routes from / to routes/index.js file
app.use('/', require('./Routes'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is listening on port - ${port}`)
});

