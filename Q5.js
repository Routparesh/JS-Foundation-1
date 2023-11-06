var readlineSync = require('readline-sync');

let name = readlineSync.question('Enter a name: ');

let modifyName = name.charAt(0).toUpperCase() + name.slice(1);

console.log(name === name.charAt(0).toLocaleLowerCase() + name.slice(1) ? modifyName : name)
