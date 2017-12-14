var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema= new schema({
    amount:String,
    date:Date,
    particulars:String
});

module.exports = mongoose.model("ledger",userSchema,"ledger");