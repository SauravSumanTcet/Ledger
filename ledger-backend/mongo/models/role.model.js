var mongoose = require('mongoose');
var schema = mongoose.Schema;
var AutoIncreament = require('mongoose-sequence');
var roleSchema= new schema({
    roleId:Number,
    role:{type:String,unique:true}
});
roleSchema.plugin(AutoIncreament, {inc_field: 'roleId'});
module.exports= mongoose.model("role",roleSchema,"role");