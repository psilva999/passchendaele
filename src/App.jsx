import { useEffect } from 'react'
import { Link } from 'react-scroll'

import Header from './Components/Header'
import Home from './Components/Home'

import About from './Components/About'
// import Soldiers from './Components/Soldiers'
// import Timeline from './Components/Timeline'

import Remember from './Components/Remember'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

import Background from './assets/images/0-background.jpg'
import Arrow from './assets/svg/4-arrow.svg'
import { hideMenu } from './events/handleMenu'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", handleToHome)

    return () => window.removeEventListener('scroll', handleToHome)
  })

  window.addEventListener('resize', removeActive)

  function removeActive() {
    if (!window.matchMedia('(max-width:1055px)')) {

      document.querySelector('.menu').classList.remove('active')
      document.querySelector('.close-menu-by-outside').classList.remove('active')

      console.log(document.querySelector('.menu'), document.querySelector('.close-menu-by-outside'))
    }
  }

  const handleToHome = () => {
    const button = document.querySelector('.scroll-to-home')

    if (window.scrollY >= 400)
      button.classList.add('active') 

    else
      button.classList.remove('active')
  }

  return (
    <>
      <Header/>

      <main>
        <img src={ Background } className='background'/>

        <Link activeClass="active"
          to='about'
          spy={ true }
          smooth={ true }
          offset={ 30 }
          duration={ 500 }
          className='link-scroll'>

          <section className='scroll-to-about'>
          <span><img src={ Arrow }/></span> </section>
        </Link>

        <Home/>
        <About/>

        {/* <Soldiers/>
        <Timeline/> */}

        <Remember/>
        <Newsletter/>
      </main>

      <Footer/>

      <Link activeClass="active"
          to='home'
          spy={ true }
          smooth={ true }
          offset={ 0 }
          duration={ 500 }
          className='link-scroll'>

          <section className='scroll-to-home'>
          <img src={ Arrow }/></section>
      </Link>

      <div className='close-menu-by-outside' onClick={ hideMenu }></div>
    </>

  )
}

export default App
