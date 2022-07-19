function calculator() {
  // Paramets calculaotr
  const operation = Number(
    prompt(
      'Escolha uma operção: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**)'
    )
  )

  // Checking if number is validated
  if (!operation || operation >= 7) {
    alert('Digite uma opção válida')
    calculator()
  } else {
    // Get number input
    let valueOne = Number(prompt('Digite o primeiro valor: '))
    let valueTwo = Number(prompt('Digite o segundo valor: '))
    let result

    // Checking if number is validated
    if (!valueOne || !valueTwo) {
      alert('Digite  um valor válido')
      calculator()
    } else {
      // Create operation functions
      function sum() {
        result = valueOne + valueTwo
        alert(`${valueOne} + ${valueTwo} = ${result}`)
        newOperation()
      }

      function subtraction() {
        result = valueOne - valueTwo
        alert(`${valueOne} - ${valueTwo} = ${result}`)
        newOperation()
      }

      function multiplication() {
        result = valueOne * valueTwo
        alert(`${valueOne} * ${valueTwo} = ${result}`)
        newOperation()
      }

      function realDivision() {
        result = valueOne / valueTwo
        alert(`${valueOne} / ${valueTwo} = ${result}`)
        newOperation()
      }

      function integerDivision() {
        result = valueOne % valueTwo
        alert(`${valueOne} % ${valueTwo} = ${result}`)
        newOperation()
      }

      function pow() {
        result = valueOne ** valueTwo
        alert(`${valueOne} ** ${valueTwo} = ${result}`)
        newOperation()
      }

      // Adictional operation
      function newOperation() {
        const askOperation = Number(
          prompt('Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não')
        )

        if (askOperation == 1) {
          calculator()
        } else if (askOperation == 2) {
          alert('Até mais!')
        } else {
          alert('Digite uma opção válida')
          newOperation()
        }
      }
    }
  }
  // Cheking select operation
  switch (operation) {
    case 1:
      sum()
      break
    case 2:
      subtraction()
      break
    case 3:
      multiplication()
      break
    case 4:
      realDivision()
      break
    case 5:
      integerDivision()
      break
    case 6:
      pow()
  }
}

calculator()
