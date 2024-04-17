function removeDuplicates(nums: number[]): number {
	let k: number = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[k] = nums[i];
console.log(nums);

			k++;
		}
	}

	return k;
}

const nums = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const answer = removeDuplicates(nums);
const expectedNums: number[] = [1, 2];// The expected answer with correct length

const k: number = removeDuplicates(nums); // Calls your implementation
console.log("k", k);
console.log("expectedNums", expectedNums);

console.log(k === expectedNums.length, "Lengths do not match");
for (let i = 0; i < k; i++) {
	// console.assert(nums[i] === expectedNums[i], `Mismatch at index ${i}`);
	console.log(nums[i] === expectedNums[i], `Mismatch at index ${i}`);
}
