import { ShortLink } from './api.js'

const inputContainer = document.querySelector('.input-container')
const createButton = document.querySelector('.button--create-link')

createButton.addEventListener('click', () => {
  const inputURL = document.querySelector('.input--create-link')

  if (!urlValidation(inputURL.value)) return
  
  return ShortLink(inputURL.value, createLink)
})

const createLink = (userURL, shortedURL) => {
  const newlinkContainer = document.querySelector('.newlink-container')

  const linkContainer = document.createElement('div')
  linkContainer.className = 'link-container'

  const userLink = document.createElement('h6')
  userLink.className = 'user-link'
  userLink.innerHTML = userURL

  const shortLink = document.createElement('a')
  shortLink.className = 'short-link'
  shortLink.target = "__blank"
  shortLink.href = 'https://' + shortedURL
  shortLink.innerHTML = shortedURL

  const btnCopy = document.createElement('button')
  btnCopy.type = 'button'
  btnCopy.classList.add('button')
  btnCopy.classList.add('button--copy')
  btnCopy.innerHTML = 'Copy'
  btnCopy.addEventListener('click', copyLink)

  linkContainer.append(userLink, shortLink, btnCopy)
  newlinkContainer.appendChild(linkContainer)
  
  inputContainer.classList.remove('invalid')
}

function copyLink() {
  const link = this.parentElement.childNodes[1].innerHTML
  navigator.clipboard.writeText(link)

  this.classList.add('copied')
  this.innerHTML = 'Copied'

  setTimeout(() => {
    this.classList.remove('copied')
    this.innerHTML = 'Copy'
  }, 2000)
}

function urlValidation(URL) {
  const allLinks = document.querySelectorAll('.link-container')
  if ( allLinks.length >= 5 ) {
    invalidURL('You have reached the limit of 5 links')
    return false
  }

  if ( URL.length === 0 ) {
    return invalidURL('Empty URL. Please add a link')

  } else {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    
    if (regex.test(URL)) {
      return true

    } else {
      invalidURL('Please insert a valid URL')
      return false
    }
  }
}

function invalidURL(error_Text) {
  const textError = document.querySelector('.input-error')

  textError.innerHTML = error_Text
  inputContainer.classList.add('invalid')
}
