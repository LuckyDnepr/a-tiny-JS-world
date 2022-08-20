import { Inhabitant } from "./Inhabitant.js";
import { Woman } from "./Woman.js";
import { Cat } from "./Cat.js";

export class WomanCat extends Woman {
    constructor (name, birthday) {
      super(name, birthday);
      this.species = 'Mutant';
      this.hands = 2;
      this.legs = 2;
      this.appearance.breastSize = "";
      this.vocabulary = {
        "hi": "Hi! I'm Womancat!"
      };
      this.womanSay = Inhabitant.saying().bind(new Woman());
      this.say = Inhabitant.saying().bind(new Cat());
    }
  }
