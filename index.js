let random = Math.random();

let a = Number(prompt("Enter First Number"));
let c = prompt("Enter Operation");
let b = Number(prompt("Enter Second Number"));


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    // perform correct operation
    alert(`The result is ${a} ${c} ${b}` );
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
 else {
    // perform incorrect operation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
