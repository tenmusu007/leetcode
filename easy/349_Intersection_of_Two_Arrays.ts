function intersection(nums1: number[], nums2: number[]): number[] {
  const uniqueArr1 = new Set(nums1);
  const uniqueArr2 = new Set(nums2);
  const intersectionArr = Array.from(uniqueArr1).filter((num) => uniqueArr2.has(num));
  return intersectionArr;
    // const uniqueArr2 = new Set(nums2);
    // const intersectionArr = nums1.filter((num) => uniqueArr2.has(num));
    // const asnswer = Array.from(new Set(intersectionArr));
    // return asnswer;
}



console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
