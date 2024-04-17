function firstUniqChar(s: string): number {
  // let answer = -1;
  for (let x = 0; x < s.length; x++) {
    if (s.indexOf(s[x]) === s.lastIndexOf(s[x])) return  x;
  }
  return -1;
}
// var firstUniqChar = function (s) {
//   let mp = {};

//   for (let a of s) {
//     mp[a] = (mp[a] || 0) + 1;
//   }
// console.log(mp);

//   for (let i = 0; i < s.length; i++) {
//     if (mp[s[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// };
console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
