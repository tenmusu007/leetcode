function isPalindrome(x) {
	const originalNumber = x;
	const arrOriginalNumber = [...String(x)];
	console.log("arr", arrOriginalNumber);

	const reverse = arrOriginalNumber.reverse();
	console.log("---", reverse);

	const convertString = reverse.join("");
	console.log("convertString", convertString);

	if (originalNumber === Number(convertString)) {
		return true;
	}
	return false;
}

// const result = isPalindrome(121);

// console.log(result);
