export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  if(n ==0) return[0]
  if(n == 1) return[0,1]
  const output = getFibonacciUntil(n-1);
  return [...output, output[n-2] + output[n-1]];
}
