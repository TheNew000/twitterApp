tweetApp.controller('hillController', ['$scope', '$http', function($scope, $http){
    var hillTweets;
    $scope.hillTweets = hillTweets;
    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hrc'
    }).then(function successFunction(tweetData){
            $scope.hillTweets = tweetData.data.statuses;
            console.dir($scope.hillTweets);
        }, function failureFunction(tweetData){
        }
    );
}]);
