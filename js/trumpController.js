tweetApp.controller('trumpController', ['$scope', '$http', function($scope, $http){
    var trumpTweets;
    $scope.trumpTweets = trumpTweets;
    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump'
    }).then(function successFunction(tweetData){
            $scope.trumpTweets = tweetData.data.statuses;
            console.dir($scope.trumpTweets);
        }, function failureFunction(tweetData){
        }
    );
}]);
