"use strict";
/* 
import { initInhabitant } from "./js/initInhabitant.js";
import { inhabitantResume, getPrintableInhabitantInfo } from "./js/introduceInhabitant.js";
 */

/*
const inhabitants = { //object for presentation
    woman: initInhabitant.woman ("Jinny", "03 13 2003", "celestial", "blonde", "172 cm", "B"),
    man: initInhabitant.man ("Billy", "05 24 2001", "blue", "brown", "175 cm"),
    cat: initInhabitant.cat ("Starling", "female", "05 05 2020", "British", "grey"),
    dog: initInhabitant.dog ("Oscar", "male", "06 01 2018", "Dalmatian", "black and white spotted"),
    womanCat: initInhabitant.womanCat ("Mary", "06 13 2000", "blue", "brown", "174 cm", "C")
  }; */

  class Inhabitant {
    constructor(species, name) {
      this.species = species;
      this.name = name;
    }
    say(event) {
      return this.vocabulary.hasOwnProperty(event)
      ? this.vocabulary[event]
      : "Nothing to say";
    };
    getInfo () {
      return `I'm ${this.species} and my name is ${this.name}.`;
    }
  }

  class Humans extends Inhabitant {
    constructor (name, gender) {
      super("Human", name);
      this.gender = gender;
      this.hands = 2;
      this.legs = 2;
    }
    getInfo () {
      return super.getInfo() + ` I'm ${this.gender} with ${this.hands} hands and ${this.legs} legs.`;
    }
  }

  class FourLegged extends Inhabitant {
    constructor (name, gender) {
      super("Four-legged animal", name);
      this.gender = gender;
      this.paws = 4;
    }
    getInfo () {
      return super.getInfo() + ` I'm ${this.gender} with ${this.paws} paws.`;
    }
  }

  class CatlikeMutants extends Inhabitant {
    constructor (gender, name) {
      super("Mutant", name);
      this.gender = gender;
      this.hands = 2;
      this.legs = 2;
      this.say = this.say.bind(new Cat());
    }
    getInfo () {
    return super.getInfo() + ` I'm ${this.gender} with ${this.hands} hands and ${this.legs} legs.`;
    }
  }

  class Man extends Humans {
    constructor (name) {
      super(name, "male");
      this.vocabulary = {
        "hi": "Hey guys!"
      };
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }

  class Woman extends Humans {
    constructor (name) {
      super(name, "female");
      this.vocabulary = {
        "hi": "Hi cute!"
      };
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }



  class Cat extends FourLegged {
    constructor (gender, name) {
      super(name, gender);
      this.vocabulary = {
        "hi": "Nyav nyav!"
      };
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }

  class Dog extends FourLegged {
    constructor (gender, name, birthday) {
      super(name, gender);
      this.vocabulary = {
        "hi": "Woof woof!"
      };
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }
  
  class WomanCat extends CatlikeMutants {
    constructor (name) {
      super("female", name);
    }
    getInfo () {
      return `${this.say("hi")} ` + super.getInfo();
    }
  }


function initInhabitants () { //init some inhabitants for presentation
  return [
    new Man ("Billy"),
    new Woman ("Jinny"),
    new Cat("female", "Starling"),
    new Dog("male", "Oscar"),
    new WomanCat("Jessica")
  ];
}

function printInhabitantsInfo (inhabitants) {
  inhabitants.map((person) => person.getInfo() + "\n").forEach(info => print(info));
}

printInhabitantsInfo (initInhabitants());
/* 
const man = new Man ("Billy");
console.log(man.getInfo());
const woman = new Woman ("Jinny");
console.log(woman.getInfo());
const cat = new Cat("female", "Starling");
console.log(cat.getInfo());
const dog = new Dog("male", "Oscar");
console.log(dog.getInfo());
const womanCat = new WomanCat("Jessica");
console.log(womanCat.getInfo());
 */
/*
setFriends(); //set some friend for inhabitants
setEnemies(); //set some enemies for inhabitants

print(printAllInhabitantsInfo(inhabitants));

function setFriends () { //function for presentation
  inhabitants.woman.friends.addFriends(inhabitants.man, inhabitants.cat, inhabitants.dog);
  inhabitants.man.friends.addFriends(inhabitants.dog, inhabitants.woman);
  inhabitants.cat.friends.addFriends(inhabitants.woman, inhabitants.womanCat);
  inhabitants.dog.friends.addFriends(inhabitants.man, inhabitants.woman);
  inhabitants.womanCat.friends.addFriends(inhabitants.cat, inhabitants.man);
}

function setEnemies () { //function for presentation
  inhabitants.woman.enemies.addEnemies (inhabitants.womanCat);
  inhabitants.cat.enemies.addEnemies (inhabitants.dog);
  inhabitants.dog.enemies.addEnemies (inhabitants.cat, inhabitants.womanCat);
  inhabitants.womanCat.enemies.addEnemies (inhabitants.dog);
}

function printAllInhabitantsInfo(inhabitants) { //function for presentation
  let printableInfo = "",
  printableResume = "";
  for (const resident in inhabitants) {
    printableInfo += getPrintableInhabitantInfo(inhabitants[resident]) + "\n";
    printableResume += inhabitantResume(inhabitants[resident]) + "\n\n";
  }
  return printableInfo + "\n" + printableResume;
}
 */
