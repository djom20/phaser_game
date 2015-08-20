player.game = function(game){};

player.game.prototype = {
	preload: function(){
		
	},
	create: function() {
		/* Config */
		this.add.sprite(0, 0, 'bg-sky');
		var ground = this.add.sprite(0, 420, 'bg-ground');
 		// ground.body.immovable = true;
   //  	ground.body.gravityScale = 0;


		this.physics.startSystem(Phaser.Physics.P2JS);
		this.game.physics.p2.gravity.y = 300;
		this.game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    	this.game.physics.p2.world.setGlobalStiffness(1e5);

		this.audioStatus 	= true;
		this.timer 			= 0;
		this.totalTimer 	= 0;
		this.level 			= 1;
		this.maxLevels 		= 5;
		this.movementForce 	= 10;

		/* Add player on game */
		this.player = this.add.sprite(this.game.world.centerX, 345, 'player1');
		this.player.anchor.set(0.2);
		this.game.physics.p2.enable(this.player);
		this.player.body.data.gravityScale = 1;

		/* Add Controllers Keyboards */
		this.cursor = this.game.input.keyboard.createCursorKeys();

		/* Follow Camera */
		this.game.camera.follow(this.player);
	},
	render: function() {
	    this.game.debug.cameraInfo(this.game.camera, 32, 32);
	    this.game.debug.spriteCoords(this.player, 32, 500);
	},
	update: function(){
		// this.player.body.setZeroVelocity();

		if(this.cursor.left.isDown) {
			this.player.body.velocity.x -= this.movementForce;
		}else if(this.cursor.right.isDown) {
			this.player.body.velocity.x += this.movementForce;
		}

		if(this.cursor.up.isDown) {
			this.player.body.velocity.y -= this.movementForce;
		}else if(this.cursor.down.isDown) {
			this.player.body.velocity.y += this.movementForce;
		}
	}
}