function titleCase(input) {
  return input
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log('Ch2', titleCase('Here is a sentence'));
