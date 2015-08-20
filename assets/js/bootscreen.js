var bootscreen = {
	preload: function() {
		/* Main Menu Section */
		this.load.image('img_mainmenu', 'assets/images/mainmenu_bg.jpg');
		this.load.image('img_botonplay', 'assets/images/boton_play.png');
		this.load.image('img_logo', 'assets/images/logo.png');

		/* Game Section */
		this.load.image('bg-sky', 'assets/images/sky.png');
		this.load.image('bg-ground', 'assets/images/ground.png');

		/* Players */
		this.load.image('player1', 'assets/images/mario.png');
		this.load.image('player1_jump', 'assets/images/mario_jump.png');
	},
	create: function() {
		this.state.start('mainmenu');
	}
};