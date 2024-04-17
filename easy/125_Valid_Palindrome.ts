function isPalindrome(s: string): boolean {
	const removeChar = /[^a-zA-Z0-9]/g;
	const formatString = s.replace(removeChar, "").toLowerCase();
	const reverseString = formatString.split("").reverse().join("");
	return formatString === reverseString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
