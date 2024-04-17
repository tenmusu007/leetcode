function wordPattern(pattern: string, s: string): boolean {
  let obj = {};
  let answer = false;
  const sArr = s.split(' ');
  const patternArr = pattern.split('');
  for (let i = 0; i < sArr.length; i++) {
    if (!(pattern[i] in obj)) {
      obj[pattern[i]] = sArr[i];
      answer = true;
    }
    if (obj[pattern[i]] === sArr[i]) {
      answer = true;
    } else {
      return (answer = false);
    }
  }
  return answer;
}

// console.log(wordPattern('abba', 'dog cat cat dog'));
// console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('abba', 'dog dog dog dog'));
// console.log(wordPattern('aaaa', 'dog cat cat dog'));
