function isPrime(n) {
  let counter = 0;
  for(let i = 2; i <= n; i += 1) {
    if(n % i === 0) {
      counter += 1
    }
  }
  if (counter === 1) {
    return 1;
  } else {
    for(let i2 = 2; i2 <= 7; i2 += 1) {
      if(n % i2 === 0) {
        return i2;
      }
    }
  }
}

console.log(isPrime(17)); 