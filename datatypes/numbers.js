// let billion = 1_000_000_000;

// console.log("billion", billion);

// let micro = 1e-6;
// let mega = 7.3e9;

// console.log("micro", micro);
// console.log("mega", mega);

// let num1 = 0.1;
// let num2 = 0.2;

// console.log(num1 + num2);
// //numbers

// // 1/3  = 0.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

// le

let num = 3.5432234234;
let num2 = 3.1;
let num3 = 3.9;

console.log("floor", Math.floor(num), Math.floor(num2), Math.floor(num3));
console.log("ceil", Math.ceil(num), Math.ceil(num2), Math.ceil(num3));
console.log("round", Math.round(num), Math.round(num2), Math.round(num3));
console.log("trunc", Math.trunc(num), Math.trunc(num2), Math.trunc(num3));

console.log("toFixed", +num.toFixed(2));

let val = "Yavuz Selim KAHRAMAN";
let val2 = 39;

console.log("val is number ? ", !isNaN(val));

console.log("val is number ? ", isFinite(val2));

//parseInt

let stringNumber = "3.4";

let intNumber = parseInt(stringNumber);

let floatNumber = parseFloat(stringNumber);
console.log("converted number int", intNumber);
console.log("converted float number", floatNumber);
