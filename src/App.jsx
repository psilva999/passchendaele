import { Link } from 'react-scroll'

import Header from './Components/Header'
import Home from './Components/Home'

import About from './Components/About'
// import Soldiers from './Components/Soldiers'
//import Timeline from './Components/Timeline'

import Remember from './Components/Remember'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

import Background from './assets/images/0-background.jpg'
import Arrow from './assets/svg/4-arrow.svg'

function App() {

  return (
    <>
      <Header/>

      <main>
        <img src={ Background } className='background'/>

        <Link activeClass="active"
          to='about'
          spy={ true }
          smooth={ true }
          offset={ 60 }
          duration={ 500 }
          className='link-scroll'>

          <section className='scroll-to-about'>
          <span><img src={ Arrow }/></span> </section>
        </Link>

        <Home/>
        <About/>

        {/* <Soldiers/> */}
        {/* <Timeline/> */}

        <Remember/>
        <Newsletter/>
      </main>

      <Footer/>
      <div className='close-menu-by-outside'></div>

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
    </>

  )
}

export default App
