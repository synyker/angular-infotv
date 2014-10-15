'use strict';

/**
 * @ngdoc function
 * @name angularInfotvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularInfotvApp
 */
angular.module('angularInfotvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
