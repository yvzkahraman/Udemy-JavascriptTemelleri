// fonksiyon 2 parametre
// numbers, number
// [1,2,3,4,5], 4   => [4,5]

// splice

//

// numbersın ilk durumu [1,2,3,4,5,6,7,8]
// indisin değeri  array
//   0             [2,3,4,5,6,7,8]
//   1             [2,4,5,6,7,8]
//   2             [2,4,6,7,8]

// 0
function removeUnder(numbers, number) {
  // for döngüsü

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < number) {
      numbers.splice(i, 1);
      console.log("splicedan sonra", numbers);
      i--;
    }
  }

  console.log("numbers silindikten sonra", numbers);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

removeUnder(arr, 6);
