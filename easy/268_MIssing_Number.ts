function missingNumber(nums: number[]): number {
	let base = 0;
	const sortedArr = nums.sort((a, b) => a - b);
	if (sortedArr[0] !== 0) return 0;
	let answer = 0;
	console.log(sortedArr);

	for (const num of sortedArr) {
		if (num > 0 && base + 1 !== num) {
			console.log("num", num);
			console.log("base", base);
			answer = base + 1;
			break;
		}
		if (num === sortedArr[sortedArr.length - 1]) {
			answer = num + 1;
			break;
		}
		base = num;
	}
	return answer;
}
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1]));
console.log(
	missingNumber([
		45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
		4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
		30, 25, 47, 0, 31, 42, 24, 10, 14,
	])
);

// var missingNumber = function (nums) {
// 	const n = nums.length;
// console.log(nums);
// console.log(n * (n + 1));

// 	const expectedSum = (n * (n + 1)) / 2;
// 	console.log(expectedSum);

// 	const actualSum = nums.reduce((sum, num) => sum + num, 0);
// 	console.log("actualSum", actualSum);

// 	return expectedSum - actualSum;
// };
// // console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([...Array(88).keys()]));
