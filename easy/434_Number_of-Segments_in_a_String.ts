function countSegments(s: string): number {
  if (s === '') return 0;
  const splitString = s.split(' ');
  const answer = splitString.filter((content) => content !== '');
  return answer.length;
}
console.log(countSegments('Hello, my name is John'));
console.log(countSegments('                '));
console.log(
  countSegments('Of all the gin joints in all the towns in all the world,   ')
);
