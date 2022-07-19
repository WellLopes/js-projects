// function checkPalindromo(string) {
//   if(!string) return "string inexistente"

//   return string.split("").reverse().join("") === string
// }

// console.log(checkPalindromo("ama"))

// solution 2

function checkPalindromo2(string) {
  if(!string) return "string inexistente"

  // divided by cause we percorred our arr front to end and end to front
  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(checkPalindromo2("gato"))