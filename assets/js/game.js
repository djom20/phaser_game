player.game = function(game){};

player.game.prototype = {
	preload: function(){
		
	},
	create: function() {
		/* Config */
		this.add.sprite(0, 0, 'bg-sky');
		// var ground = this.add.sprite(0, 420, 'bg-ground');
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
		this.jumpTimer 		= 0;

		/* Limits */
		this.borderGroup = this.add.group();
		this.borderGroup.enableBody = true;
		this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this.borderGroup.create(0, 420, 'bg-ground');
		// this.borderGroup.create(0, player._height-2, 'border-horizontal');
		// this.borderGroup.create(0, 0, 'border-vertical');
		// this.borderGroup.create(player._width-2, 0, 'border-vertical');
		this.borderGroup.setAll('body.immovable', true);
		
		/* Add player on game */
		this.player = this.add.sprite(this.game.world.centerX, 345, 'player1');
		this.player.direction = 'none';
		this.player.anchor.set(0.2);
		this.game.physics.p2.enable(this.player);
		this.player.body.data.gravityScale = 1;

		walk = this.player.animations.add('walk');

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
		console.log(this.player.direction);

		if(this.cursor.left.isDown) {
			if(this.player.direction != 'left'){
				this.player.direction = 'left';
				// this.player.body.velocity.x -= this.movementForce;
				this.player.animations.play('left');
			}
		}else if(this.cursor.right.isDown) {
			if(this.player.direction != 'right'){
				this.player.direction = 'right';
				// this.player.body.velocity.x += this.movementForce;
				this.player.animations.play('right');
			}
		}else if(this.cursor.up.isDown) {
			this.player.body.velocity.x = 0;

			if(this.player.direction != 'up'){
				this.player.direction = 'up';
				if(this.game.time.now > this.jumpTimer){
					this.player.body.velocity.y = -250;
	        		this.jumpTimer = this.game.time.now + 750;
				}				
			}
		}else{
			this.player.direction = 'none';
		}
	}
}