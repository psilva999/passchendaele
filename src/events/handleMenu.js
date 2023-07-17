export function handleItems(e) {
  document.querySelectorAll('nav li').forEach(items => items.classList.remove('active'))

  e.target.classList.add('active')
}

export function openMenu() {
  const menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.close-menu-by-outside')

  menu.classList.add('active')
  closeMenu.classList.add('active')

  menu.style.animation = 'show-menu .4s linear forwards'
  closeMenu.style.animation = 'full-opacity .4s linear forwards'
}

export function hideMenu() {
  const menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.close-menu-by-outside')

  let hide = setInterval(countdown, 100),
      tempo = 4

  function countdown() {
    tempo--
    menu.style.animation = 'hide-menu .3s linear forwards'
    closeMenu.style.animation = 'zero-opacity .3s linear forwards'

    if (tempo === 0) {
      menu.classList.remove('active')
      closeMenu.classList.remove('active')

      clearInterval(hide)
    }
  }
}
