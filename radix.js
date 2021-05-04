function getDigit(num, position) {
  const digit =
    Math.floor((num % Math.pow(10, position + 1)) / Math.pow(10, position));
  return digit;
}

function digitCount(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

function mostDigits(arr) {
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    const count = digitCount(arr[i]);
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}

function initBuckets() {
  const buckets = [];
  for (let i = 0; i < 10; i++) {
    buckets.push([]);
  }
  return buckets;
}

function radixSort(arr) {  
  const maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    const buckets = initBuckets();
    for (let j = 0; j < arr.length; j++) {
      const bucketIdx = getDigit(arr[j], i);
      buckets[bucketIdx].push(arr[j]);
    }
    let j = 0;
    for (let bucket of buckets) {
      for (let num of bucket) {
        arr[j] = num;
        j++;
      }
    }
  }
  return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };