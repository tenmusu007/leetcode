// function longestCommonPrefix(strs: string[]): string {
// 	if (strs.length < 2) return strs[0];
// 	let base = strs[0];
// 	const newArr = strs.filter((str, index) => index > 0);

// 	let common = "";

// 	for (const str of newArr) {
// 		if (common !== "") {
// 			let answer = "";
// 			for (const baseAlpha of common) {
// 				const isInclude = str.indexOf(baseAlpha);
// 				if (isInclude !== -1) {
// 					answer = answer + baseAlpha;
// 				}
// 			}
// 			return answer;
// 		}
// 		for (const baseAlpha of base) {
// 			const isInclude = str.indexOf(baseAlpha);
// 			if (isInclude !== -1) {
// 				common = common + baseAlpha;
// 			}
// 		}
// 	}

// 	return "";
// }

var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return "";
	}
	let ans = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(ans) !== 0) {
			ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
		}
	}
	return ans;
};
console.log(
	"-------answer------",
	longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
	"-------answer------",
	longestCommonPrefix(["dog", "racecar", "car"])
);
// console.log("-------answer------", longestCommonPrefix(["a"]));
// console.log("-------answer------", longestCommonPrefix(["ab", "a"]));
