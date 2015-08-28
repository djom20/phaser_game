player.game = function(game){};

player.game.prototype = {
	preload: function(){
		
	},
	create: function() {
		/* Config */
		this.game.add.tileSprite(0, 0, 1920, 1920, 'bg-sky'); /* Tamaño de fondo */
    	this.game.world.setBounds(0, 0, 1920, 1920); /* Tamaño del Mundo */

		this.physics.startSystem(Phaser.Physics.P2JS);
		this.game.physics.p2.gravity.y = 300;
		this.game.physics.p2.world.defaultContactMaterial.friction = 0.3;
    	this.game.physics.p2.world.setGlobalStiffness(1e5);
    	// this.game.physics.p2.checkCollision.down = false;

    	this.game.physics.p2.gravity = 1;
    	this.game.physics.p2.setBoundsToWorld();

		this.audioStatus 	= true;
		this.timer 			= 0;
		this.totalTimer 	= 0;
		this.level 			= 1;
		this.maxLevels 		= 5;
		this.movementForce 	= 2;
		this.jumpTimer 		= 0;

		/* Limits */
		this.platforms = this.game.add.group();
		this.platforms.fixedToCamera = true;
		this.platforms.setAll('body.immovable', true);

		this.ground = this.platforms.create(250, 1900, 'bg-ground');
	    this.game.physics.arcade.enable(this.ground);
	    this.ground.body.gravityScale = 0;
		
		/* Add player on game */
		this.player = this.add.sprite(100, 1770, 'player1_right');
		this.player.direction = 'none';
		this.game.physics.arcade.enable(this.player);
		// this.player.body.data.gravityScale = 1;

		// ball.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

		/* Add Controllers Keyboards */
		this.cursor = this.game.input.keyboard.createCursorKeys();

		/* Follow Camera */
		this.game.camera.follow(this.player);

		/* Si sale de los limites, debe perder */
		// this.player.events.onOutOfBounds.add(ballLost, this);
	},
	render: function() {
	    this.game.debug.cameraInfo(this.game.camera, 32, 32);
	    // this.game.debug.spriteCoords(this.player, 32, 500);
	    // this.game.debug.bodyInfo(this.player, 16, 24);
	},
	update: function(){
		// this.player.body.setZeroVelocity();
		// console.log(this.player.direction);

		if(this.cursor.left.isDown) {
			// if(this.player.direction != 'left'){
				// this.player.direction = 'left';
				this.player.body.velocity.x -= this.movementForce;
				// this.player.animations.play('left');
			// }
		}else if(this.cursor.right.isDown) {
			// if(this.player.direction != 'right'){
				// this.player.direction = 'right';
				this.player.body.velocity.x += this.movementForce;
				// this.player.animations.play('right');
			// }
		}else if(this.cursor.up.isDown) {
			this.player.body.velocity.x = 0;

			// if(this.player.direction != 'up'){
				// this.player.direction = 'up';
				if (this.player.body.onFloor()){
            		this.player.body.velocity.y = -250;
        		}else{
        			console.log("Not it on the floor");
        		}
				// if(this.game.time.now > this.jumpTimer){
				// 	this.player.body.velocity.y = -250;
	   //      		this.jumpTimer = this.game.time.now + 750;
				// }
			// }
		}else{
			// this.player.direction = 'none';
		}
	}
}