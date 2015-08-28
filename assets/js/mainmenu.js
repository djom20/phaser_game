var mainmenu = {
	create: function() {
		/* Iamges */
		this.game.add.sprite(0, 0, 'img_mainmenu');
		this.game.add.sprite(130, 0, 'img_logo');

		/* Button to play game */
		this.btn_play = this.game.add.button(this.game.world.centerX - 100, 380, 'img_botonplay', this.onClick, this);
		this.btn_play.onInputOver.add(this.onHover, this);
		this.btn_play.onInputOut.add(this.onOut, this);

		this.tween = this.game.add.tween(this.btn_play.scale).to( {x: 1.1, y: 1.1}, 1000, Phaser.Easing.Back.InOut, true, 0, false).yoyo(true);
	},
	onClick: function() {
		/* Start the Game */
		this.state.start('game');
    },
    onHover: function() {
		this.tween.pause();
    },
    onOut: function() {
		this.tween.resume();
    }
};