function digitize(n) {
  let stringa = n.toString()
  let splitted = stringa.split('');
  let realDigits = splitted.map(Number);
  return realDigits.reverse();
}