const navbar = document.querySelector('.navbar')
const MobileButton = document.querySelector('.mobile-navbar')

MobileButton.addEventListener('click', () => {
  navbar.classList.toggle('opened')
})