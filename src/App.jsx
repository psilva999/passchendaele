import { useEffect } from 'react'
import { Link } from 'react-scroll'

import Header from './Components/Header'
import Home from './Components/Home'

import About from './Components/About'
import Timeline from './Components/Timeline'
import Soldiers from './Components/Soldiers'

import Remember from './Components/Remember'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

import Background from './assets/images/0-background.jpg'
import Arrow from './assets/svg/4-arrow.svg'
import { hideMenu, removeActive } from './events/handleMenu'

function App() {
  useEffect(() => window.addEventListener('resize', removeActive))

  useEffect(() => {
    window.addEventListener("scroll", handleToHome)

    return () => window.removeEventListener('scroll', handleToHome)
  })

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
        <Home/>
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

        <About/>

        <Timeline/>
        <Soldiers/>

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
