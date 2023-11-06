let marks = [20,40,80,26,59,79,89,98,45]

//find the greatest in the arra


// Initialize the maximum mark with the first student's mark
let maxMark = marks[0];

// Iterate through the array to find the highest mark using the ternary operator
marks.forEach((mark) => {
    maxMark = mark > maxMark ? mark : maxMark;
});

console.log(`The highest mark in the class is: ${maxMark}`);

