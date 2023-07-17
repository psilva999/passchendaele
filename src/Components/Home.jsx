import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const detail = document.querySelector('#home a')

    let transparent = 98,
        mainColor = 100,

        destacaBackground = setInterval(() => {
          transparentMainColor()
        }, 10)

    function transparentMainColor() {
      transparent--
      mainColor--

      detail.style.background = 
      `linear-gradient(283deg,
      rgba(95,100,102,0) ${ transparent }%,
      rgba(95,100,102,1) ${ mainColor }%)`

      if (transparent === 0 && transparent === 0) {
        clearInterval(destacaBackground)
        
        detail.style.background = 
        `linear-gradient(283deg, 
          rgba(95,100,102,0) 0%,
          rgba(95,100,102,1) 0%)`
      }

    }
  })

  return (

    <section id='home' className='home active'> 
      <article>
        <h1>The Battle of  Passchendaele</h1>

        <p>The Third Battle of Ypres was one of the most brutal battles during the <a>first World War</a></p>
        
      </article>
    </section>

  )
}

export default Home
