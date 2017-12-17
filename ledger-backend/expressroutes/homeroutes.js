var userdao = require('./../mongo/dao/userdao');

module.exports = function (app) {
    //Users_admin
    // app.post('/api/createUser',function(req,res){
    //       createUserdao.saveNewUser(req.body,res);
    // });

    // app.delete("/api/removeUser/:id",function(req,res){
    //     createUserdao.removeUser(req.params.id,res);
    // });

    //Ledger
    app.get("/api/getUserData", function (req, res) {
        userdao.fetchUserData(res);
    });
    app.get("/api/getUserDataById/:id",function(req,res){
        userdao.fetchUserDataById(req.params.id,res);
    });
    app.post('/api/addData',function(req,res){
        userdao.addData(req.body,res);
    });
    app.put('/api/editData',function(req,res){
        userdao.editData(req.body,res);
    });
    app.delete('/api/deleteData/:id',function(req,res){
        userdao.deleteData(req.params.id,res);
    });
}