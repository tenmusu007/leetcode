function summaryRanges(nums: number[]): string[] {
	// const answer: string[] = [];
	// for (let i = 0; i < nums.length; i++) {
	//   if (nums[i] + 1 === nums[i + 1]) {
	//     let max = 1
	// 		// 1(nums[0] +1) ===1(nums[1])
	// 		for (let x = 1; x < nums.length; x++) {
	// 			if (nums[i + x]  !== nums[i + x] + 1){
	// 				console.log(`${nums[i]}->${nums[i + x +1]}`);
	// 				answer.push(`${nums[i]}->${nums[i + x + 1]}`);
	// 				break;
	// 			}
	// 			// x = x + 1;
	// 		}
	// 		// if (nums[i + 1] + 1 === nums[i + 2]) {
	// 		// 	answer.push(`${nums[i]}->${nums[i + 2]}`);
	// 		// 	i = i + 2;
	// 		// } else {
	// 		// 	answer.push(`${nums[i]}->${nums[i + 1]}`);
	// 		// 	i = i + 1;
	// 		// }
	// 	} else {
	// 		answer.push(`${nums[i]}`);
	//   }

	// }

	// return answer;
	const result  :string[] = [];
	let str = "";

	let start = nums[0];

	for (let i = 1; i <= nums.length; i++) {
		if (nums[i] - nums[i - 1] === 1) continue;

		str = start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`;

		result.push(str);
		start = nums[i];
	}

	return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
