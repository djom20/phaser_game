'use strict';

$(function(){
	window.w = window;
	$game.init();
});

window.$game = {
	init: function(){ /* Init Vars */
		var game = new Phaser.Game(1200, 480, Phaser.CANVAS, 'game');

		/* Gravity */
		// game.physics.startSystem(Phaser.Physics.P2JS);
		// game.physics.p2.gravity.y 	= 100;
		// game.physics.p2.restitution = 0.8;

		game.state.add('bootscreen', bootscreen);
		game.state.add('mainmenu', mainmenu);
		game.state.add('game', player.game);

		/* Follow Camera */
		// game.camera.follow(player);

		/* Start Game */
		game.state.start('bootscreen');
	},
	log: function(value){
		console.log(value);
	}
}