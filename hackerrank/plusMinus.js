function callBack(iu) {
  console.log(iu);
}

function plusMinus(arr) {
  let array = [];
  let sumPositive = 0;
  let sumZero = 0;
  let sumNegative = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sumPositive += 1;
    }
    if (arr[i] === 0) {
      sumZero += 1;
    }
    if (arr[i] < 0) {
      sumNegative += 1;
    }
  }
  let ratiosPositive = sumPositive / arr.length;
  array.push(ratiosPositive);
  let ratiosNegative = sumNegative / arr.length;
  array.push(ratiosNegative);
  let ratiosZero = sumZero / arr.length;
  array.push(ratiosZero);
  return array.forEach(callBack);
}

console.log(plusMinus([0, 0, -1, -6, 2, 6, 6, 6]));