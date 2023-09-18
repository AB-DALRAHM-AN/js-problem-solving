// my solution
function isDivisible(n, x, y) {
  n % x === 0 && n % y === 0 ? console.log(true) : console.log(false);
}

isDivisible(3, 3, 4); // output false
isDivisible(12, 3, 4); // output true
isDivisible(8, 3, 4); // output false
isDivisible(48, 3, 4); // output true
isDivisible(3, 3, 4); // output false
isDivisible(48, 3, 4); // output true

// best practice
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

isDivisible(3, 3, 4); // output false
isDivisible(12, 3, 4); // output true
isDivisible(8, 3, 4); // output false
isDivisible(48, 3, 4); // output true
isDivisible(3, 3, 4); // output false
isDivisible(48, 3, 4); // output true