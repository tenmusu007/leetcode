const calc = (length: number): number => {
	let result = 1;

	for (let y = length; y > 0; y--) {
		result *= 2;
	}
	return result;
};

function addBinary(a: string, b: string): string {
	// 1 = 1;
	// 2 = 10;
	// 3 = 11;
	// 4 = 100;
	// 5 = 101;
	// 6 = 110;
	// 7 = 111;
	// 8 = 1000;
	// 9 = 1001;
	// 10 = 1010;
	// 11 = 1011;
	// 1 * (2*2*2) + 0*(2*2) + 1*(2) + 1*(2*0)
	// const totalA: number[] = [];
	// console.log(a.length);

	// for (let i = 0; i < a.length; i++) {
	// 	const totalExponent = calc(a.length);
	// 	totalA.push(Number(a[i]) * (2 * totalExponent));
	// 	console.log(totalA);
	// }
	// return "test";

	let result: string = "";

	let carry = 0;
	for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
		const num1 = parseInt(a[i] ?? "0");
		const num2 = parseInt(b[j] ?? "0");
		const sum = num1 + num2 + carry;

		carry = sum > 1 ? 1 : 0;
		result = (sum % 2 === 1 ? "1" : "0") + result;
	}

	return carry ? "1" + result : result;
}
addBinary("11", "1");

