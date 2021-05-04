function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    swap(arr, i, minimum);
  }
  return arr;
}

module.exports = selectionSort;