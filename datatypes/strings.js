let single = "tekTirnak";
let double = "ciftTirnak";
let backtrick = `${single} la string değerler tanimlanabilir`;

console.log("uzunluk", single.length);
console.log("tekTirnak[0]", single[0]);
console.log("at", single.at(-1));

// // includes

// let sentence = "Yavuz hoca ile javascript çok keyifli";

// console.log("includes, hoca", sentence.includes("Hoca"));

// //startswith endswith

// console.log("startswith, Yavuz", sentence.startsWith("Ya"))

// console.log("endsWith, li", sentence.endsWith("li"));

// indexOf

// console.log("indexof a", sentence.indexOf("ş"))

// if(sentence.indexOf("aradı")>-1){

// }

let sentence = " Yavuz hoca ile Javascript çok keyifli ";

//slice 

console.log("slice", sentence.slice(0,4))


console.log("trim", sentence.trim())


console.log("replace", sentence.replace("Yavuz", "Selim"))
h