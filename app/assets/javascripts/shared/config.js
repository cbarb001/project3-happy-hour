angular.module('happyHrApp')

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
      
      $stateProvider
       
        .state('home', {
          url: '/home',
            // The templateUrl already knows to look in the templates folder for
            // whichever file you specify. Also the name of the file does not need to 
            // have the '.html.erb' extension on it since the gem knows to look for that anyways. 
          templateUrl: 'home.html',
          controller: 'mapController' 
        })

        .state('login', {
          url: '/login',
          templateUrl: 'login.html'
        })

        .state('signup', {
          url: '/signup',
          templateUrl: 'signup.html'
        })

         .state('kyle', {
          url:'/kyle',
          templateUrl: 'kyle.html',
          controller: 'bioController'
        })

        .state('ryan', {
          url: '/ryan',
          templateUrl: 'ryan.html',
          controller: 'bioController'
        })

        .state('cosimo', {
          url: '/cosimo',
          templateUrl: 'cosimo.html',
          controller: 'bioController'
        })

        .state('sophana', {
          url: '/sophana',
          templateUrl: 'sophana.html',
          controller: 'bioController'
        })

        .state('map', {
          url: '/map',
          templateUrl: 'map.html',
          controller: 'mapController'
        });

  });

