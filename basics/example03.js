//fonksiyon yaz
// en büyük değeri, dizi almalı

//[3,5,7,6,9,11,10]

function max(numbers) {
  let maxValue = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) maxValue = numbers[i];
  }

  console.log("Max value :", maxValue);
}

let arr = [3, 5, 7, 6, 9, 11, 10];

max(arr);
