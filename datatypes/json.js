let shoppingCart = {
  id: 50,
  customer: "Yavuz Selim KAHRAMAN",
  items: ["Pixel 10", "Thinkpad", "Macbook"],
  totalPice: 160000,
};


let jsonString = JSON.stringify(shoppingCart);

console.log("json ",jsonString)


let jsonObject = JSON.parse(jsonString)

console.log("jsonToObject",jsonObject)

let cart = {
    id:5,
    productName:'Thinkpad',
    totalPrice: 70000,
    // toJSON(){
    //     return `${this.productName}`
    // }
}

let cartToJSON = JSON.stringify(cart);
console.log("cartToJSON",cartToJSON)


// let jsonCart = JSON.stringify(cart,["id","productName"])
// console.log("jsonCart",jsonCart)