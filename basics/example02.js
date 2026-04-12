// fonksiyon yaz
// parametre olarak yine bir sayı dizisi alsın
// çift olanları ve tek olanları console.log üzerinde yazsın.
// geriye değer döndürmesin

// numbers = [3,5,949, 932, 2,7]

let calculate = function (numbers) {
  let evenNumbers = [];
  let oddNumbers = [];

  // push

  for (let i = 0; i < numbers.length; i++) {
    // %  0 => Ç
    // %2  => T
    if (numbers[i] % 2 == 0) {
      // çift
      // numbers[i]
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }

  console.log("Çift sayılar", evenNumbers);
  console.log("Tek sayılar", oddNumbers);
};

let numbers = [1, 3, 5, 4848, 398, 37, 3940, 329048, 234];

calculate(numbers);
