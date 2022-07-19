function checkPair(Array) {
  if(Array == '') return "-1"

  for(let i = 0; i < Array.length; i++) {
    if((Array[i] % 2) == 0) {
      Array[i] = 0
    }
  }
  return Array
}

console.log(checkPair([1, 2, 4, 8, 7, 3, 12]))