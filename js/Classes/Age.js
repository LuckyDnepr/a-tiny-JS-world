export class Age { //age of inhabitant
  constructor(birthday) { //birthday in forman "MM DD YYYY"
    this._birthday = new Date(birthday);
    this.getBirthday = function () { //get birthday
      return this._birthday.toDateString();
    };
    this.getAge = function (date = new Date()) { //get age of person on the specific date (if no date: on today) date must be object Date()
      return (date.getMonth() - this._birthday.getMonth() > 0)
        ? date.getFullYear() - this._birthday.getFullYear()
        : date.getFullYear() - this._birthday.getFullYear() - 1;
    };
  }
}
