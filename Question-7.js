/*
primeNumberFromOneToN function receive 1 argument 'n'
the function return the amount of Prime numbers from 1 to n
*/
const primeNumberFromOneToN = (n) => {
  if (n == 1) return 0;
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (isItPrimeNum(i)) count++;
  }
  return count;
};
function isItPrimeNum(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) isPrime = false;
  }
  return isPrime;
}
