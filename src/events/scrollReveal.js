export default function scrollReveal(container) {
  let showContainer = window.innerHeight - 200,
      showTop = container.getBoundingClientRect().top

  if (showTop < showContainer && !container.classList.contains("active"))
    container.classList.add('active')
}

export function revealNewsFooter(container) {
  let showContainer = window.innerHeight - 100,
      showTop = container.getBoundingClientRect().top

  if (showTop < showContainer && !container.classList.contains("active"))
    container.classList.add('active')
}
