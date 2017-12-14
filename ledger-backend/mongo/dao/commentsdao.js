var commentsModel= require('./../models/comments.model');
var saveNewComment=function(body,res){
    if(body){
        var commentsModelObject=new commentsModel();
        for(var element in body){
            commentsModelObject[element]=body[element];
        }
        commentsModelObject.save().then(function(data){       
            res.send(data);         
        },function(){
            res.status(400).send({message:"Error on saving comment"});
        });
    }
    else{
      res.status(500).send({message:"Invalid comment body"});  
    }
};

var fetchComment=function(id,res){
    commentsModel.find({opportunityId:id})
    .then(function(response) {        
        res.send(response);
    },
    function(){
        res.status(500).send("No comments added yet");
    });
};


module.exports= { 
	saveNewComment:saveNewComment,
    fetchComment:fetchComment
};
