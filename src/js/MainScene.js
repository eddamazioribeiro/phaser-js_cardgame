import CardPlayer from '../js/CardPlayer.js';
import CardGrid from '../js/CardGrid.js';
import Grid from '../js/Grid.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('armor', 'src/assets/armor.png');
        this.load.image('card', 'src/assets/card.png');
        this.load.image('dead', 'src/assets/dead.png');
        this.load.image('deathknight', 'src/assets/deathknight.png');
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
        this.grid = new Grid({
            scene: this,
            columns: 3,
            rows: 3
        });

        this.player = new CardPlayer({
            scene: this,
            name: 'Warrior of Light',
            x: this.game.config.width / 2,
            y: (this.game.config.height / 2) + 350,
            card: 'playercard',
            image: 'paladin',
            health: 16,
            depth: 1,
            ondragend: (pointer, gameObject) => {
                this.player.x = this.player.originalX;
                this.player.y = this.player.originalY;

                if (this.highlighted != null) {
                    this.highlighted.selected = true;

                    switch(this.highlighted.cardtype) {
                        case 'attack':
                            this.player.attack(this.highlighted.value);
                            this.highlighted.dead = true;
                            break;
                        case 'heal':
                            this.player.health = 
                                Math.min(this.player.health + this.highlighted.value,
                                        this.player.maxHealth);
                            break;
                        case 'armor':
                            this.player.armor = this.highlighted.value;
                            break;
                    }

                    this.grid.fadeFrontRow();
                }

            }
        });
    }
    
    update(time, delta) {
        this.grid.cards[0].highlighted = false;
        this.grid.cards[1].highlighted = false;
        this.grid.cards[2].highlighted = false;
        this.highlighted = null;

        let columnWidth = this.game.config.width / this.grid.columns;
        let playerPosX = this.player.x;
        let playerPosY = this.player.y;

        if (playerPosY < 700) {
            if (playerPosX < columnWidth) {
                this.grid.cards[0].highlighted = true;
                this.highlighted = this.grid.cards[0];
            } else if (playerPosX > columnWidth * 2) {
                this.grid.cards[2].highlighted = true;
                this.highlighted = this.grid.cards[2];
            } else {
                this.grid.cards[1].highlighted = true;
                this.highlighted = this.grid.cards[1];               
            }
        }
    }
};