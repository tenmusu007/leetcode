// function addDigits(num: number): number {
//   const arr = String(num).split('').map(Number);
//   const total = arr.reduce((a, b) => a + b);

//   if (total >= 10) {
//     return addDigits(total);
//   }
//   return total;
// }
// var addDigits = function (num) {
//   if (num === 0) return 0;

//   const digitsArr = ('' + num).split('');
//   const totalVal = digitsArr.reduce(
//     (accumulator, currentValue) => accumulator + Number(currentValue),
//     0
//   );
//   if (num < 10) return totalVal;
//   return addDigits(totalVal);
// };

function addDigits(num: number): number {
  const arr = String(num).split('');
  const total = arr.reduce((a, b) => Number(a) + Number(b), 0);
34
  if (total >= 10) {
    return addDigits(total);
  }
  return total;
}
// console.log(addDigits(38));
// console.log(addDigits(0));
console.log(addDigits(19));
