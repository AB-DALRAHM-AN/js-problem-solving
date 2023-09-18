// my solution
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
simpleMultiplication(4); // output 32
simpleMultiplication(5); // output 45

// best practice
function simpleMultiplication(n) {
  n * (n % 2 ? 9 : 8);
}; 
simpleMultiplication(2); // output 16
simpleMultiplication(1); // output 9
