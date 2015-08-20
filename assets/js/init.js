'use strict';

$(function(){
	window.w = window;
	$game.init();
});

window.$game = {
	init: function(){ /* Init Vars */
		var game = new Phaser.Game(1200, 480, Phaser.CANVAS, 'game');

		game.state.add('bootscreen', bootscreen);
		game.state.add('mainmenu', mainmenu);
		game.state.add('game', player.game);

		/* Start Game */
		game.state.start('bootscreen');
	},
	log: function(value){
		console.log(value);
	}
}