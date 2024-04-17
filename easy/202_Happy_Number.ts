function isHappy(n: number): boolean {
	const total = calcTotal(n);
	console.log(total);
	if (total === 1) {
		return true;
	}
	// const isOneDigit = parsNumberArr(total).length < 2;
	// if (!isOneDigit) {
	// 	calcTotal(n);
	// }

	// return false;s
	return isHappy(total);
}
const calcTotal = (n: number): number => {
	const arr = [...String(n)].map((x) => Number(x));;
	let total = 0;
	for (const number of arr) {
		total += number * number;
	}
	return total;
};

console.log(isHappy(19));
console.log(isHappy(2));
// console.log(isHappy(8));
// console.log(isHappy(8));
