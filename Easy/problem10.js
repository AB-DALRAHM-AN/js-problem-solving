function positiveSum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      num += arr[i];
    }
  }
}

positiveSum([1, 2, 3, 4, 5]); // 15
positiveSum([1, -2, 3, 4, 5]); // 13
positiveSum([]); // 0
