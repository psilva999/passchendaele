import Header from './Components/Header'
import Home from './Components/Home'

import About from './Components/About'
// import Soldiers from './Components/Soldiers'
//import Timeline from './Components/Timeline'

import Remember from './Components/Remember'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

import Background from './assets/images/0-background.jpg'

function App() {

  return (
    <>
      <Header/>

      <main>
        <img src={ Background } className='background'/>

        <Home/>
        <About/>

        {/* <Soldiers/> */}
        {/* <Timeline/> */}

        <Remember/>
        <Newsletter/>
      </main>

      <Footer/>
      <div className='close-menu-by-outside'></div>
    </>
  )
}

export default App
