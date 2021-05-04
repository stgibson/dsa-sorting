function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr, j - 1, j);
      j--;
    }
  }
  return arr;
}

module.exports = insertionSort;