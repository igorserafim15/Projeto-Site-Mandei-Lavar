// Menu mobile
const btnMenu = document.querySelector('.header .btn-menu')

function toggleBtn() {
  const imgs = this.querySelectorAll('img')
  imgs.forEach(item => {
    item.classList.toggle('btn-show')
  })
  
  this.nextElementSibling.classList.toggle('menu-show')
}
btnMenu.addEventListener('click', toggleBtn)

//===
const navLink = document.querySelectorAll('.header .header-menu a')

function removeMenu() {
  const headerMenu = document.querySelector('.header-menu')
  headerMenu.classList.remove('menu-show')
  
  const btnMenu = document.querySelectorAll('.header .btn-menu img')
  btnMenu.forEach(item => {
    item.classList.toggle('btn-show')
  })
}

navLink.forEach(link => {
  link.addEventListener('click', removeMenu)
})




