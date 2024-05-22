// function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
//   if (rec1.length === 0 || rec2.length === 0) return false;
//   // rec1 xとrec2 xの差分が１以上の時は確実に被らないのでfalse
//   // if (Math.abs(rec1[2] - rec2[0]) === 1) return true;
//   if (rec1[2] > rec2[0] && Math.abs(rec1[2] - rec2[0]) === 1) return true;
//   return false;
// }
const isRectangleOverlap = (A: number[], B: number[]): boolean =>
  A[2] > B[0] && A[3] > B[1] && B[2] > A[0] && B[3] > A[1];
console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));
console.log(isRectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9]));
