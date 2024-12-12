//Number 5
let a5 = 26;
let firstDigit5 = Math.floor(a5 / 10 % 10);
let lastDigit5 = a5 % 10;

if (firstDigit5 === lastDigit5) {
    console.log("Числа однакові");
}
else if (firstDigit5 > lastDigit5) {
    console.log("Перша цифра більша за другу");
} else {
    console.log("Друга цифра більша за першу");
}