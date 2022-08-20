export function inhabitantResume (inhabitant) {
    switch (inhabitant.constructor.name) {
        case "Man":
            return [
                `<span class="name">${inhabitant.name}: </span>${inhabitant.say("hi")} `,
                `I'm ${inhabitant.name} and I'm ${inhabitant.constructor.name}. `,
                `I was born on ${inhabitant.age.getBirthday()}. \n`,
                `I'm ${inhabitant.age.getAge()} and my height ${inhabitant.appearance.height}. `,
                `I have ${inhabitant.appearance.eyesColor} eyes and ${inhabitant.appearance.hairColor} hair. \n`,
                `I'm friends with ${getSocialTiesNames(inhabitant, "friends")}. `,
                `Here a list of my enemies: ${getSocialTiesNames(inhabitant, "enemies")}.`,
            ].join("");
        case "Woman":
            return [
                `<span class="name">${inhabitant.name}: </span>${inhabitant.say("hi")} `,
                `I'm ${inhabitant.name} and I'm ${inhabitant.constructor.name}. `,
                `I was born on ${inhabitant.age.getBirthday()}. \n`,
                `I'm ${inhabitant.age.getAge()} and my height ${inhabitant.appearance.height}. `,
                `I have ${inhabitant.appearance.eyesColor} eyes, ${inhabitant.appearance.hairColor} `,
                `hair and breasts size ${inhabitant.appearance.breastSize}. \n`,
                `I'm friends with ${getSocialTiesNames(inhabitant, "friends")}. `,
                `Here a list of my enemies: ${getSocialTiesNames(inhabitant, "enemies")}.`,
            ].join("");
        case "Dog":
        case "Cat":
            return [
                `<span class="name">${inhabitant.name}: </span>${inhabitant.say("hi")} `,
                `I'm ${inhabitant.constructor.name} ${inhabitant.gender} ${inhabitant.name}. `,
                `I was born on ${inhabitant.age.getBirthday()}. \n`,
                `I'm ${inhabitant.age.getAge()} and my breed is ${inhabitant.breed}. I have ${inhabitant.coatColor} coat. \n`,
                `I'm friends with ${getSocialTiesNames(inhabitant, "friends")}. `,
                `Here a list of my enemies: ${getSocialTiesNames(inhabitant, "enemies")}.`,
            ].join("");
        case "WomanCat":
            return [
                `<span class="name">${inhabitant.name}: </span>${inhabitant.say("hi")} `,
                `I'm ${inhabitant.name}. I was born on ${inhabitant.age.getBirthday()}. \n`,
                `I'm ${inhabitant.age.getAge()} and my height ${inhabitant.appearance.height}. `,
                `I have ${inhabitant.appearance.eyesColor} eyes, ${inhabitant.appearance.hairColor}`,
                ` hair and breasts size ${inhabitant.appearance.breastSize}. \n`,
                `I'm friends with ${getSocialTiesNames(inhabitant, "friends")}. `,
                `Here a list of my enemies: ${getSocialTiesNames(inhabitant, "enemies")}. \n`,
                `By the way, I can say "Hello" like woman: "${inhabitant.womanSay("hi")}".`,
            ].join("");
        default:
            break;
    }
}

export function getPrintableInhabitantInfo(inhabitant) {
    const watchFields = ["species", "name", "gender", "legs", "hands", "paws"],
          getArraysFields = ["say", "friends", "enemies"]; //properties excluded from the output
    let printableInfo = [];
  
    printableInfo
      .push(...((watchFields.map((field) => {
        if (inhabitant.hasOwnProperty(field)) {
          return makePrintableSpan(inhabitant[field], field);
        } else {
          return "";
        }
      }))
      .filter((info) => info != ""))
      );
    printableInfo  
      .push(...getArraysFields.map((field) => {
        if (field == "say") {
          return makePrintableSpan(inhabitant.say("hi"), field);
        } else {
          return makePrintableSpan(getSocialTiesNames(inhabitant, field), field);
        }
      }));
    return printableInfo.join(", ");
    }
  
function makePrintableSpan(text, cssClass) {
    return `<span class="${cssClass}">${text}</span>`;
}

function getSocialTiesNames (inhabitant, contactType) {
    const fName = `get${contactType.charAt(0).toUpperCase()}${contactType.slice(1)}`;
    const persons = inhabitant[contactType][fName]();
    return (persons.length == 0) ? "no one" : persons.map((person) => person.name).join(" and ");
}
