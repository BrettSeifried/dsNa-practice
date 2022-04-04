function oddishOrEvenish(number) {
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, num) => sum + num);
  // plus sign turns something into a digit

  return sumOfDigits % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log('121', oddishOrEvenish(121));
console.log('121', oddishOrEvenish(41));
