// Number 6
let a6 = 485;

let firstDigit6 = Math.floor(a6 / 100 % 10);
let secondDigit6 = Math.floor(a6 / 10 % 10);
let thirdDigit6 = a6 % 10;

let sumOfNumbers = firstDigit6 + secondDigit6 + thirdDigit6;
let multiplicationOfNumbers = firstDigit6 * secondDigit6 * thirdDigit6;

if (sumOfNumbers % 2 === 0) {
    console.log("Сума трьох чисел парна");
} else {
    console.log("Сума трьох чисел непарна");
}

if (sumOfNumbers % 5 === 0) {
    console.log("Сума кратна п'яти");
} else {
    console.log("Сума не кратна п'яти");
}

if (multiplicationOfNumbers > 100) {
    console.log("Добуток чисел більше ніж 100");
} else if (multiplicationOfNumbers === 100) {
    console.log("Добуток чисел дорівнює 100");
} else {
    console.log("Добуток чисел менше ніж 100");
}