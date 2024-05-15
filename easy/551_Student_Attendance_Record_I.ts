// function checkRecord(s: string): boolean {
//   const obj = {
//     A: 0,
//     L: 0,
//   };
//   return calculate(obj, s);
// }

// const calculate = (obj: any, s: string) => {
//   const ArrS = s.split('');
//   // console.log(s, ArrS[0]);

//   if (ArrS[0] === 'L') {
//     obj.L = obj.L + 1;
//   }
//   if (ArrS[0] === 'A') {
//     obj.A = obj.A + 1;
//     obj.L = 0;
//   }
//   if (obj.A > 1 || obj.L > 2) {
//     return false;
//   }
//   if (ArrS.length !== 0) {
//     ArrS.shift();
//     calculate(obj, ArrS.join(''));
//   }
//   // console.log(obj);

//   return true;
// };

function checkRecord(s: string): boolean {
  const findL = s.includes('LLL');
  if (findL) return false;
  let NumberOfA = 0;
  for (const count of s) {
    if (count === 'A') {
      NumberOfA++;
    }
    if (NumberOfA > 1) {
      return false;
    }
  }
  return true;
}
console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
console.log(checkRecord('ALL'));
console.log(checkRecord('LALL'));
console.log(checkRecord('LLLALL'));
