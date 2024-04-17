// function containsDuplicate(nums: number[]): boolean {
//   let result = false;
//   let arr: number[] = [];
//   for (let x = 0; x < nums.length; x++) {
//     // const index = nums.lastIndexOf(nums[x]);
//     // if (index !== x) return (result = true);
//     nums.unshift();
//     const check = nums.includes(nums[x]);
//     if (check) return (result = true);
//     // arr.push(nums[x]);
//   }
//   return result;
// }
function containsDuplicate(nums: number[]): boolean {
  // console.log(new Set(nums));
  // console.log(new Set(nums).size);
  const x = new Set(nums);
  // console.log(x.keys());
  // console.log(x.values());
  // console.log(x.forEach((x) => console.log('test', x)));
  console.log('++++', x.has(10));

  return new Set(nums).size !== nums.length;
}

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 5]));
