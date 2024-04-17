function removeElement(nums: number[], val: number): number {
	// // remove nums from val
	// const removedValFromNms = nums.map((num) => {
	// 	if (num !== val) {
	// 		return num;
	// 	}
	// });
	// const sortedArr = removedValFromNms.sort();
	// // console.log("removedValFromNms", removedValFromNms);
	// // for (let i = 0; i < sortedArr.length; i++) {
	// // 	if (sortedArr[i] === undefined) {
	// // 		sortedArr[i] = val;
	// // 		count++;
	// // 	}
	// // }
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			// nums.splice(i, 1);
      // nums.push(val);
      nums[count++] = nums[i]
			// count++;
		}
	}
	return count;
}

console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
