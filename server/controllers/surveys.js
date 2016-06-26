// First add the following two lines at the top of the items controller so that we can access our model through var Survey
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Survey.find({}, function(err, items) {
        if(err){
          console.log("does not compute");
        }
        else{
          console.log('yep');
          res.json(items);
        }
      })
    },
    create: function(req,res){
      var survey= new Survey(req.body);
      console.log(req.body);
      survey.save(function (err) {
        if(err){
          console.log('didnt add');
        }
        else{
          console.log('survey added');
              res.end();
            }
          })
    },


    show: function (req,res) {
      console.log(req.params);
      Survey.findOne({_id : req.params.id},function (err,survey) {
        if (err){
          console.log('oh No!!');
        }
        else {
          console.log('Yes sir');
          res.json(survey);
        }
      })
    },

    update1: function (req,res) {
      console.log(req.params.id);
    Survey.findOne({_id : req.params.id},function (err,survey) {
      console.log('this is survey',survey);
      survey.o1_count = survey.o1_count + 1 ;

    survey.save(function (err) {
      if(err){
        console.log('error updating');
      }
      else{
        console.log('updated');
        res.end()
      }
    })
  });
},

    update3: function (req,res) {
      console.log(req.params.id);
    Survey.findOne({_id : req.params.id},function (err,survey) {
      console.log('this is survey',survey);
      survey.o3_count = survey.o3_count + 1 ;

    survey.save(function (err) {
      if(err){
        console.log('error updating');
      }
      else{
        console.log('updated');
        res.end()
      }
    })
  });
},

    update2: function (req,res) {
      console.log(req.params.id);
    Survey.findOne({_id : req.params.id},function (err,survey) {
      console.log('this is survey',survey);
      survey.o2_count = survey.o2_count + 1 ;

    survey.save(function (err) {
      if(err){
        console.log('error updating');
      }
      else{
        console.log('updated');
        res.end()
      }
    })
  });
},

    update4: function (req,res) {
      console.log(req.params.id);
    Survey.findOne({_id : req.params.id},function (err,survey) {
      console.log('this is survey',survey);
      survey.o4_count = survey.o4_count + 1 ;

    survey.save(function (err) {
      if(err){
        console.log('error updating');
      }
      else{
        console.log('updated');
        res.end()
      }
    })
  });
},

destroy: function (req,res) {
  console.log(req.params.id);
Survey.remove({_id : req.params.id},function (err) {
      res.end();
})
}




}
})();
