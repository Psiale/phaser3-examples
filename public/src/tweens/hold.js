var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
    var image = this.add.image(100, 300, 'block');

    this.tweens.add({
        targets: image,
        x: 700,
        duration: 3000,
        ease: 'Power2',
        yoyo: true,
        hold: 2000
    });
}
