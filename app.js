var app = angular.module('myApp', []);



app.controller('myController', function ($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/comments")
        .then(function (response) {
            $scope.showData = response.data
        })
});
