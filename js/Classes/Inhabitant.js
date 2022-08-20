import { SocialTies } from "./SocialTies.js";
import { Appearance } from "./Appearance.js";
import { Age } from "./Age.js";

export class Inhabitant {
    static saying () { //function for saying phrases from _vocabulary
      return function (event) {
          return this.vocabulary.hasOwnProperty(event)
          ? this.vocabulary[event]
          : "Nothing to say";
        };
      }
    constructor(name, gender, birthday = new Date()) {
      this.name = name;
      this.gender = gender;
      this.age = new Age(birthday);
      this.friends = new SocialTies("Friends");
      this.enemies = new SocialTies("Enemies");
      this.appearance = new Appearance();
    }
  }
