// let animal = {
//   name: "Lion",
//   age: 5,
// };

// // console.log("animal", animal);
// animal.isHungry = true;
// console.log(animal.age);

// console.log("name" in animal);

// console.log("animal", animal);

// function createAnimal(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let myPet = createAnimal("snake", 2);

// console.log("isHungry" in myPet);

// console.log("myPet", myPet);

// console.log("animal", animal);

// delete animal.isHungry;

// console.log("animal", animal);

// javascript objeler refere
// primitive  (ilkel)

// let firstname = "Yavuz Selim";
// let name2 = "Eymen";

// firstname = name2;

// name2 = "Yavuz";

// console.log("Firstname", firstname);

// let user2 = {
//   firstname: "Yavuz Selim KAHRAMAN",
//   age: 34,
// };

// user.firstname = "eymen";

// console.log(user === user2);

// console.log(user2.firstname);

// let user2 = user;

// user2.firstname = "Zeynep";

// // console.log(user.firstname);

// // let newUser = Object.assign({}, user);

// // newUser.firstname = "selim";

// // console.log("user.firstname", user.firstname);

// // console.log("yeni user", newUser);
// // let newUser = Object.assign({}, user);

// // newUser.firstname = "selim";

// // console.log("user.firstname", user.firstname);

// // console.log("yeni user", newUser);

// let user = {
//   firstname: "Yavuz Selim KAHRAMAN",
//   age: 34,
//   adress: {
//     city: "Ankara",
//   },
// };

// // GC

// let createdUser = Object.assign({}, user);

// createdUser.adress.city = "Antalya";

// console.log("createduser", createdUser);
// console.log("user", user);

// user = null;

// this

// let dog = {
//   petName: "Rex",
//   age: 2,

//   dog2: {
//     age2: 3,

//     sayHi2: function () {
//       console.log(this.age2);
//     },
//   },

//   sayHi: function () {
//     console.log(" Woof!, my name is", this.petName);

//     this.dog2.age2;
//   },
// };

// dog.sayHi();
// dog.dog2.sayHi2();
