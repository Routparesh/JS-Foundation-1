var readlineSync = require('readline-sync');

let password = readlineSync.question('Enter password: ');
let confirmPassword = readlineSync.question('Confirm password: ');

if (password === confirmPassword) {
    console.log('Password Matched. Password validation Successful.')
}else{
    console.log("Password didn't match. Password validation unsuccessful")
}