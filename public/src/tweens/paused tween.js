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
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block');

    //  Creates a chained tween.

    var tween = this.tweens.add({
        targets: image,
        x: [
            { value: '+=600', hold: 1000 },
            { value: '-=600' }
        ],
        ease: 'Power2',
        loop: true,
        paused: true
    });

    document.addEventListener('mousedown', function () {

        console.log('start');

        tween.play();

    });

}
