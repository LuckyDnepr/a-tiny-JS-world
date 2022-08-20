export class SocialTies { 
    constructor(role) { //role - social ties - i.e. friends, enemies, neighbors, classmates, etc.
      this._persons = []; //list of persons in this role
      this[`add${role}`] = function (...newPersons) { //add person('s) this way: this.friends.addFriends("Mike", "Bill")
        this._persons.push(...newPersons);
      };
      this[`del${role}`] = function (...delPersons) { //delete person('s) from socail tie this way: this.friends.delFriends("Mike", "Bill")
        this.persons = this._persons.filter(
          (el) => ![...delPersons].includes(el)
        );
      };
      this[`get${role}`] = function () { //get list of person('s) of socail tie: this.friends.getFriends()
        return this._persons;
      };
    }
  }
