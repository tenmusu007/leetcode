function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	const maxNums1Length = m + n;
	const modifiedByM = nums1.slice(0, m);
	console.log("koko", modifiedByM);

	const newNums1 = [...modifiedByM, ...nums2].sort((a, b) => a - b);

  for (let x = 0; x < maxNums1Length; x++) {
    nums1[x] = newNums1[x];
  }
	console.log("test", nums1);
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
