var models = require("../models");

exports.view = function(req, res) {
    /* TODO */
    var sportID = req.query.id;
    console.log(sportID);
    res.render("chat");
};
