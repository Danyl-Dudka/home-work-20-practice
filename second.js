// Number 2
let kilometres = 30;
let feets = 50;
let feetToMetres = 0.305;

let resultft = feets * feetToMetres;
if (kilometres > resultft) {
    console.log("Відстань в кілометрах більша")
} else if (kilometres === resultft) {
    console.log("Відстань однакова")
} else {
    console.log("Відстань в футах більша")
} 