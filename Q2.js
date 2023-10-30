function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            console.log(result = num1 + num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 !==0){
                result = num1 / num2;
            }else{
                console.log('Divison zero not allowed');
                return
            }
            break;;
        default:
            console.log("Invalid operator")
            return
    }
    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

calculator(5, 3, '+'); // Addition
calculator(8, 2, '-'); // Subtraction
calculator(4, 6, '*'); // Multiplication
calculator(10, 2, '/'); // Division
calculator(5, 0, '/');  // Division by zero (error)