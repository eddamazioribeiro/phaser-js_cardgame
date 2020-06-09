import CardBase from './CardBase.js';
const GameObjects = Phaser.GameObjects;


export default class CardGrid extends CardBase {
    constructor(data) {
        let {value, type} = data;
        super(data);

        this.textValue = new GameObjects.BitmapText(this.scene, 0, -100, 'pressstart', value);
        this.add(this.textValue);
        this.value = value;
        this.cardType = type;
    }

    set value(value) {
        this._value = value;
        this.textValue.text = this._value;
        this.textValue.x = -45 -this.textValue.width / 2;
        this.textValue.tint = 0;
    }

    get value() {
        return this._value;
    }
}