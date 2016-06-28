'use strict';

/**
 * @ngdoc overview
 * @name rouletteApp
 * @description
 * # rouletteApp
 *
 * Main module of the application.
 */
angular
  .module('rouletteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'StandardCtrl',
        controllerAs: 'vm'
      })
      .when('/hot', {
        templateUrl: 'views/hot.html',
        controller: 'HotCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
