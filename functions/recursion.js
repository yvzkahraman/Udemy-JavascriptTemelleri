// faktöryel

/* 
5 4 3 2 1 


5.4!

5. 4.3!

5.4.3.2!


5.4.3.2.1

çıkışı hesaplamak

base case 

*/




function factorial(number) {
  // çıkış noktası
  if (number == 1) return 1;

  // yineleme
  return number * factorial(number - 1);
}number


//
// number   1 step sonra
//  5         5*factorial(4)
//  4         5* 4* factorial(3)
// 3          5*4*3*factorial(2)
// 2          5*4*3*2*factorial(1)
// 5          5*4*3*2*1

console.log("factorial 5", factorial(6))


// Elektronik => Bilgisayar=> Dizüstü => Lenovo => Thinkpad .... 

// Elektronik => Ev Elektroniği => Buzdolabı ...