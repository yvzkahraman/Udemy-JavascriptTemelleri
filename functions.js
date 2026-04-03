// iplik  => fabrika ... => gömlek, pantolon
// süreçleri fonk

// alert(), console.log(), prompt(), confirm()

//  let returnValue = confirm()

// let returnValue = confirm("Emin misiniz ?");
// console.log("rv", returnValue);

// //confirm() a=b alert("") if(cevap )

// confirm()

//void

//let ile tanımlama yapıyorsan

// let message= ""

// function showMessage() {
// //   let message = "mesaj";

// // et yavuz = 34;l
// message = "yavuz "

//   console.log("function'ın içinden", message);
//   // return "Mesaj gösterildi";
// }

// // console.log("yavuz",yavuz)

// //  let returnValue = showMessage();

// //  console.log("rv",returnValue);

// showMessage();

// iplik

// function showMessage(message) {
//   console.log("message", message);

//   message = message || "bilinmeyen mesaj";

//   alert("show message : " + message);
// }

// showMessage();

console.log("sen :", calculateAge(1993));

function calculateAge(birthYear) {
  return 2026 - +birthYear;
}

// let year = prompt("Kaç yılında doğdun", 2000);

// let returnValue = calculateAge(year);

// alert("Sen " + returnValue + " yaşındasın");

let calculatedAge = calculateAge2(1994);

console.log("hesaplanmış yaş", calculatedAge);

let calculateAge2 = function (birthYear) {
  return 2026 - +birthYear;
};

console.log("calculateAge2", calculateAge2("2000"));

//arrow 