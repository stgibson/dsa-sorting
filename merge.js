function merge(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }
    else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const median = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, median));
  const rightArr = mergeSort(arr.slice(median));
  return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort};