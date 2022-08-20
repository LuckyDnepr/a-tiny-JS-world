import { Humans } from "./Humans.js";

export class Woman extends Humans {
  constructor (name, birthday) {
    super(name, "female", birthday);
    this.hands = 2;
    this.legs = 2;
    this.vocabulary = {
      "hi": "Hi cute!"
    };
  }
  getInfo () {
    return `${this.say("hi")} ` + super.getInfo();
  }
}
