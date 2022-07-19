
function changeMode() {
  chanceClasses()
  changeText()
}

function chanceClasses() {
  getBody.classList.toggle(darkModeClass)
  myBtn.classList.toggle(darkModeClass)
  getFooter.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'
  
  if(getBody.classList.contains(darkModeClass)) {
    myBtn.innerHTML = lightMode
    getH1.innerHTML = darkMode + " ON"

    return
  } 
  
  myBtn.innerHTML = darkMode
  getH1.innerHTML = lightMode + " ON"

}


// Get my BTN and add event listener
const myBtn = document.getElementById('mode-selector')
      myBtn.addEventListener('click', changeMode)

// Get my html parts
const getBody = document.getElementsByTagName('body')[0]
const getFooter = document.getElementsByTagName('footer')[0]
const getH1 = document.getElementById('page-title')
const darkModeClass = 'dark-mode'