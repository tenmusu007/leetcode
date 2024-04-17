/**
 * Definition for singly-linked list.
 */
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const getVal = (list: ListNode | null): number[] => {
	if (!list) return [];
	return [list.val, ...getVal(list.next)];
};

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (!list1 && !list2) return null;
	const arr1 = getVal(list1);
	const arr2 = getVal(list2);
	const sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
	// if sortedArr.length can be unclear need adjust
	let result: ListNode | null = null;

	for (let i = sortedArr.length - 1; i >= 0; i--) {
		// console.log(result);
		result = new ListNode(sortedArr[i], result);
	}
	return result;
}
mergeTwoLists(
	new ListNode(1, new ListNode(2, new ListNode(4))),
	new ListNode(1, new ListNode(3, new ListNode(4)))
);
