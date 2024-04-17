// function plusOne(digits: number[]): number[] {
// 	console.log(Number(digits.join("")));
// 	console.log(Number(digits.join("")) + 1);

// 	const IncrementedTotal = String(Number(digits.join("")) + 1);
// 	console.log(IncrementedTotal);

// 	const answer = IncrementedTotal.split("").map((num) => Number(num));
// 	return answer;
// }

function plusOne(digits: number[]): number[] {
	const concatString = digits.join("");
	// const addPlusOne = parseFloat(concatString) + 1;
	const addPlusOne = BigInt(concatString) + BigInt(1);
	// console.log("2 type", typeof concatString, concatString);
	// console.log(typeof parseFloat(concatString), parseFloat(concatString));
	const convertString = String(addPlusOne).split("");
	const answer = convertString.map((value) => Number(value));
	return answer;
	// return Array.from((BigInt(digits.join("")) + BigInt("1")).toString(), Number);
}
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
console.log(6145390195186705543 > 9007199254740991);
console.log(
	String(6145390195186705543).length,
	String(9007199254740991).length
);
console.log(plusOne([9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 1]));


// MAX_SAFE_INTEGER 9007199254740991