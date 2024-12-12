// Number 6
let a = 485;

let firstDigit = Math.floor(a / 100 % 10);
let secondDigit = Math.floor(a / 10 % 10);
let thirdDigit = a % 10;

let sumOfNumbers = firstDigit + secondDigit + thirdDigit;
let multiplicationOfNumbers = firstDigit * secondDigit * thirdDigit;

if (sumOfNumbers % 2 === 0) {
    console.log("Сума трьох чисел парна")
} else {
    console.log("Сума трьох чисел непарна")
}

if (sumOfNumbers % 5 === 0) {
    console.log("Сума кратна п'яти")
} else {
    console.log("Сума не кратна п'яти")
}

if (multiplicationOfNumbers > 100) {
    console.log("Добуток чисел більше ніж 100")
} else if (multiplicationOfNumbers === 100) {
    console.log("Добуток чисел дорівнює 100")
} else {
    console.log("Добуток чисел менше ніж 100")
}