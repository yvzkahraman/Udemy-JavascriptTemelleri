let animal = {
  name: "Lion",
  age: 5,
  "age age": 6,
};

// console.log("animal", animal);
animal.isHungry = true;
// console.log(animal.age);

// console.log("name" in animal);

// console.log("animal", animal);

function createAnimal(name, age) {
  return {
    name,
    age,
  };
}

let myPet = createAnimal("snake", 2);

console.log("isHungry" in myPet);

console.log("myPet", myPet);
