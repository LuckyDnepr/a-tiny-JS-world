import { SocialTies } from "./SocialTies.js";
import { Age } from "./Age.js";

export class Inhabitant {
    constructor(species, name, birthday = new Date()) {
      this.species = species;
      this.name = name;
      this.age = new Age(birthday);
    }
    say(event) {
      return this.vocabulary.hasOwnProperty(event)
      ? this.vocabulary[event]
      : "Nothing to say";
    };
    getInfo () {
      return `I'm ${this.name}. I'm ${this.age.getAge()} y.o. member of race ${this.species}.`;
    }
  }
