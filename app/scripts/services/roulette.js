'use strict';

/**
 * @ngdoc function
 * @name rouletteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rouletteApp
 */
angular.module('rouletteApp')
  .service('Roulette', [function () {
  	var self = this;

  	self.CONF = {
  		STANDARD_MODE: {
  			id: 'standard',
  			data: [
	    	['Celui qui a perdu 😞','Celui qui a perdu 😞', 'Celui qui a gagné 😐'],
	    	['offre ... 🤔', 'offre ... 🤔', 'se fait offrir ... 😃'],
	    	['un menu McFirst 🍔🍟', 'un ciné 🍿', 'un petit cadeau 🎁', 'un ptit dej ☕️']
	    ]},
	    HOT_MODE: {
	    	id: 'hot',
  			data: [
	    	['Celui qui a perdu ...','Celui qui a gagné ...'],
	    	['offre ... 😋', 'se fait offrir ... 😃'],
	    	['un gros bisou 🙈👅💦','un bisou goulu 👅', 'un masssage coquin 🙈']
	    ]}
  	};

  	self.get = function(mode){
  		var roulette = mode ? (mode === self.CONF.HOT_MODE.id ? self.CONF.HOT_MODE.data:self.CONF.STANDARD_MODE.data):self.CONF.STANDARD_MODE.data;
		var result = [];

		for(var i in roulette){
			result.push(roulette[i][Math.floor(Math.random()*roulette[i].length)]);
		}
		
		return result;
  	};
  }]);
