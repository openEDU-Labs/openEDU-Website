var app = angular.module('teacherClient', []);
app.controller('teacherClientController', function ($scope, $http) {
    $scope.url = 'https://www.youtube.com/watch?v=riXcZT2ICjA';
    $scope.onSubmit = function() {
      window.location = "teacher_client.html"+"?url="+$scope.url;
    }
});

