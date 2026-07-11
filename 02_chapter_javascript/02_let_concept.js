let x=10;
console.log(x); // Output: 10

for (let a = 0; a < 100000; a++) {
    console.log(a);
    test();
}

function test() {
    console.log("Hello");
}