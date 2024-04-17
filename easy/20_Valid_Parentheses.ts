// function isValid(s: string): boolean {
// 	console.log(s);
// 	console.log("s", s[0], s[0].charCodeAt(0));
// 	console.log("s", s[1], s[1].charCodeAt(0));
// 	console.log("s", s[2], s[2].charCodeAt(0));
// 	console.log("s", s[3], s[3].charCodeAt(0));
// 	console.log("s", s[4], s[4].charCodeAt(0));
// 	console.log("s", s[5], s[5].charCodeAt(0));
// 	let base = s[0];
// 	let answer = true;
// 	for (let x = 1; x < s.length; x++) {
// 		console.log("base", base.charCodeAt(0), "loop", s[x].charCodeAt(0));
// 		if (
// 			Number(base.charCodeAt(0)) === 40 &&
// 			Number(base.charCodeAt(0)) + 1 !== Number(s[x].charCodeAt(0))
// 		) {
// 			answer = false;
// 			break;
// 		} else {
// 			base = s[x + 1];
// 			console.log("second", Number(base.charCodeAt(0)));

// 			if (Number(s[x].charCodeAt(0)) <= 41) {
// 				if (Number(base.charCodeAt(0)) + 2 !== Number(s[x].charCodeAt(0))) {
// 					answer = false;
// 					break;
// 				}
// 			} else {
// 				if (Number(base.charCodeAt(0)) + 2 !== Number(s[x + 1].charCodeAt(0))) {
// 					answer = false;
// 					break;
// 				}
// 			}
// 		}
// 		console.log("base", base.charCodeAt(0), "loop", s[x].charCodeAt(0));
// 		// if (Number(base.charCodeAt(0)) + 2 !== Number(s[x].charCodeAt(0))) {
// 		// 	answer = false;
// 		// 	break;
// 		// }
// 		// if (x % 2 === 1) {
// 		// 	base = s[x + 1];
// 		// }
// 		console.log(base, x);
// 	}

// 	return answer;
// }
// var isValid = function (s) {
// 	let stack = []; // create an empty stack to store opening brackets
// 	for (let c of s) {
// 		// loop through each character in the string
// 		if (c === "(" || c === "{" || c === "[") {
// 			// if the character is an opening bracket
// 			stack.push(c); // push it onto the stack
// 		} else {
// 			// if the character is a closing bracket
// 			if (
// 				!stack.length || // if the stack is empty or
// 				(c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
// 				(c === "}" && stack[stack.length - 1] !== "{") ||
// 				(c === "]" && stack[stack.length - 1] !== "[")
// 			) {
// 				return false; // the string is not valid, so return false
// 			}
// 			stack.pop(); // otherwise, pop the opening bracket from the stack
// 		}
// 	}
// 	return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
// 	// so the string is valid, otherwise, there are unmatched opening brackets, so return false
// };

function isValid(s) {
	// Initialize stack to store the closing brackets expected...
	let stack: string[] = [];
	// Traverse each charater in input string...
	for (let idx = 0; idx < s.length; idx++) {
		// If open parentheses are present, push it to stack...
		console.log(stack);

		if (s[idx] == "{") {
			stack.push("}");
		} else if (s[idx] == "[") {
			stack.push("]");
		} else if (s[idx] == "(") {
			stack.push(")");
		}
		// If a close bracket is found, check that it matches the last stored open bracket
		else if (stack.pop() !== s[idx]) {
			console.log("pop", stack.pop());
			return false;
		}
		console.log(stack);
	}
	return !stack.length;
}
// console.log(isValid("()"));
// console.log(isValid("([]{})"));
console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("(){}[)"));
