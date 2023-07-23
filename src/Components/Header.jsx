import { useEffect, useState } from 'react'

import { Link } from 'react-scroll'
import Logo from '../assets/svg/0-logo.svg'

import { handleItems, hideMenu, openMenu } from '../events/handleMenu'

const Header = () => {
  let oldScrollY = window.scrollY

  //menu fixed
  const [fixed, setFixed] = useState()

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    return () => window.removeEventListener('scroll', checkScroll)
  })

  const checkScroll = () => {

    window.scrollY >= 3 ? setFixed(true) : setFixed(false)

    if (window.scrollY <= 330 && oldScrollY > window.scrollY) 
      document.querySelectorAll('nav li').forEach(items => items.classList.remove('active'))

    oldScrollY = window.scrollY
  }

  return (
    <header className={ fixed? 'fixed' : '' }>

      <Link activeClass="active"
        to='home'
        spy={ true }
        smooth={ true }
        offset={ 0 }
        duration={ 500 }
        className='link-scroll'>
          <div className='logo'>
            <img src={ Logo } alt='logo'/>
          </div>
      </Link>

      <nav>
        <button className='toggle-menu' onClick={ openMenu }></button>
        
        <ul className='menu'>
          <div className='close-menu' onClick={ hideMenu }></div>

          <Link activeClass="active"
            to='about'
            spy={ true }
            smooth={ true }
            offset={ 30 }
            duration={ 500 }
            className='link-scroll'>

            <li onClick={ handleItems }>about</li> 
          </Link>

          <Link activeClass="active"
            to='timeline'
            spy={ true }
            smooth={ true }
            offset={ 0 }
            duration={ 500 }
            className='link-scroll'>

            <li onClick={ handleItems }>timeline</li>
          </Link>

          <Link activeClass="active"
            to='soldiers'
            spy={ true }
            smooth={ true }
            offset={ 20 }
            duration={ 500 }
            className='link-scroll'>

            <li onClick={ handleItems }>soldiers</li>
          </Link>

          <Link activeClass="active"
            to='remember'
            spy={ true }
            smooth={ true }
            offset={ -3 }
            duration={ 500 }
            className='link-scroll'>
              
            <li onClick={ handleItems }>remember</li>
          </Link>
        </ul>

      </nav>
    </header>

  )
}

export default Header
