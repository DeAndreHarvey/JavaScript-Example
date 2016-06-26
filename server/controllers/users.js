// First add the following two lines at the top of the users controller so that we can access our model through var Users
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      User.find({}, function(err, users) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log("load users");
          res.json(users);
        }
      })
    },
    create: function(req,res){
      var user= new User(req.body);
      user.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          User.findOne({name :req.body.name }, function(err, users) {
            if(err){
              console.log("does not compute2");
            }
            else{
              console.log("load users");
              res.json(users);
            }
          })
    }
})
},
    show: function (req,res) {
      console.log(req.params.id);
      User.findOne({_id : req.params.id}).populate('_items').exec(function (err,user) {
        if (err){
          console.log('oh No!!');
        }
        else {
          console.log('Yes sir');
          res.json(user);
        }
      })
    }

  }
})();
