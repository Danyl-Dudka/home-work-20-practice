//Number 7
let a = 123;

let firstDigit = Math.floor(a / 100 % 10);
let secondDigit = Math.floor(a / 10 % 10);
let thirdDigit = Math.floor(a % 10);

if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    console.log("All numbers is the same")
} else {
    console.log("Not all numbers are the same")
}

if (firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit) {
    console.log("Some numbers are the same")
} else {
    console.log("All numbers are different")
}