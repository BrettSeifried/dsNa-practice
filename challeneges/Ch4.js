function at(arr, index) {
  const input = arr[index];
  const inputNeg = arr[-index - 1];

  return index >= 0 ? input : inputNeg;
}

console.log('Ch4', at(['a', 'b', 'c', 'd', 'e'], 1));
