// Number 2
let kilometres = 30;
let feets = 5000;
let feetToMetres = 0.305;

let resultft = feets * feetToMetres;
let resultkm = kilometres * 1000;

if (resultkm > resultft) {
    console.log("Відстань в кілометрах більша");
} else if (resultkm === resultft) {
    console.log("Відстань однакова");
} else {
    console.log("Відстань в футах більша");
} 