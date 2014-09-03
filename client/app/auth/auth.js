angular.module('nite-out.auth', ['ui.router'])

.controller('AuthController', ['$scope', '$state', 'AuthRequests', '$window', function($scope, $state, AuthRequests, $window) {
  $scope.userInfo = {};

  $scope.loginStatus = $window.localStorage.getItem('nite-out.user') !== null;

  $scope.loginPage = function() {
    $state.go('login');
  };

  $scope.signupPage = function() {
    $state.go('signup');
  };

  $scope.postSignupData = function(data) {
    AuthRequests.signup(data);
  };

  $scope.getLoginData = function(data) {
    AuthRequests.userLogin(data);
  };

}])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('login' , {
      url: '/login',
      templateUrl: 'app/auth/loginPage.html',
      controller: 'AuthController'
    })
    .state('signup' , {
      url: '/signup',
      templateUrl: 'app/auth/signupPage.html',
      controller: 'AuthController'
    });
}]);
