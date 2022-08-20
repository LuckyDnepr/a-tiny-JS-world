import { Inhabitant } from "./Inhabitant.js";

export class Man extends Inhabitant {
    constructor (name, birthday) {
      super(name, "male", birthday);
      this.species = 'Human';
      this.hands = 2;
      this.legs = 2;
      this.vocabulary = {
        "hi": "Hey guys!"
      };
      this.say = Inhabitant.saying();
    }
  }
