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
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head) return null;
	const arr = getVal(head);

	const sortedArr = Array.from(new Set(arr));

	let result: ListNode | null = null;
	for (const x of sortedArr) {
		result = new ListNode(x, result);
		console.log("result", result);
	}
	return result;
}

console.log(
	deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))
);


// var deleteDuplicates = function (head) {
// 	// Special case...
// 	if (head == null || head.next == null) return head;
// 	// Initialize a pointer curr with the address of head node...
// 	let curr = head;
// 	// Traverse all element through a while loop if curr node and the next node of curr node are present...
// 	while (curr != null && curr.next != null) {
// 		// If the value of curr is equal to the value of prev...
// 		// It means the value is present in the linked list...
// 		if (curr.val == curr.next.val) {
// 			// Hence we do not need to include curr again in the linked list...
// 			// So we increment the value of curr...
// 			curr.next = curr.next.next;
// 		}
// 		// Otherwise, we increment the curr pointer...
// 		else {
// 			curr = curr.next;
// 		}
// 	}
// 	return head; // Return the sorted linked list without any duplicate element...
// };