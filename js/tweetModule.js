var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngMaterial']);
// tweetApp.controller('tweetController', function($scope){
//     $scope.message = "Here";
// });

tweetApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/tweetDisplay.html'
        // controller: 'tweetController'
    });
    // $routeProvider.when('/trump',{
    //     templateUrl: 'views/tweetDisplay.html',
    //     controller: 'trumpController'
    // });
    // $routeProvider.when('/hillary',{
    //     templateUrl: 'views/tweetDisplay.html',
    //     controller: 'hillaryController'
    // });
    $routeProvider.otherwise('/');
});

