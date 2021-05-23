const createButton = document.querySelector('.button--create-link')
const btnCopy = document.querySelectorAll('.button--copy')

createButton.addEventListener('click', () => {
  const inputContainer = document.querySelector('.input-container')

  inputContainer.classList.toggle('invalid')
})

btnCopy.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('copied')
    button.innerHTML = 'Copied'
  })
})