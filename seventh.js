//Number 7
let a7 = 123;

let firstDigit7 = Math.floor(a7 / 100 % 10);
let secondDigit7 = Math.floor(a7 / 10 % 10);
let thirdDigit7 = Math.floor(a7 % 10);

if (firstDigit7 === secondDigit7 && secondDigit7 === thirdDigit7) {
    console.log("Всі номери однакові");
} else {
    console.log("Не всі номери однакові");
}

if (firstDigit7 === secondDigit7 || secondDigit7 === thirdDigit7 || firstDigit7 === thirdDigit7) {
    console.log("Деякі номери однакові");
} else {
    console.log("Всі номери різні");
}