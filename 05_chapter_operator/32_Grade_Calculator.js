// Run: node 32_Grade_Calculator.js  (requires "Run In Terminal" if using Code Runner)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter marks: ", (answer) => {
    const marks = parseInt(answer, 10);

if (marks >= 90 && marks <= 100) {
    console.log("A");
} else if (marks >= 80 && marks < 90) {
    console.log("B");
} else if (marks >= 70 && marks < 80) {
    console.log("C");
} else if (marks >= 60 && marks < 70) {
    console.log("D");
} else if (marks >= 0 && marks < 60) {
    console.log("F");
} else {
    console.log("Invalid Input");
}

    rl.close();
});
