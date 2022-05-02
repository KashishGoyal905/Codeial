// file for contact schema 

// requiting mongoose
const mongoose = require('mongoose');

// defining schema
const todoSchema = new mongoose.Schema({
    description: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        required: true
    },
    date: {
        type: 'date',
        required: true
    }

});


const todos = mongoose.model('todos', todoSchema);

module.exports = todos;