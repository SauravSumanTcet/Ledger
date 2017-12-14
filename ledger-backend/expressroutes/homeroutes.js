var userdao = require('./../mongo/dao/userdao');

module.exports = function (app) {
    //Users_admin
    // app.post('/api/createUser',function(req,res){
    //       createUserdao.saveNewUser(req.body,res);
    // });

    // app.delete("/api/removeUser/:id",function(req,res){
    //     createUserdao.removeUser(req.params.id,res);
    // });

    //Users
    app.get("/api/getUserData", function (req, res) {
        console.log("Fetching data");
        userdao.fetchUserData(res);
    });
    app.post('/api/addData',function(req,res){
        userdao.addData(req.body,res);
    });

    // app.get("/api/getUserDataByRole/:role",function(req,res){
    //     userdao.fetchUserDataByRole(req.params.role,res);
    // });
}