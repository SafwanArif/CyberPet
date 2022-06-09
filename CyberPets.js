class Animal {
// constructor function constructs our new object and sets the properties and methods
    constructor(name, nourishment) {
        // properties here
        this.name = name
        this.health = 100
        this.nourishment = 100
        this.happiness = 100
    }
    //methods here
    eats() {
        this.health += 10
        this.nourishment += 20
        this.happiness += 10 
        console.log(`${this.name} has ${this.health} health and their nourishment is ${this.nourishment}.  ${this.name}'s happiness level is ${this.happiness}`)
        return this
    }
    drinks() {
        this.health += 5
        this.happiness += 5
        console.log(`${this.name}'s thirst is now quenched and their health is now ${this.health}. ${this.name}'s happiness level is ${this.happiness}`)
        return this
    }
    sleeps() {
        this.health += 5
        this.nourishment -= 10
        this.happiness -= 3
        console.log(`${this.name} feels fresh after a catnap. Their health has increased to ${this.health} and their nourishment has increased to ${this.nourishment}`)
        return this
    }
    vitals() {
        return console.table({
            name: this.name,
            health: this.health,
            nourishment: this.nourishment,
            happiness: this.happiness,
        });
    }
}


// subclass extends another class.... animal and INHERITS all the properties and methods from the parent class
class Lion extends Animal {
    // We only need to declare constructor function in here if we want to apply new methods and properties to the subclass. If we dont it just inherits then from the parent class.
    // properties here    
        constructor(name, happy) {
            super(name, happy)
            this.happy = happy
        }
    //methods here
        roars() {
            this.nourishment -= 3
            this.happiness += 10
            console.log(`${this.name} is as happy as a lion can be! Lets out a huge roar to let you know it!`)
            return this
        }
        catchesBuffalo() {
            this.nourishment += 50
            this.happiness += 50
            console.log(`${this.name} is completely satisfied.`)
            return this
        }
    }
    
    const Karl = new Lion("Karl", "Roaring")
    
    Karl.catchesBuffalo().roars().vitals()

    // subclass extends another class.... animal and INHERITS all the properties and methods from the parent class
class Eagle extends Animal {
    // We only need to declare constructor function in here if we want to apply new methods and properties to the subclass. If we dont it just inherits then from the parent class.
    // properties here    
        constructor(name, happy) {
            super(name, happy)
            this.happy = happy
        }
    //methods here
        soars() {
            this.nourishment -= 3
            this.happiness += 10
            console.log(`${this.name} is as happy as an eagle can be! Soars high in the sky to let you know it!`)
            return this
        }
        catchesSnake() {
            this.nourishment += 50
            this.happiness += 50
            console.log(`${this.name} is completely satisfied.`)
            return this
        }
    }
    
    const Saf = new Eagle("Saf", "Soaring")
    
    Saf.catchesSnake().soars().vitals()