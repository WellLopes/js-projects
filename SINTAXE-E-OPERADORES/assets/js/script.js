function compareNumber(num1, num2) {
  if (!num1 || !num2) {
    return 'Digite um número válido'
  }

  const firstPhrase = createFirstPhrase(num1, num2)
  const secondPhrase = createSecondPhrase(num1, num2)

  return `${firstPhrase} ${secondPhrase}`
}

function createFirstPhrase(num1, num2) {
  let firstPhrase = `Os números ${num1} e ${num2}`
  let yesNO = 'não'

  if (num1 === num2) {
    yesNO = ''
  }

  return `${firstPhrase} ${yesNO} são iguais.`
}

function createSecondPhrase(num1, num2) {
  const sum = num1 + num2

  let compareTen = 'menor'
  let compareTwenty = 'menor'

  if (sum > 10) {
    compareTwenty = 'maior'
  }

  if (sum > 20) {
    compareTwenty = 'maior'
  }

  return `Sua soma é ${sum}, que é ${compareTen} do que 10 e ${compareTwenty} do que 20`
}