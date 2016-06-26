myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard',{
            templateUrl: 'partials/Dashboard.html'
        })

        .when('/create',{
          templateUrl:'partials/Create.html'
        })
        .when('/poll/:id',{
            templateUrl: 'partials/Show.html'
        })

        .otherwise({
          redirectTo: '/'
        });
    });
