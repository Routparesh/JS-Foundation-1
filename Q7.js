const readline = require('readline-sync');

// Initialize an empty array to store user inputs
const userInputArray = [];

// Use a loop to take user input and push it into the array
while (true) {
  const userInput = readline.question('Enter a value (or type "done" to finish): ');
  if (userInput.toLowerCase() === 'done') {
    break; // Exit the loop when the user types "done"
  } else {
    userInputArray.push(userInput);
  }
}

let newArr = []

for(input of userInputArray){
    if(!newArr.includes(input)){
        newArr.push(input)
    }
}

// Display the array with user inputs
console.log('User inputs:', newArr);
