class Animal {
  constructor(name, nourishment, happiness) {
    // constructor function constructs our new object and sets the properties and methods
    this.name = name; // properties here
    this.health = 50;
    this.hunger = 50;
    this.happiness = 50;
    this.nourishment = nourishment;
  }
  eats() {
    this.health += 10;
    this.hunger += 20;
    this.happiness += 10;
    console.log(
      `${this.name} has ${this.health} health and their hunger is ${this.hunger}.  ${this.name}'s happiness level is ${this.happiness}`
    );
    return this;
  }
  drinks() {
    this.health += 5;
    this.happiness += 5;
    console.log(
      `${this.name}'s thirst is now quenched and their health is now ${this.health}. ${this.name}'s happiness level is ${this.happiness}`
    );
    return this;
  }
  sleeps() {
    this.health += 5;
    this.hunger -= 10;
    this.happiness -= 3;
    console.log(
      `${this.name} feels fresh after a catnap. Their health has increased to ${this.health} and their hunger has increased to ${this.hunger}`
    );
    return this;
  }
  vitals() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
      happiness: this.happiness,
    });
  }
}

module.exports = { Animal };
