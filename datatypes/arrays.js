// let names = ["selim", "yavuz", "eymen", "zeynep"];
// let names2 = ["ahmet"];

// console.log("concat", names.concat(names2, "ayşe"));

// console.log("names", names);

let names = ["yavuz", "selim", "eymen", "selim"];

// let findSelim = function (firstname) {
//   console.log(1);
//   if (firstname == "selim") return true;
// };

// let findedValue = names.find(findSelim);

// console.log("findedValue", findedValue);

// let findedValues = names.filter(findSelim);

// console.log("findedValues", findedValues);

//LINQ

// let findedValue2 = names.find((x) => x == "selim");

// let findedValues2 = names.filter((x) => x == "selim");

// console.log("findedVale", findedValue2);
// console.log("findedvalues2", findedValues2);

// let mappedValues3 = names.map((x) => {
//   if (x == "yavuz") {
//     return "Yavuz Hoca";
//   }
//   return x;
// });

// console.log("mappedValues3", mappedValues3);

// console.log(names.map((x) => x.length));

// reduce => birikimli toplam

let products = [
  {
    productName: "mouse",
    price: 1000,
    quantity: 5,
  },
  {
    productName: "keyboard",
    price: 2000,
    quantity: 10,
  },
  {
    productName: "ram",
    price: 5000,
    quantity: 5,
  },
];

let totalPrice = products.reduce((birikimliToplam, product) => {
  return birikimliToplam + product.price * product.quantity;
}, 0);

console.log("totalPrice", totalPrice);

let numbers = [2, 5, 25, 3, 9, 7];

console.log(numbers.sort((a, b) => b - a));
