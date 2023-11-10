var readlineSync = require('readline-sync');

let car = readlineSync.question('Enter Car Name: ');
let days = readlineSync.question('Total Days: ');


function totalRent(car,days){
    if(car === 'Economy'){
        console.log (days*4000);
    }else if(car === 'Midsize'){
        console.log(days*10000)
    }else if(car === 'Luxury'){
        console.log(days*20000)
    }else{
        console.log(`Please enter a valid car name`)
    }
}

console.log(totalRent(car,days))
