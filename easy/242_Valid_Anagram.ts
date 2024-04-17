function isAnagram(s: string, t: string): boolean {
	const sArr = s.split("").sort().join("");
	const tArr = t.split("").sort().join("");
	if (sArr == tArr) return true;
	return false;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
// var isAnagram = function (s, t) {
// 	if (s.length != t.length) {
// 		return false;
// 	}

// 	let freq = new Array(26).fill(0);

// 	for (let i = 0; i < s.length; i++) {
// 		freq[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
// 		// console.log("++++++++", freq);
// 		console.log(s[i].charCodeAt(0));
// 		console.log("a".charCodeAt(0)); ;
// 		freq[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
// 		// console.log("--------", freq);
// 	}

// 	return freq.every((index) => index === 0);
// };
// console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
