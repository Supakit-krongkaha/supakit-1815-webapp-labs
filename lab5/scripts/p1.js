function proPrimes() {
  while (true) {
    let input = prompt("Enter a positive integer");
    let intNumber = parseInt(input);

    if (Number.isInteger(Number(input))) {
      showPrimes(intNumber);
      alert("For n = " + input + " prime numbers are " + numPrimes.join(", "));
      break;
    }
  }
}
let numPrimes = [];
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    numPrimes.push(i);
    console.log(numPrimes);
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

proPrimes();
