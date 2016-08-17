tweetApp.controller('hillController', ['$scope', '$http', function($scope, $http){
    var hillTweets;
    $scope.hillTweets = hillTweets;
    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillary'
    }).then(function successFunction(tweetData){
            $scope.hillTweets = tweetData.data.statuses;
            console.dir(tweetData);
        }, function failureFunction(tweetData){
        }
    );
}]);
