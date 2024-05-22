// function isPowerOfFour(n: number): boolean {
//   if (n === 1) return true;
//   if (n === 0) return false;
//   if (n % 4 === 0) return isPowerOfFour(n / 4);
//   return false;
// }
function isPowerOfFour(n: number): boolean {
  if (n === 0) return false;
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
}
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
