import { Inhabitant } from "./Inhabitant.js";

export class Humans extends Inhabitant {
  constructor (name, gender, birthday) {
    super("Humans", name, birthday);
    this.gender = gender;
    this.hands = 2;
    this.legs = 2;
  }
  getInfo () {
    return super.getInfo() + ` A ${this.gender} with ${this.hands} hands and ${this.legs} legs.`;
  }
}
