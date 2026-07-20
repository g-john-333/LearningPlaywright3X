// Run: node 31_FizzBuzz_coding_excercise.js  (requires "Run In Terminal" if using Code Runner)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
    const inputNumber = parseInt(answer);

    for (let i = 1; i <= inputNumber; i++) {
        (i % 3 == 0) && (i % 5 == 0) ? console.log("FizzBuzz") :
            (i % 3 == 0) ? console.log("Fizz") :
                (i % 5 == 0) ? console.log("Buzz") :
                    console.log(i)
    }

    rl.close();
});
