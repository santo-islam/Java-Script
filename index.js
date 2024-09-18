 // Function 1: calculateDifference
function calculateDifference(a, b) {
    return a - b;
  }
  
  // Function 2: isOdd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // Function 3: findMin
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // Function 4: filterEvenNumbers
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Function 5: sortArrayDescending
  function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
  // Function 6: lowercaseFirstLetter
  function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
  }
  
  // Function 7: countVowels
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
  }
  
  // Function 8: findAverage
  function findAverage(arr) {
    if (arr.length === 0) return 0;
    const total = arr.reduce((acc, num) => acc + num, 0);
    return total / arr.length;
  }
  