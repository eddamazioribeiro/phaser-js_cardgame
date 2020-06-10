const GameObject = Phaser.GameObjects;
import CardDraggable from './CardDraggable.js';

export default class CardPlayer extends CardDraggable {
    constructor(data) {
        let {health} = data;
        super(data);

        this.textHealth = new GameObject.BitmapText(this.scene, 0, -102, 'pressstart', health);
        this.textMaxHealth = new GameObject.BitmapText(this.scene, -20, -90, 'pressstart', health, 12);
        this.textArmor = new GameObject.BitmapText(this.scene, 0, -102, 'pressstart', health);
        this.spriteArmor = new GameObject.Sprite(this.scene, 50, -80, 'armor');
        this.textHealth.tint = 0;
        this.textMaxHealth.tint = 0;
        this.add([this.textHealth, this.textMaxHealth, this.spriteArmor, this.textArmor]);
        this.health = health;
        this.maxHealth = health;
        this.armor = 0;
    }

    set health(health) {
        this._health = health;
        this.textHealth.text = this._health;
        this.textHealth.x = -44 - this.textHealth.width / 2;
    }

    get health() {
        return this._health;
    }

    set maxHealth(maxHealth) {
        this._maxHealth = maxHealth;
    }

    get maxHealth() {
        return this._maxHealth;
    }

    set armor(armor) {
        this._armor = armor;
        this.textArmor.text = this._armor;
        this.textArmor.x = 47 - this.textArmor.width / 2;
        this.textArmor.alpha = this._armor == 0 ? 0 : 1;
        this.spriteArmor.alpha = this._armor == 0 ? 0 : 1;
    }

    get armor() {
        return this._armor;
    }

    set dead(dead) {
        this.health = '0';
        this.cardName = 'DEAD';
        this.draggable = false;
        this.deadAnimation();
    }

    get dead() {
        return this._cardName == 'DEAD';
    }

    attack(atkValue) {
        if (atkValue <= this.armor) {
            this.armor = this.armor - atkValue;
        } else {
            this.health = this.health - (atkValue - this.armor);
            this.armor = 0;
        }

        if (this.health <= 0) {
            this.dead = true;
        }
    }
}