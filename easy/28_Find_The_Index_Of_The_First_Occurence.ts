function strStr(haystack: string, needle: string): number {
	const isInclude = haystack.indexOf(needle);
	return isInclude;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));

strStr("sadbutsad", "sad");
strStr("leetcode", "leeto");
