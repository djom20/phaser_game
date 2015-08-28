var bootscreen = {
	preload: function() {
		/* Main Menu Section */
		this.game.load.image('img_mainmenu', 'assets/images/mainmenu_bg.jpg');
		this.game.load.image('img_botonplay', 'assets/images/boton_play.png');
		this.game.load.image('img_logo', 'assets/images/logo.png');

		/* Game Section */
		this.game.load.image('bg-sky', 'assets/images/sky.png');
		this.game.load.image('bg-ground', 'assets/images/ground.png');

		/* Players */
		this.game.load.image('player1_left', 'assets/images/mario_left.png');
		this.game.load.image('player1_jump_left', 'assets/images/mario_jump_left.png');

		this.game.load.image('player1_right', 'assets/images/mario_right.png');
		this.game.load.image('player1_jump_right', 'assets/images/mario_jump_right.png');
	},
	create: function() {
		this.state.start('mainmenu');
	}
};