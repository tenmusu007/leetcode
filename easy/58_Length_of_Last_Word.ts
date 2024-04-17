function lengthOfLastWord(s: string): number {
	let answer = 0;
	let lastSpace = 0;
	const noSpaceString = s.trim();
	// console.log(noSpaceString[noSpaceString.length - 1]);
	console.log(noSpaceString.length);

	for (let x = 0; x < noSpaceString.length; x++) {
		if (x === noSpaceString.length) {
			console.log("last", lastSpace);

			return (answer = noSpaceString.length - lastSpace);
		} else {
			if (noSpaceString[x] === " ") {
				lastSpace = x;
				console.log("koko", lastSpace);
			}
		}
	}
	return answer;
}


// var lengthOfLastWord = function (s) {
//   let splited = s.split(' ');
//   let res = '';

//   for (let index = 0; index < splited.length; index++) {
//     if (splited[index] !== '') res = splited[index];
//   }
//   return res.length;
// };

// var lengthOfLastWord = function (s) {
//   // console.log(s.trimEnd().split(' ').pop());
//   return s.trimEnd().split(' ').pop().length;
// };


// console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

//flymetothemoon
