function isUgly(n: number): boolean {
  if (n === 1) return true;
  if (n === 0) return false;
  let number = n;
  while (number !== 1) {
    if (number % 5 == 0) {
      number = number / 5;
    } else if (number % 3 == 0) {
      number = number / 3;
    } else if (number % 2 == 0) {
      number = number / 2;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(8));
