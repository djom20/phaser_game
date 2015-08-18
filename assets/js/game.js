player.game = function(game) {};

player.game.prototype = {
	preload: function() {
		this.load.image('bg-sky', 'img/sky.png');
	},
	create: function() {
		/* Config */
		this.add.sprite(0, 0, 'bg-sky');
		// this.load.image('bg_sky', 'img/sky.png');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.audioStatus = true;
		this.timer = 0;
		this.totalTimer = 0;
		this.level = 1;
		this.maxLevels = 5;
		this.movementForce = 10;

		/* Add Controllers Keyboards */
		this.keys = this.game.input.keyboard.createCursorKeys();
	}
}