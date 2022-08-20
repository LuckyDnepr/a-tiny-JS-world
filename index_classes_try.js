"use strict";

import { initInhabitant } from "./js/initInhabitant.js";
import { inhabitantResume, getPrintableInhabitantInfo } from "./js/introduceInhabitant.js";
/*
const inhabitants = { //object for presentation
    woman: initInhabitant.woman ("Jinny", "03 13 2003", "celestial", "blonde", "172 cm", "B"),
    man: initInhabitant.man ("Billy", "05 24 2001", "blue", "brown", "175 cm"),
    cat: initInhabitant.cat ("Starling", "female", "05 05 2020", "British", "grey"),
    dog: initInhabitant.dog ("Oscar", "male", "06 01 2018", "Dalmatian", "black and white spotted"),
    womanCat: initInhabitant.womanCat ("Mary", "06 13 2000", "blue", "brown", "174 cm", "C")
  }; */

const man = initInhabitant.man ("Billy", "05 24 2001");

console.log(man.getInfo());

const woman = initInhabitant.woman ("Jinny", "03 13 2003");
console.log(woman.getInfo());
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
