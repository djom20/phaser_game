var mainmenu = {
	create: function() {
		/* Iamges */
		this.game.add.sprite(0, 0, 'img_mainmenu');
		this.game.add.sprite(130, 0, 'img_logo');

		/* Button to play game */
		this.game.add.button(450, 380, 'img_botonplay', this.onClick, this);
	},
	onClick: function() {
		/* Start the Game */
		this.state.start('game');
    }
};