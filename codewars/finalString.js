function solution(str, ending){
  // TODO: complete
  let numberSlice = (ending.length * -1);
  let sliced = str.slice(numberSlice);
  if (sliced === ending) {
    return true;
  }
  return false;
}