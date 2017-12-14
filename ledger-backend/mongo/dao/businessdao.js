var businessModel= require('./../models/business.model');

var getBusiness=function(res)
{
	businessModel.find({}).exec()
    .then(function(response) {
        res.send(response);
    })
    .catch(function(){
        res.status(400).send("Business not found!!!");
    });
};


module.exports= { 
	getBusiness:getBusiness,
};
