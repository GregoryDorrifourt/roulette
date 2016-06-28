'use strict';

/**
 * @ngdoc function
 * @name rouletteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rouletteApp
 */
angular.module('rouletteApp')
  .controller('StandardCtrl', ['$scope', '$timeout', 'Roulette', function ($scope, $timeout, Roulette) {
    var self = this;

    self.CONST = {
    	TIMEOUT : 1000
    };

    self.showButton = true;

    self.init = function(){
    	self.result = ['','',''];

    };

    self.start = function (){
    	self.init();

	    self.showButton = false;

	    self.result = Roulette.get();
	    
    };

  }]);
