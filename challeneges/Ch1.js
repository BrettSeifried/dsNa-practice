function reverseWords(input) {
  return input
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log('reverseWords', reverseWords('Here is a Sentence'));
