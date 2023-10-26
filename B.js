//B. Perform sorting of an array in descending order. 
const numbers = [5, 2, 9, 1, 5, 6];


numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers); 
