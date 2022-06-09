const { Animal } = require("./AnimalClass.js");
// subclass extends another class... animal and INHERITS all the properties and methods from the parent class
class Lion extends Animal {
  // We only need to declare constructor function in here if we want to apply new methods and properties to the subclass. If we dont it just inherits then from the parent class.
  constructor(name, nourishment, happiness, appearance) {
    super(name, nourishment, happiness, appearance); // subclass properties here
    this.appearance = appearance;
  }
  //methods here

  feedLion() {
    console.log(
      `You chuck a big sirloin steak at ${this.name} and he takes a big bite. ${this.name} is completely stuffed.`
    );
    this.nourishment += 50;
    this.happiness += 50;
    this.appearance -= 25;
    return this;
  }

  onTheProwl() {
    this.nourishment -= 20;
    this.happiness += 20;
    this.appearance -= 10;
    console.log(`${this.name} roams around and stretches his muscles`);
    return this;
  }

  groomLion() {
    this.happiness += 10;
    this.appearance += 50;
    console.log(
      `${this.name}'s mane is fresh and clean... Truly majestic, the King of the jungle!`
    );
    return this;
  }
}

module.exports = { Lion };

// const myAnimal = new Lion("Karl", "100")

// Karl.catchesBuffalo().roars().vitals()
