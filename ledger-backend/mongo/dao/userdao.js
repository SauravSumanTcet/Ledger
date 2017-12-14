var userModel = require('./../models/user.model');

var fetchUserData = function (res) {
    userModel.find({}).exec()
        .then(function (response) {
            res.send(response);
        })
        .catch(function () {
            res.status(400).send("No data found");
        });
};

var addData = function (body, res) {
    if (body) {
        var userModelObject = new userModel();
        for (var element in body) {
            userModelObject[element] = body[element];
        }
        userModelObject.save().then(function (data) {
            res.send(data);
        }, function () {
            res.status(400).send({ message: "Error on saving data" });
        });
    }
    else {
        res.status(500).send({ message: "Invalid data body" });
    }
}


module.exports = {
    fetchUserData: fetchUserData
    , addData: addData
};
