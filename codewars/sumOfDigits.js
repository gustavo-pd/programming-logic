function digitalRoot(n) {
  let stringa = n.toString();
  let splitted = stringa.split('');
  let sum = 0;
  for (let i = 0; i < splitted.length; i += 1) {
    numeral = parseInt(splitted[i], 10);
    sum += numeral;
  }
  if (sum > 9) {
    let stringas = sum.toString();
    let splitteds = stringas.split('');
    let sum2 = 0;
    for (let i2 = 0; i2 < splitteds.length; i2 += 1) {
      numeral2 = parseInt(splitteds[i2], 10);
      sum2 += numeral2;
    }
    if (sum2 > 9) {
      let stringas2 = sum2.toString();
      let splitteds2 = stringas2.split('');
      let sum3 = 0;
      for (let i3 = 0; i3 < splitteds2.length; i3 += 1) {
        numeral3 = parseInt(splitteds2[i3], 10);
        sum3 += numeral3;
      }
      return sum3;
    }
    return sum2;
  }
  return sum;
}

console.log(digitalRoot(49319663499595));