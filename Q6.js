var readlineSync = require('readline-sync');

let name = readlineSync.question('Enter a name: ').toUpperCase();

let count = 0;

for(char of name){
    switch (char){
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            count++;
            break;
    }
}

console.log(count);