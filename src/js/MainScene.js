import CardBase from '../js/CardBase.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('armor', 'src/assets/armor.png');
        this.load.image('card', 'src/assets/card.png');
        this.load.image('dead', 'src/assets/dead.png');
        this.load.image('deadknight', 'src/assets/deathknight.png');
        this.load.image('firedrake', 'src/assets/firedrake.png');
        this.load.image('goldendragon', 'src/assets/goldendragon.png');
        this.load.image('healingpotion', 'src/assets/healingpotion.png');
        this.load.image('kobold', 'src/assets/kobold.png');
        this.load.image('ogre', 'src/assets/ogre.png');
        this.load.image('paladin', 'src/assets/paladin.png');
        this.load.image('playercard', 'src/assets/playercard.png');
        this.load.image('restartbutton', 'src/assets/restartbutton.png');
        this.load.image('shield', 'src/assets/shield.png');
        this.load.image('troll', 'src/assets/troll.png');
        this.load.bitmapFont('pressstart', 'src/fonts/pressstart.png', 'src/fonts/pressstart.fnt');
    }

    create() {
        this.player = new CardBase({
            scene: this,
            name: 'Paladin',
            x: 200,
            y: 200,
            card: 'playercard',
            image: 'paladin',
            depth: 1
        });
    }
};