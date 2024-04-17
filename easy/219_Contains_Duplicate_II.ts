// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   if (nums.length < 2) return false;
//   const indexArr: number[] = [];
//   nums.forEach((num, index) => {
//     if (num === k) return indexArr.unshift(index);
//   });
//   if (indexArr.length === 0) return false;
//   const totalArr = indexArr.reduce((a, b) => a - b);
//   if (totalArr <= k) return true;

//   return false;
// }
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let answer = false;
  let obj = {};
  nums.forEach((num, index) => {
    if (num in obj && index - obj[num] <= k) return (answer = true);
    obj[num] = index;
  });
  return answer;
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// console.log(containsNearbyDuplicate([-1, -1], 1));
