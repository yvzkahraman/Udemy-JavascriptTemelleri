// function Animal(name, species) {
//   this.name = name;
//   this.species = species;
//   this.isHungry = false;
// }

// let dog = new Animal("Rex", "Köpek");
// let cat = new Animal("Pamuk", "Kedi");

// console.log("dog", dog);

// console.log("cat", cat);

// let catII = new Animal();

// catII.sayHi = function(){
//     console.log("meow");
// }

// console.log("catII", catII);?

let zoo = {
  cat: {
    name: "Pamuk",
  },
};

console.log(zoo?.dog?.name);

console.log(zoo?.["cat"]?.["name"]);

console.log("Merhaba dünya");

let symbolValue = Symbol(123);
let symbolValue2 = Symbol(123);

console.log("symbol value", symbolValue, symbolValue2);

console.log("result ", symbolValue == symbolValue2);


