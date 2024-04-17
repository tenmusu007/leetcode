enum Roman {
	I = 1,
	V = 5,
	X = 10,
	L = 50,
	C = 100,
	D = 500,
	M = 1000,
}

function romanToInt(s: string): number {
	//string to array
	// const s = s.split("");
	// keep total number
	let totalRoman: number = 0;
	// 特定の文字の場合はsubtractする
	for (let i = 0; i < s.length; i++) {
		const roman = s[i];
		switch (roman) {
			case "I":
				if (s[i + 1] === "V") {
					totalRoman += Roman.V - Roman.I;
					i++;
					break;
				}
				if (s[i + 1] === "X") {
					totalRoman += Roman.X - Roman.I;
					i++;
					break;
				}
				totalRoman += Roman.I;
				break;
			case "V":
				totalRoman += Roman.V;
				break;
			case "X":
				if (s[i + 1] === "L") {
					totalRoman += Roman.L - Roman.X;
					i++;
					break;
				}
				if (s[i + 1] === "C") {
					totalRoman += Roman.C - Roman.X;
					i++;
					break;
				}
				totalRoman += Roman.X;
				break;
			case "L":
				totalRoman += Roman.L;
				break;
			case "C":
				if (s[i + 1] === "D") {
					totalRoman += Roman.D - Roman.C;
					i++;
					break
				}
				if (s[i + 1] === "M") {
					totalRoman += Roman.M - Roman.C;
					i++;
					break
				}
				totalRoman += Roman.C;
				break;
			case "D":
				totalRoman += Roman.D;
				break;
			case "M":
				totalRoman += Roman.M;
				break;
		}
	}
	return totalRoman;
}

const result = romanToInt("MCMXCIV");

// const test = 'Atsuya'

// console.log(test[0]);
console.log(result);

