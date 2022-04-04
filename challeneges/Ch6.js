function anagrams(a, b) {
  const wordOne = a.split('').sort().join();
  //   console.log('first', wordOne);
  const wordTwo = b.split('').sort().join();
  //   console.log('second', wordTwo);

  if (wordOne === wordTwo) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log('String', anagrams('superintended', 'unpredestined'));
console.log('String', anagrams('pictorialness', 'documentarily'));
console.log('String', anagrams('brett', 'ttreb'));
