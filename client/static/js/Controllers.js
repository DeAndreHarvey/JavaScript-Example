myApp.controller('user_nameController', function ($scope, UserFactory,$location){

  $scope.checkUser = function(user) {
		UserFactory.readUsers(user, function(data) {
      $location.url('/dashboard');
		})
	}
})


myApp.controller('DashboardController', function ($scope, UserFactory, SurveyFactory){
  // we don't need a factory for this demo, it wouldn't make a difference if we did.
    $scope.user = [];

    UserFactory.readUser(function(data) {
		$scope.user = data;
	})


    $scope.surveys = [];
    SurveyFactory.index(function(data){
      console.log(data);
      $scope.surveys = data;

    })

          $scope.delete = function (id) {
            console.log('sdsdsd',id);
            SurveyFactory.destroy(id, function () {
              SurveyFactory.index(function(data){
                console.log(data);
                $scope.surveys = data;

              })
          })
        }

  })


  myApp.controller('addController', function ($scope, SurveyFactory,UserFactory, $location ){
    // we don't need a factory for this demo, it wouldn't make a difference if we did.
      $scope.user = [];
      UserFactory.readUser(function (data) {
        $scope.user = data;
      })



      $scope.addNewSurvey = function () {
        $scope.newSurvey.name = $scope.user.name;
        $scope.newSurvey.o1_count = 0;
        $scope.newSurvey.o2_count = 0;
        $scope.newSurvey.o3_count = 0;
        $scope.newSurvey.o4_count = 0;
        SurveyFactory.createSurvey($scope.newSurvey, function () {
          $location.url('/dashboard');
      })


    }
})

    myApp.controller('ShowController', function ($scope, SurveyFactory, $routeParams){
      $scope.survey = [];
      console.log($routeParams);

      SurveyFactory.showOne($routeParams, function(data){
        console.log(data);
        $scope.survey = data;
    })

      $scope.vote1 = function (id) {
        console.log('sdsdsd',id);
        SurveyFactory.update1(id, function () {
          SurveyFactory.showOne($routeParams, function(data){
            console.log(data);
            $scope.survey = data;
        })
      })
    }

      $scope.vote2 = function (id) {
        console.log('sdsdsd',id);
        SurveyFactory.update2(id, function () {
          SurveyFactory.showOne($routeParams, function(data){
            console.log(data);
            $scope.survey = data;
        })
      })
    }

      $scope.vote3 = function (id) {
        console.log('sdsdsd',id);
        SurveyFactory.update3(id, function () {
          SurveyFactory.showOne($routeParams, function(data){
            console.log(data);
            $scope.survey = data;
        })
      })
    }

      $scope.vote4 = function (id) {
        console.log('sdsdsd',id);
        SurveyFactory.update4(id, function () {
          SurveyFactory.showOne($routeParams, function(data){
            console.log(data);
            $scope.survey = data;
        })
      })
    }




    })
