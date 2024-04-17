// function isPowerOfThree(n: number): boolean {
//   if (n === 0 || n < 0) return false;
//   if (n === 1) return true;
//   if (n === 3) return true;
//   if (n === 9) return true;
//   if (n % 9 === 0) {
//     if ((n / 9) % 3 === 0) {
//       if ((n / 9) % 3 < 100) {
//         if (n / 9 / 3 === 0) return true;
//         for (let x = 0; x < 3; x++) {
//           if ((n / 9) % 3 === 3 ** x) {
//             return true;
//           }
//         }
//         return false;
//       }
//       return false;
//     }
//     return false;
//   }
//   return false;
// }

function isPowerOfThree(n: number): boolean {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(-27));
console.log(isPowerOfThree(216));
