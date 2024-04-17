// function moveZeroes(nums: number[]): void {
//   const isZero = nums.includes(0);
//   if (isZero) {
//     let count = 0;
//     for (let x = 0; x < nums.length; x++) {
//       console.log(nums[x]);

//       if (nums[x] === 0) {
//         nums.shift();
//         x--;
//         count++;
//       }
//     }
//     console.log('count', count);

//     for (let x = 0; x < count; x++) {
//       nums.push(0);
//     }
//   }
//   console.log('---', nums);
// }

function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val!==0) {
      nums[writePointer] = val;
      writePointer ++;
    }
  }
};

// moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1, 12, 0, 3]);
// moveZeroes([0, 1]);
// moveZeroes([2, 1]);
moveZeroes([1, 0, 1]); // [1,1,0]
