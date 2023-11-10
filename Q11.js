var readlineSync = require('readline-sync');

let celcius = readlineSync.question('Enter celcius: ');

const celciusToFarenhite = function celsuisToFaren (celcius){
    return (celcius*1.8)+32
}

const farenhite = celciusToFarenhite(celcius)


console.log(`Farenhite: ${farenhite}`)
