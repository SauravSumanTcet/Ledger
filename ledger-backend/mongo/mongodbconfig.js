var mongoose = require('mongoose');

module.exports= function(env){
    var db;
    if(env === 'development'){
     db='mongodb://localhost/ledger';
    }
    mongoose.connect(db);
    var con = mongoose.connection;
    con.once('open',function(){
        console.log("Connected to database successfully");
    });
}