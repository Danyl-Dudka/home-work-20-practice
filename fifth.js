//Number 5
let a = 26;
let firstDigit = Math.floor(a / 10 % 10);
let lastDigit = a % 10;

if (firstDigit === lastDigit) {
    console.log("Числа однакові")
}
else if (firstDigit > lastDigit) {
    console.log("Перша цифра більша за другу")
} else {
    console.log("Друга цифра більша за першу")
}