var tweetApp = angular.module('tweetApp', ['ngRoute']);
// tweetApp.controller('tweetCtrl', function($scope){
//     $scope.message = "Here";
// });

tweetApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'tweetController'
    });
    $routeProvider.when('/trump',{
        templateUrl: 'views/home.html',
        controller: 'trumpController'
    });
    $routeProvider.when('/hillary',{
        templateUrl: 'views/home.html',
        controller: 'hillaryController'
    });
    $routeProvider.otherwise('/');
});
