function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(45));
console.log(climbStairs(43));

climbStairs(3);
climbStairs(4);
climbStairs(45);
climbStairs(43);
