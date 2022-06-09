const inquirer = require("inquirer");
const { Lion } = require("../CyberPet/Lion.js");
const { Eagle } = require("../CyberPet/Eagle.js");

let myAnimal = "";

try {
  const start = async () => {
    const { typeOfAnimal } = await inquirer.prompt({
      type: "list",
      name: "typeOfAnimal",
      message:
        "What animal would you like? Please choose from the following options.",
      choices: [
        {
          key: "A",
          name: "Lion",
          value: "lion",
        },
        {
          key: "B",
          name: "Eagle",
          value: "eagle",
        },
      ],
    });
    const { animalName } = await inquirer.prompt({
      type: "input",
      name: "animalName",
      message: "What is your new pet called?",
    });
    if (typeOfAnimal == "lion") {
      myAnimal = new Lion(animalName);
    } else if (typeOfAnimal == "eagle") {
      myAnimal = new Eagle(animalName);
    }
    await playersAnimal();
  };

  start();
} catch (error) {
  console.log("Looks like the lion ate your homework!", error);
}

async function playersAnimal() {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        key: "a",
        name: "Feed your pet",
        value: "feed",
      },
      {
        key: "b",
        name: "Give your pet a drink",
        value: "drink",
      },
      {
        key: "c",
        name: "View your pet's status",
        value: "status",
      },
      {
        key: "d",
        name: "Quit the game",
        value: "quit",
      },
    ],
  });

  if (choice === "status") console.log(myAnimal.vitals());
  if (choice === "feed") await myAnimal.eats();
  if (choice === "drink") await myAnimal.drinks();
  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }
  myAnimal.vitals();
  await playersAnimal();
}

async function confirmQuit() {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message:
      "Are you sure you want to quit? This will mean your pet has to be returned to the Animal Shelter...",
    choices: [
      {
        key: "a",
        name: "Yes, I'm sure.",
        value: "yes",
      },
      {
        key: "b",
        name: "No, I'll play some more.",
        value: "no",
      },
    ],
  });

  if (quitChoice === "yes") return true;
  else return false;
}

async function gameOver() {
  const { playAgain } = await inquirer.prompt({
    type: "list",
    name: "playAgain",
    message: "Would you like to play again?",
    choices: [
      {
        key: "a",
        name: "Yes",
        value: "yes",
      },
      {
        key: "b",
        name: "No",
        value: "no",
      },
    ],
  });
  console.log(playAgain);
  if (playAgain === "yes") start();
  else return;
}
