import { Inhabitant } from "./Inhabitant.js";

export class Dog extends Inhabitant {
    constructor (name, gender, birthday) {
      super(name, gender, birthday);
      this.species = 'Pet';
      this.breed = "";
      this.coatColor = "";
      this.paws = 4;
      this.vocabulary = {
        "hi": "Woof woof!"
      };
      this.say = Inhabitant.saying();
    }
  }
  