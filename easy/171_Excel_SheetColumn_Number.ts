
function titleToNumber(columnTitle: string): number {
	let answer: number = 0;
	// if (columnTitle.length < 2) {
	//   return (answer = getValueForAlphabet(columnTitle[0]));
	// }
	for (let x = 0; x < columnTitle.length; x++) {
		// if (x === 0) {
		// 	answer = getValueForAlphabet(columnTitle[x]) * 26;
		// } else {
		// 	answer += getValueForAlphabet(columnTitle[x]);
		// }

		answer +=
      (columnTitle[x].charCodeAt(0) - 64) * 26 ** (columnTitle.length - 1 - x);

	}
	return answer;
}

console.log(titleToNumber("AB"));
console.log(titleToNumber("AAA"));
console.log(titleToNumber("ZY"));
console.log(titleToNumber("FXSHRXW"));
