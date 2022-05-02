const Todos = require('../models/data');


// /->home function //exporting controller for aceesing in routes
module.exports.home = function (req, res) {
    Todos.find({}, (err, Todos) => {
        if (err) {
            console.error(err);
            return;
        }
        return res.render('home', { title: 'home', todo_list: Todos });
    })
}

module.exports.delete = function(req, res){
    let id = req.params._id;
    Todos.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log("error in deleting contact");
            return;
        }
        return res.redirect('back');
    })
}
