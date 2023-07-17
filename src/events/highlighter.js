export function textBackground(e, b1, b2) {
  const arrayBackgroundDetail = [...document.querySelectorAll('.background-detail')]

  let showBackgroundAnimated = window.innerHeight - 100,
      showTop = arrayBackgroundDetail[e].getBoundingClientRect().top  

  if (showTop < showBackgroundAnimated && !arrayBackgroundDetail[e].classList.contains('active')) {
    arrayBackgroundDetail[e].classList.add('active')
    animated(e, b1, b2)
  }
}

function animated(e, b1, b2) {
  const arrayBackgroundDetail = [...document.querySelectorAll('.background-detail')]

  let transparent = 98,
      mainColor = 100,

      destacaBackground = setInterval(() => {
        color()
      }, 15)

  function color() {
    transparent--
      mainColor--

      arrayBackgroundDetail[e].style.background = 
      `linear-gradient(283deg,
      ${ b1 } ${ transparent }%,
      ${ b2 } ${ mainColor }%)`

      if (transparent === 0 && transparent === 0) {
        clearInterval(destacaBackground)
        
        arrayBackgroundDetail[e].style.background = 
        `linear-gradient(283deg, 
          ${ b1 } 0%,
          ${ b2 } 0%)`
      }
  }
}
