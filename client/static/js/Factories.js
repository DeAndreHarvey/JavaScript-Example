myApp.factory('UserFactory', function ($http){
  // The factory is nothing more than a function that returns an object
  var users = [];
  var thisUser = null;
  var user= [];
  var factory = {};
  // Add a getStudents key to the factory object with a value of a function.
  factory.readUsers = function(user, callback) {
		var newUser = true;
		$http.get('/users').success(function(data) {
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser;

				}
			})
// If user does not exist, create new user and redirect to dashboard
			if(newUser == true) {
				console.log("User is new, Creating...");
				$http.post('/user', user).success(function(data) {
					console.log("New user has been created...")
					thisUser = data;

				})
			}
		})
		callback(thisUser);
	}


factory.readUser = function(callback) {
callback(thisUser);
}

  factory.index = function(callback) {
  // Where do we get access to $http?
    $http.get('/users').success(function(output) {
        users = output;
        callback(users, Currentuser);
      })
  }
  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.createUser = function(info, callback) {
    $http.post('/users',info).success(function(data) {
      console.log('test');
      Currentuser = data;
      callback();
    })
}

  factory.showOne = function (id, callback) {
    console.log(id.user_id);
    $http.get('/show/' + id.user_id).success(function (output) {
      console.log(output);
      user = output;
      console.log(user);
      callback(user);
    })
  }
  return factory;
});


myApp.factory('SurveyFactory', function ($http){
// The factory is nothing more than a function that returns an object
var surveys = []
var survey = []
var factory = {};
// Add a getStudents key to the factory object with a value of a function.
factory.index = function (callback){
  $http.get('/surveys').success(function(output) {
    console.log(output);
    surveys = output;
    callback(surveys);
  })
  }
factory.createSurvey= function (survey, callback) {
  console.log(survey);
  $http.post('/surveys',survey).success(function() {
    callback();
  })
}

factory.showOne = function (id, callback) {
  console.log(id);
  $http.get('/survey/' + id.id).success(function (output) {
    console.log(output);
    survey = output;
    console.log(survey);
    callback(survey);
  })
}


factory.update1 = function (id, callback) {
  console.log(id);
  $http.post('/survey1/' +id).success(function () {
    callback();
  })
}

factory.update2 = function (id, callback) {
  console.log(id);
  $http.post('/survey2/' +id).success(function () {
    callback();
  })
}

factory.update3 = function (id, callback) {
  console.log(id);
  $http.post('/survey3/' +id).success(function () {
    callback();
  })
}

factory.update4 = function (id, callback) {
  console.log(id);
  $http.post('/survey4/' +id).success(function () {
    callback();
  })
}

factory.destroy = function (id, callback) {
  console.log(id);
  $http.delete('/delete/' +id).success(function () {
    callback();
  })
}


return factory;
});




myApp.factory('OrderFactory', function ($http){
// The factory is nothing more than a function that returns an object
var orders = [];
var factory = {};
// Add a getStudents key to the factory object with a value of a function.
factory.index = function (callback){
  $http.get('/orders').success(function(output) {
    orders = output;
    callback(orders);
  })
  }
factory.createOrder= function (order,callback) {
  console.log(order);
  $http.post('/orders',order).success(function() {
    $http.post('/updateprod',order).success(function () {
      callback();
    })
  })
}
return factory;
});
