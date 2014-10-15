'use strict';

/**
 * @ngdoc function
 * @name angularInfotvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularInfotvApp
 */
angular.module('angularInfotvApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
