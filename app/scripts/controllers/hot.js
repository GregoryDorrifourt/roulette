'use strict';

/**
 * @ngdoc function
 * @name rouletteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rouletteApp
 */
angular.module('rouletteApp')
  .controller('HotCtrl', ['$scope', '$timeout', 'Roulette', function ($scope, $timeout, Roulette) {
    var self = this;

    self.CONST = {
    	TIMEOUT : 1000
    };

    self.showButton = true;

    self.init = function(){
    	self.result = ['','',''];
    	$timeout(function(){$scope.$apply();});
    };

    self.start = function (){
    	self.init();

	    self.showButton = false;

	    self.result = Roulette.get(Roulette.CONF.HOT_MODE.id);
	    
    };

  }]);
