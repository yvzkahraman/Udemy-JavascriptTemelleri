let arr = ["Yavuz", "Eymen", "Zeynep"];

// let yavuz = arr[0];

// console.log("yavuz",yavuz)

let [, ...others] = arr;

console.log("c", others);

let user = {
  firstName: "Yavuz Selim",
  lastName: "KAHRAMAN",
  age: 35,
};

let { firstName: ilkAd, lastName, age } = user;

console.log("ilkAd", ilkAd);


console.log(...arr)
console.log({...user,firstName:'Eymen'})

console.log([...arr,"Oğuz"])