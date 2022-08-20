import { Inhabitant } from "./Inhabitant.js";

export class Woman extends Inhabitant {
    constructor (name, birthday) {
      super(name, "female", birthday);
      this.species = 'Human';
      this.hands = 2;
      this.legs = 2;
      this.appearance.breastSize = "";
      this.vocabulary = {
        "hi": "Hello!"
      };
      this.say = Inhabitant.saying();
    }
  }
