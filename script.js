function displayMessagesLoop() {
    const messages = [
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    "It is impossible to manufacture or imitate love",
    "Every human life is worth the same, and worth saving.",
    "Have a biscuit, Potter.",
    "I love my Baby"
  ]


const numberOfIterations = 1;
for (let i = 0; i < numberOfIterations; i++) {
    const randomIndex = Math.floor(Math.random() * messages.length);

    switch (randomIndex) {
      case 0:
        console.log("Message 1:", messages[randomIndex]);
        break;
      case 1:
        console.log("Message 2:", messages[randomIndex]);
        break;
      case 2:
        console.log("Message 3:", messages[randomIndex]);
        break;
      case 3:
        console.log("Message 4:", messages[randomIndex]);
        break;
      default:
        console.log("Default message:", messages[randomIndex]);
    }
  }

}
displayMessagesLoop();
