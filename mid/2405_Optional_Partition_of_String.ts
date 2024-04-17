// function partitionString(s: string): number {
// 	const result: string[] = [];
// 	const sArr: string[] = [];
// 	// for (const x of s) {
// 	// 	sArr.push(x);
// 	// }
// 	// const checkedArr = (string: string): boolean => {
// 	// 	return result.includes(string);
// 	// };
// 	// // 全部の分けた文字に同じstringが入らないといけない
// 	// for (let i = 0; i < s.length; i++) {
// 	// 	if (
// 	// 		sArr[i + 1] &&
// 	// 		!checkedArr(sArr[i] + sArr[i + 1]) &&
// 	// 		sArr[i] !== sArr[i + 1]
// 	// 	) {
// 	// 		result.push(sArr[i] + sArr[i + 1]);
// 	// 		i++;
// 	// 	} else {
// 	// 		result.push(sArr[i]);
// 	// 	}
// 	// }

// 	//文字を配列にする
// 	for (const x of s) {
// 		sArr.push(x);
// 	}
// 	//配列の長さを確認
// 	const sArrLength = sArr.length;
// 	// 特定文字が配列の長さ/2以上が存在するか確認する
// 	let sameCharaCount: number = 0;
// 	const checkFnc = (): boolean => {
// 		for (const x of sArr) {
// 			let baseChara: string = x;
// 			// ある
// 			if (sameCharaCount > sArrLength / 2) {
// 				//特定の文字を抜いて配列を作成
// 				//後から特定の文字を入れて配列を作成　余った場合は後ろにつける
// 				const filterArr = sArr.filter((item) => item !== baseChara);
// 				for (const y of filterArr) {
//           result.push(y + baseChara);
//         // ["ba","ca", "ba","a"]
// 				}
// 				return true;
// 			}
// 			for (let i = 0; i < sArrLength; i++) {
// 				if (sArr.includes(baseChara)) {
// 					sameCharaCount++;
// 				}
// 			}
// 		}
// 		return false;
// 	};
// 	// ない
// 	// return 1
// 	console.log(result);

// 	return checkFnc() ? result.length : 1;
// }

function partitionString(s: string): number {
	let partition: string = s[0];
	let count: number = 1;

	for (let i = 1; i < s.length; i++) {
		console.log("-----", partition);
		if (partition.includes(s[i])) {
			count++;
			partition = s[i];
			console.log("if", partition);
		} else {
			partition += s[i];
			console.log("else", partition);
		}
	}

	return count;
}
// console.log(partitionString("abacaba"));
// console.log(partitionString("ssssss"));
console.log([..."ssssss"]);
