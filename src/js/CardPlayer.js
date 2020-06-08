const GameObject = Phaser.GameObjects;
import CardDraggable from './CardDraggable.js';

export default class CardPlayer extends CardDraggable {
    constructor(data) {
        let {health} = data;
        super(data);

        this.textHealth = new GameObject.BitmapText(this.scene, 0, -102, 'pressstart', health);
        this.textMaxHealth = new GameObject.BitmapText(this.scene, -20, -90, 'pressstart', health, 12);
        this.textArmor = new GameObject.BitmapText(this.scene, 0, 0, 'pressstart', health);
        this.spriteArmor = new GameObject.Sprite(this.scene, 50, -80, 'armor');
        this.textHealth.tint = 0;
        this.textMaxHealth.tint = 0;
        this.add([this.textHealth, this.textMaxHealth, this.textArmor, this.spriteArmor]);
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
        this.textArmor.x = 46 - this.textArmor.width / 2;
        this.textArmor.alpha = this._armor == 0 ? 0 : 1;
        this.spriteArmor.alpha = this._armor == 0 ? 0 : 1;
    }

    get armor() {
        return this._armor;
    }
}