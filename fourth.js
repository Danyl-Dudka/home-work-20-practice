//Number 4
let a = 3214;
let lastDigit = (a % 10);
console.log(lastDigit)

if (lastDigit % 2 === 0) {
    console.log("Остання цифра парна")
} else if (lastDigit % 2 !== 0) {
    console.log("Остання цифра непарна")
}