//Number 4
let a4 = 3214;
let lastDigit4 = (a4 % 10);

if (lastDigit4 % 2 === 0) {
    console.log("Остання цифра парна: " + lastDigit4);
} else if (lastDigit4 % 2 !== 0) {
    console.log("Остання цифра непарна: " + lastDigit4);
}