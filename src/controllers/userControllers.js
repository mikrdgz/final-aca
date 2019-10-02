let User = require('../models/user')
let mongoose = require("mongoose")


exports.list = (req,res)=> {
    User.find(function(err,users){
        if(err){
            console.log(err)
        }
        return res.json(users);
    })
}; 

exports.show = (req,res) => {
    User.findById(req.params.userId, function(err,users){
if(err) return console.log(err);
return res.json(users)
    })
};

exports.create = (req,res) => {
    const newUser = new User(req.body);
    console.log(req);
    newUser.save((err,user)=>
    res.json(user)
   )
};

exports.update = (req,res) => {
    User.findByIdAndUpdate(req.params.userId, req.body, function(err, users) {
        if(err) return console.log(err)
        return res.json(users)
        })
}

// exports.remove = (req,res) => {
//     let user = User.find(i => i._id == req.params.userId);
//     user.isActive = false;
//     res.send("Deleted")
// }