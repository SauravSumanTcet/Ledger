var userModel = require('./../models/user.model');

var fetchUserData = (res) => {
    console.log("getAllData");
    userModel.find({}).exec()
        .then((response) => {
            res.send(response);
        })
        .catch(() => {
            res.status(400).send("No data found");
        });
};

var addData = (body, res) => {
    console.log("adding");
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

var fetchUserDataById = (id, res) => {
    console.log("findingById");
    userModel.findById(id).then((response) => {
        res.send(response);
    });
}

var editData = (rowObj,res)=>{
    console.log("editing");
    userModel.findOneAndUpdate({_id:rowObj._id}, rowObj, {new: true}, (err, doc)=>{
        if(err){
            console.log("Something wrong when updating data!");
        }
        res.json(doc);
    });
}
var deleteData = (id,res) => {
    console.log("deleting");
    userModel.findByIdAndRemove(id,(response)=>{
        res.send(response);
    });
}
module.exports = {
    fetchUserData: fetchUserData
    , fetchUserDataById: fetchUserDataById
    , addData: addData
    , editData: editData
    , deleteData: deleteData
};
