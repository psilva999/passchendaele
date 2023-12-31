//função que elimina a anterior até executar a rpoxima operação
export default function debounce(callback, delay) {
  let timer

  return (...args) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => { 
      callback(...args)
      timer = null 
    }, delay)
  }
}
