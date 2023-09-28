function digits(n) {
  let len = Array.from(String(n), Number);
  console.log(len.length);
}

// Tests
digits(123); // [1, 2, 3]
digits(4000); // [4, 0, 0, 0]