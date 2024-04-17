// function generate(numRows: number): number[][] {
// 	const answer: number[][] = [];

// 	for (let x = 0; x < numRows; x++) {
// 		console.log(x);

// 		if (answer[x - 1]) {
// 			// 配列の中身の前後たす　配列の最初最後は１　配列の長さはxと同じ
// 			const addedArr: number[] = [];
// 			// console.log("koko", answer[x]);

// 			for (let x = 0; x < answer[x].length; x++) {
// 				if (answer[x].length < 0) {
// 					addedArr.unshift(1);
// 					addedArr.push(1);
// 					break;
// 				}
// 				// console.log("---", answer[x], answer[x][0], answer[x][1]);

// 				const addedNum = answer[x][0] + answer[x][1];
// 				// console.log("addNum", addedNum);

// 				answer[x].slice(0, 1);
// 				addedArr.push(addedNum);
// 				// console.log("addArr", addedArr);
// 				// console.log("answer[x]", answer[x]);
// 			}
// 			answer.push(addedArr);
// 		} else {
// 			console.log("saisyo",x);

// 			answer.push([1], [1, 1]);
// 			x++;
// 		}
// 	}

// 	console.log(answer);
// 	return answer;
// }
var generate = function (numRows) {
	if (numRows === 0) {
		return [];
	}
	if (numRows === 1) {
		return [[1]];
	}

	let prevRows = generate(numRows - 1);
	let newRow = new Array(numRows).fill(1);
	// console.log("new", newRow);

	for (let i = 1; i < numRows - 1; i++) {
		newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
		// console.log("new", newRow);
		// console.log("newRow[i]", newRow[i]);
	}
	console.log("prevRows", prevRows);

	prevRows.push(newRow);
	return prevRows;
};
console.log(generate(5));
