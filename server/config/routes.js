
var users = require('./../controllers/users.js');
var surveys = require('./../controllers/surveys.js');
// This is our routes.js file located in server/config/routes.js
 // This is where we will define all of our routing rules!
 // We will have to require this in the server.js file (and pass it app!)
 module.exports = function(app) {
 // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
  app.get('/users', function(req, res) {
    users.index(req,res);
  });
  app.post('/user', function (req,res) {
    users.create(req,res);

  })



  app.get('/surveys', function(req, res) {
    surveys.index(req,res);
  });
  app.post('/surveys', function (req,res) {
    surveys.create(req,res);
   })
   app.post('/survey1/:id', function (req,res) {
     console.log('got here',req.params);
     surveys.update1(req,res);
   })
   app.post('/survey2/:id', function (req,res) {
     console.log('got here',req.params);
     surveys.update2(req,res);
   })
   app.post('/survey3/:id', function (req,res) {
     console.log('got here',req.params);
     surveys.update3(req,res);
   })
   app.post('/survey4/:id', function (req,res) {
     console.log('got here',req.params);
     surveys.update4(req,res);
   })


   app.get('/survey/:id', function (req,res) {
     console.log('got here');
     surveys.show(req,res);
   })

   app.delete('/delete/:id', function (req,res) {
     console.log('got here');
     surveys.destroy(req,res);
   })
 };
