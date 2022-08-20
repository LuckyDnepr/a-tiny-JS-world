import { Man } from "./Classes/Man.js";
import { Woman } from "./Classes/Woman.js";
import { Dog } from "./Classes/Dog.js";
import { Cat } from "./Classes/Cat.js";
import { WomanCat } from "./Classes/WomanCat.js";

export const initInhabitant = {
    man: function (name, birthday, eyesColor, hairColor, height) {
      const man = new Man(name, birthday);
      man.appearance.eyesColor = eyesColor;
      man.appearance.hairColor = hairColor;
      man.appearance.height = height;
      return man;
    },
    woman: function (name, birthday, eyesColor, hairColor, height, breastSize) {
      const woman = new Woman(name, birthday);
      woman.appearance.eyesColor = eyesColor;
      woman.appearance.hairColor = hairColor;
      woman.appearance.height = height;
      woman.appearance.breastSize = breastSize;
      return woman;
    },
    dog: function (name, gender, birthday, breed, coatColor) {
      const dog = new Dog(name, gender, birthday);
      dog.breed = breed;
      dog.coatColor = coatColor;
      return dog;
    },
    cat: function (name, gender, birthday, breed, coatColor) {
      const cat = new Cat(name, gender, birthday);
      cat.breed = breed;
      cat.coatColor = coatColor;
      return cat;
    },
    womanCat: function (name, birthday, eyesColor, hairColor, height, breastSize) {
      const womanCat = new WomanCat(name, birthday);
      womanCat.appearance.eyesColor = eyesColor;
      womanCat.appearance.hairColor = hairColor;
      womanCat.appearance.height = height;
      womanCat.appearance.breastSize = breastSize;
      return womanCat;
    }
  };
