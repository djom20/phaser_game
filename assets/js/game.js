player.game = function(game) {};

player.game.prototype = {
	preload: function() { // Carga de las imagenes
		this.load.image('bg-sky', 'assets/images/sky.png');
		this.load.image('bg-ground', 'assets/images/ground.png');
		this.load.image('player1', 'assets/images/mario.png');
	},
	create: function() {
		/* Config */
		this.add.sprite(0, 0, 'bg-sky');
		this.add.sprite(0, 420, 'bg-ground');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.audioStatus = true;
		this.timer = 0;
		this.totalTimer = 0;
		this.level = 1;
		this.maxLevels = 5;
		this.movementForce = 10;

		/* Add player on game */
		this.playerStartPos = { x: 200, y: 300 };
		this.player = this.add.sprite(this.playerStartPos.x, this.playerStartPos.y, 'player1');
		this.player.anchor.set(0.5);
		this.physics.enable(this.player, Phaser.Physics.ARCADE);
		// this.player.body.setSize(2, 2);
		this.player.body.bounce.set(0.3, 0.3);
		this.keys = this.game.input.keyboard.createCursorKeys();

		/* Add Controllers Keyboards */
		this.keys = this.game.input.keyboard.createCursorKeys();
	},
	update: function() {
		if(this.keys.left.isDown) {
			this.player.body.velocity.x -= this.movementForce;
		}else if(this.keys.right.isDown) {
			this.player.body.velocity.x += this.movementForce;
		}
		if(this.keys.up.isDown) {
			this.player.body.velocity.y -= this.movementForce;
		}else if(this.keys.down.isDown) {
			this.player.body.velocity.y += this.movementForce;
		}
	},
}