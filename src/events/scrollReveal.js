export default function scrollReveal(container, number) {
  let showContainer = window.innerHeight - number,
      showTop = container.getBoundingClientRect().top

  if (showTop < showContainer && !container.classList.contains("active"))
    container.classList.add('active')
}
