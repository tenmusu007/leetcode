// function isIsomorphic(s: string, t: string): boolean {
//   const checkIndex = (arr: string[]): number[] => {
//     const indexArr: number[] = [];
//     for (let x = 0; x < arr.length; x++) {
//       const index = arr.indexOf(arr[x]);
//       indexArr.push(index);
//     }
//     console.log('indexArr', indexArr);
//     return indexArr;
//   };

//   const sArr = s.split('');
//   const tArr = t.split('');
//   console.log(sArr, tArr);

//   const sArrIndex = checkIndex(sArr);
//   const tArrIndex = checkIndex(tArr);

//   for (let i = 0; i < sArrIndex.length; i++) {
//     if (sArrIndex[i] !== tArrIndex[i]) {
//       return false;
//     }
//   }
//   return true;
// }

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  const map1: number[] = [];
  const map2: number[] = [];

  for (let idx = 0; idx < s.length; idx++) {
    // console.log('1', map1[s.charAt(idx)]);
    // console.log('2', map2[t.charAt(idx)]);

    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true; // Otherwise return true...
};

console.log(isIsomorphic('egg', 'adl'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
