function smallEnough(a, limit){
  for(let i = 0; i < a.length; i += 1) {
    if(a[i] > limit) {
      return false;
    }
  }
  return true;
}