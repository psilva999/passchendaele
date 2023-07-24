export default function scrollReveal(container, li) {
  let showContainer = window.innerHeight - 100,
      showTop = container.getBoundingClientRect().top

  if (showTop < showContainer) {
    if (!container.classList.contains("active"))
      container.classList.add('active')

    handleLi(li)
  }
}

function handleLi(e) {
  const li = document.querySelectorAll('nav li'),
        arrayLi = [...li]
  
  li.forEach(items => items.classList.remove('active'))

  if (!arrayLi[e].classList.add('active'))
    arrayLi[e].classList.add('active')
}
