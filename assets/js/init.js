'use strict';

$(function(){
	window.w = window;
	$game.init();
});

window.$game = {
	init: function(){ /* Init Vars */
		var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');
		game.state.add('player', player.boot);
		game.state.add('game', player.game);


		/* Start Game */
		game.state.start('game');
	},
	log: function(value){
		console.log(value);
	}
}