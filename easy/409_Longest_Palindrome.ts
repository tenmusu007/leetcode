// function longestPalindrome(s: string): number {
//   if (s.length === 1) return s.length;
//   let obj: { [key: string]: number } = {};
//   let result = 0;
//   for (const x of s) {
//     obj[x] = (obj[x] || 0) + 1;
//   }
//   console.log(obj);

//   if (Object.keys(obj).length === 1) {
//     return (result = Object.values(obj)[0]);
//   }
//   const evenNumber = Object.values(obj).filter((num) => num % 2 === 0);
//   const oddNumber = Object.values(obj).filter((num) => num % 2 !== 0);

//   // console.log(evenNumber, oddNumber);
//   const total = evenNumber.reduce((a, b) => a + b, 0);
//   result = total;
//   if (oddNumber.length > 0) {
//     result = total + Math.max(...oddNumber);
//   }
//   return result;
// }
var longestPalindrome = function (s) {
  let ans = 0;
  let keys = {};
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
console.log(longestPalindrome('abccccdd'));
// console.log(longestPalindrome('aaabbb'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('bb'));
// console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('bananas'));
