// Get input text value
let getImputText = document.getElementById('input-text')

// Crete a list when button clicked
const element = document.getElementById('button')
element.addEventListener('click', createToDoList)

let listToDo = document.getElementById('list-wrapper')

function createToDoList() {
  let toDo = document.createElement('div')
  toDo.id = 'lista'

  let inputToDO = document.createElement('input')
  inputToDO.classList.add('to-do-list')
  inputToDO.type = 'checkbox'

  let inputToDOText = document.createElement('label')
  inputToDOText.classList = 'checkbox-text'
  inputToDOText.textContent = getImputText.value
  getImputText.value = ''

  listToDo.appendChild(toDo)
  toDo.appendChild(inputToDO)
  toDo.appendChild(inputToDOText)
}
