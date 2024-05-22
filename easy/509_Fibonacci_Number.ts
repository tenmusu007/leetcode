// function fib(n: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// }
function fib(n: number): number {
  let fk = 0;
  let fk_1 = 1;
  for (let k = 0; k < n; k++) {
    let temp = fk_1;
    fk_1 = fk + fk_1;
    fk = temp;
  }
  return fk;
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
