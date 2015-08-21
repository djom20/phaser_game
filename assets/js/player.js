var player = {
	_width: 320,
	_height: 480
};

player.boot = function(game) {};

player.boot.prototype = {
	preload: function() {
		this.load.image('player1', 'assets/images/mario.png');
	},
	create: function() {
		this.add.sprite(0, 0, 'player1');
		this.game.scale.scaleMode 				= Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally 	= true;
		this.game.scale.pageAlignVertically 	= true;
		this.game.state.start('preloader');
	}
};