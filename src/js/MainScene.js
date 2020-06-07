export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene')
    }

    preload() {
        this.load.image('card', '../assets/armor.png');
        this.load.image('card', '../assets/card.png');
        this.load.image('card', '../assets/dead.png');
        this.load.image('card', '../assets/deadknight.png');
        this.load.image('card', '../assets/firedrake.png');
        this.load.image('card', '../assets/goldendragon.png');
        this.load.image('card', '../assets/healingpotion.png');
        this.load.image('card', '../assets/kobold.png');
        this.load.image('card', '../assets/ogre.png');
        this.load.image('card', '../assets/paladin.png');
        this.load.image('card', '../assets/playercard.png');
        this.load.image('card', '../assets/restartbutton.png');
        this.load.image('card', '../assets/shield.png');
        this.load.image('card', '../assets/troll.png');
        this.load.bitmapFont('pressstart', '../fonts/pressstart.fnt');
    }
};