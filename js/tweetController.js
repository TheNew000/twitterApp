tweetApp.controller('tweetController', function($scope, $http){
    $scope.tweetArray = tweetArray;
});
    var tweetArray = [];
    function Tweet(title, content, date, author){
        this.title = title,
        this.content = content,
        this.date = date,
        this.author = author
    }
    tweetArray.push(new Tweet('Love', 'I LOVE Trump!', '7/15/16', 'Ham Bone'));
    tweetArray.push(new Tweet('Hate', 'I HATE Trump!', '8/26/16', 'Trump Hater'));
    tweetArray.push(new Tweet('Love', 'I LOVE Hillary!', '5/08/16', 'Awful Person'));
    tweetArray.push(new Tweet('Hate', 'I HATE Hillary!', '6/18/16', 'Unknown'));
    tweetArray.push(new Tweet('Hatred of Mankind', 'I HATE this election!', '8/10/16', 'Informed Individual'));
