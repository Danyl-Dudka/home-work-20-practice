//Number 8
let a8 = 123321;

let firstDigit8 = Math.floor(a8 / 100000 % 10);
let secondDigit8 = Math.floor(a8 / 10000 % 10);
let thirdDigit8 = Math.floor(a8 / 1000 % 10);
let fourthDigit8 = Math.floor(a8 / 100 % 10);
let fifthDigit8 = Math.floor(a8 / 10 % 10);
let sixthDigit8 = a8 % 10;

if (firstDigit8 === sixthDigit8 && secondDigit8 === fifthDigit8 && thirdDigit8 === fourthDigit8) {
    console.log("Твій номер зеркальний");
} else {
    console.log("Твій номер не зеркальний");
}