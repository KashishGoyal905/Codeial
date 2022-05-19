const Todos = require('../models/data');

module.exports.create = function (req, res) {
    // console.log(req.body);
    Todos.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTodo) {
        if (err) {
            console.log("error in creating a contact",err);
            return;
        }
        // console.log('********', newTodo);
        return res.redirect('back');
    })
};

