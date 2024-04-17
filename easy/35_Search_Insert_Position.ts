function searchInsert(nums: number[], target: number): number {
	const targetIndex = nums.indexOf(target);
	if (targetIndex < 0) {
		const numsMidIndex = Math.round(nums.length / 2);
		const firstArr = nums.slice(0, numsMidIndex);
		let answer: undefined | number;
		for (let x = 0; x < nums.length; x++) {
			if (firstArr[x] + 1 === target) {
				answer = x + 1;
			}
		}
		if (answer) return answer;
		const secondArr = nums.slice(numsMidIndex, nums.length);
		for (let x = 0; x < nums.length; x++) {
			if (secondArr[x] + 1 === target) {
				answer = x + 1;
			}
		}

		return answer ? answer + firstArr.length : nums.length - 1;
	}
	return targetIndex;
}

// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));

// console.log(searchInsert([1, 3, 5, 6], 7));
// function compareNumbers(a, b) {
// 	return a - b;
// }

// const findTargetLoop = (arr: number[], target: number) => {
// let answer: undefined | number;
// for (let x = 0; x > arr.length; x++) {
// 	if (arr[x] + 1 === target) {
// 		answer = x + 1;
// 	}
// }
// return 0;
// };
