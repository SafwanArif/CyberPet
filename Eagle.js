const { Animal } = require("./AnimalClass.js");

class Eagle extends Animal {
  // subclass extends another class.... animal and INHERITS all the properties and methods from the parent class
  // We only need to declare constructor function in here if we want to apply new methods and properties to the subclass. If we dont it just inherits then from the parent class.
  constructor(name, nourishment, happiness) {
    // properties here
    super(name, nourishment, happiness, cleanliness);
    this.cleanliness = cleanliness;
  }
  //methods here
  feedEagle() {
    console.log(
      `You chuck a snake towards ${this.name} and he demolishes it. ${this.name} is completely stuffed.`
    );
    this.nourishment += 50;
    this.happiness += 50;
    this.cleanliness -= 20;
    return this;
  }
  soars() {
    this.nourishment -= 3;
    this.happiness += 10;
    console.log(
      `${this.name} is as happy as an eagle can be! Soars high in the sky to let you know it!`
    );
    return this;
  }
  batheEagle() {
    this.cleanliness += 50;
    this.happiness += 30;
    console.log(
      `${this.name}'s beak  is fresh and clean... Truly majestic, ready to rule the skys again!`
    );
    return this;
  }
}

module.exports = { Eagle };

// const Saf = new Eagle("Saf", "Soaring")

// Saf.catchesSnake().soars().vitals()
