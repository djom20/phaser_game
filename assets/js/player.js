var player = {
	_WIDTH: 320,
	_HEIGHT: 480
};

player.boot = function(game) {};

player.boot.prototype = {
	preload: function() {
		this.load.image('player', 'img/mario.png');
	},
	create: function() {
		this.game.scale.scaleMode 				= Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally 	= true;
		this.game.scale.pageAlignVertically 	= true;
		this.game.state.start('preloader');
	}
};