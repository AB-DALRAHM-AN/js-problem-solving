// need to return the num that repeated odd times in the array

function findOdd(A) {
  let odd = {};
  for(let i = 0; i < A.length; i++) {
    if (odd[A[i]]) {
      odd[A[i]]++;
    } else {
      odd[A[i]] = 1;
    }
  }
  for(let key in odd) {
    if (key % 2 !== 0) {
      return Number(key);
    }
  }
}

// Tests
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1
