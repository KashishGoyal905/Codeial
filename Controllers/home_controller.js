// /->home function //exporting controller for aceesing in routes
module.exports.home = function (req, res) {
    res.end('<h1>Home</h1>');
}

module.exports.about = function (req, res) {
    res.end('<h1>About</h1>');
}