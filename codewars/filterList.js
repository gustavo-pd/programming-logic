function filter_list(l) {
  // Return a new array with the strings filtered out
  let array = [];
  for (let i = 0; i < l.length; i += 1) {
    if(typeof l[i] === 'number') {
      array.push(l[i]);
    }
  }
  return array;
}