var app = angular.module('studentApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<h2>Welcome to the Student Registration System</h2><p>Please use the navigation to register.</p>"
    })
    .when("/register", {
      templateUrl: "registration.html",
      controller: "RegistrationController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
app.controller('RegistrationController', function($scope) {
  $scope.student = {
    name: '',
    email: '',
    age: '',
    course: ''
  };
  $scope.submitForm = function() {
    alert("Student Registered!\nName: " + $scope.student.name + "\nEmail: " + $scope.student.email);
  };
});
