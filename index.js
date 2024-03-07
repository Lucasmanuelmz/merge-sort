function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const half = Math.floor(array.length / 2);

  const halfLeft = array.slice(0, half);
  const halfRight = array.slice(half);

  const arrayDivide = merge(mergeSort(halfLeft), mergeSort(halfRight));

  return arrayDivide;
}

function merge(array1, array2) {
  const result = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] <= array2[index2]) {
      result.push(array1[index1]);
      index1++;
    } else {
      result.push(array2[index2]);
      index2++;
    }
  }

  while (index1 < array1.length) {
    result.push(array1[index1]);
    index1++;
  }

  while (index2 < array2.length) {
    result.push(array2[index2]);
    index2++;
  }

  return result;
}
console.log(mergeSort([105, 79, 100, 110]));
