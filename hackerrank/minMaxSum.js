function miniMaxSum(arr) {
  // Write your code here
  let sumMax = 0;
  let sumMin = 0;
  let ordered = arr.sort((a, b) => a - b);
  for(let i = 1; i < ordered.length; i += 1) {
    sumMax += ordered[i];
  }
  for(let i = 0; i < ordered.length - 1; i += 1) {
    sumMin += ordered[i];
  }
  return console.log(`${sumMax} ${sumMin}`);
}