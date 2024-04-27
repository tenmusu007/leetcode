// function hammingDistance(x: number, y: number): number {
//   console.log(x & y);
//   console.log(5 & 3);
//   let answer = 0;
//   const xTwoBit = covertTwoBit(x);
//   const yTwoBit = covertTwoBit(y);

//   console.log(yTwoBit);
//   // console.log(xTwoBit, yTwoBit);

//   for (let z = 0; z < 4; z++) {
//     if (xTwoBit[z] !== yTwoBit[z]) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

// const covertTwoBit = (n: number): string => {
//   let twoBit = '';
//   let num = n;
//   for (let x = 0; x < n; x++) {
//     if (num % 2 === 0) {
//       twoBit = '0' + twoBit;
//       console.log(twoBit);
//     } else {
//       twoBit = '1' + twoBit;
//     }
//     if (num === 1) break;
//     num = Math.round(num / 2);
//   }
//   console.log(typeof twoBit.length, 'in loop');

//   if (twoBit.length < 4) {
//     const diff = 4 - twoBit.length;
//     console.log('diff', diff);

//     for (let zero = 0; zero < diff; zero++) {
//       twoBit = '0' + twoBit;
//     }
//   }
//   return twoBit;
// };

function hammingDistance(x: number, y: number): number {
  return (x ^ y).toString(2).match(/1/g)?.length || 0;
};
console.log(hammingDistance(1, 4));