import { Humans } from "./Humans.js";

export class Man extends Humans {
    constructor (name, birthday) {
      super(name, "male", birthday);
      this.hands = 2;
      this.legs = 2;
      this.vocabulary = {
        "hi": "Hey guys!"
      };
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }
