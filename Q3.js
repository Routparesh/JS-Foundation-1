var readlineSync = require('readline-sync');

let color1 = readlineSync.question('color1: ').toLocaleLowerCase(); 
let color2 = readlineSync.question('color2: ').toLocaleLowerCase(); 

let resultColor;

switch(true){
    case (color1 === 'red' && color2 === 'blue' || color1==='blue' && color2 === 'red'):
        resultColor = 'purple';
        break;
    case(color1 === 'red' && color2 === 'yellow' || color1==='yellow' && color2 === 'red'):
        resultColor = 'orange'
        break;
    case(color1 === 'blue' && color2 === 'yellow' || color1==='yellow' && color2 === 'blue'):
        resultColor = 'green'
        break;
    default:
        resultColor = "Invalid color combination"
}

console.log(resultColor)