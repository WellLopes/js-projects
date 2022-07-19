const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 9,
    turma: '2C'
  },
  {
    nome: 'Miguel',
    nota: 3,
    turma: '2C'
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []
  
  for(i = 0; i< arr.length; i++)  {
    //Object destructing
    const {nota, nome} = arr[i]
    
    if(nota >= media) {
      aprovados.push(nome)
    }
  }

  return `Alunos aprovados: \n${aprovados}`
}

console.log(alunosAprovados(alunos, 5))