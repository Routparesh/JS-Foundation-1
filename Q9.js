const readline = require('readline-sync');

// Initialize an empty array to store user inputs
const userInputArray = [];

// Use a loop to take user input and push it into the array
while (true) {
  const userInput = readline.question('Enter a Number (or type "done" to finish): ');
  if (userInput.toLowerCase() === 'done') {
    break;// Exit the loop when the user types "done"
    
  }else if(isNaN(userInput)){
    console.log('Please enter a Number');
  }
   else {
    userInputArray.push(Number(userInput));
  }
}

for(var i = 0; i < userInputArray.length; i++){
    const currentNumber = userInputArray[i];
    if (currentNumber % 3 === 0 && currentNumber % 2 !== 0) {
        console.log(currentNumber);
        continue;
    }
}