// console.log(Math.max(1,2,3,4,5))

// let ar =  [1,2,3,4,5];

// console.log(...ar)

function calculate(...prices) {
  return prices.reduce((total, price) => {
    return total +price;
  }, 0);
}

console.log("total :", calculate(1, 2, 3, 4, 5));


let numbers = [1,2,3,4,5]


let newArray = [45,43,...numbers]

let product = {
  name :'Thinkpad',
  price:70000,
  ram : 32,
  ssd: 1000,
  screen :14,
}


let newProduct = {
    ...product,
    isInStock : true,
    name:'Thinkpad T14'
}

console.log("newProduct",newProduct)