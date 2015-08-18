'use strict';

$(function(){
	console.log('Init Game');

	window.w = window;
	$game.init();
});

window.$game = {
	init: function(){ /* Init Vars */
		var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');
	},
	log: function(value){
		console.log(value);
	}
}