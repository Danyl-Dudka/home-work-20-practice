//Number 8
let a = 123321;

let firstDigit = Math.floor(a / 100000 % 10);
let secondDigit = Math.floor(a / 10000 % 10);
let thirdDigit = Math.floor(a / 1000 % 10);
let fourthDigit = Math.floor(a / 100 % 10);
let fifthDigit = Math.floor(a / 10 % 10);
let sixthDigit = a % 10;

if (firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit) {
    console.log("Your number is mirrored")
} else {
    console.log("Your number is not a mirror")
}