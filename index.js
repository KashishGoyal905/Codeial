const express = require('express');
const port = 8000;
const app = express();

// using express router 
app.use('/', require('./Routes'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is listening on port - ${port}`)
});