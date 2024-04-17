// function singleNumber(nums: number[]): number {
//   if (nums.length === 1) return nums[0];
//   let answer;
//   for (const num of nums) {
//     const withoutNumArr = nums.filter((x) => x === num);
//     if (withoutNumArr.length === 1) answer = withoutNumArr[0];
//   }
//   return answer;
// }

var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result !^= num;
    console.log('====', result);
  }
  return result;
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));
console.log(singleNumber([1, 2, 2, 1, 3, 3, 5, 5, 6]));
