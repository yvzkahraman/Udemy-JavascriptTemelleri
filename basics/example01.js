// bir fonksiyon yazılsın
// parametre olarak bir sayı dizisi alsın
// sayıların [3,5,8,12]  function(arr)=>  ortalamasını

function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  let count = numbers.length;

  let avg = total / count;

  return avg;
}

let scores = [100, 20, 30, 20];

console.log("ortalama :", calculateAverage(scores));
