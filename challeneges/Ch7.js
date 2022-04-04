function uniqueString(strings) {
  const orderedUniqueLetters = strings.map((s) => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return result;
}

console.log(
  'uniqueString',
  uniqueString(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
);
