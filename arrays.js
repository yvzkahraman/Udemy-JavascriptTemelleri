let value = "eymen";

let names = ["yavuz", "selim", "kahraman", "zeynep"];

// length

// console.log(names[0], names[1], names[2], names[3]);

// döngüler

console.log("dizideki eleman sayısı(uzunluk):", names.length);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("names ", names);
names.push(value);
console.log("names ", names);

names.pop();
console.log("names", names);

names.splice(1,1);

console.log("names", names);
