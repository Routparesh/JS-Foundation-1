
var readlineSync = require('readline-sync');

let withdrawal = Number(readlineSync.question('Enter withdral Ammount: '));
let deposite = Number(readlineSync.question('Enter deposite Ammount: '));

const user = {
    'name':'paresh',
    'balance': 10000,
}

if(deposite) {
    let updateBalance = user.balance + deposite
    console.log(`Your Account Balance is ${updateBalance}`);
}else if(withdrawal){
    if(withdrawal <= user.balance){
        let withdrawalBalance = user.balance - withdrawal
        console.log(`Your Account Balance is: ${withdrawalBalance}`)
    }else{
        console.log('Insufficient balance')
    }
}else(
    console.log(`Please enter valid number`)
)

