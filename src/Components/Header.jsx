import Logo from '../assets/svg/0-logo.svg'

const Header = () => {
  return (

    <header>
      <div className='logo'>
        <img src={ Logo } alt='logo'/>
      </div>

      <nav>
        <button className='toggle-menu'></button>
        
        <ul className='menu'>
          <div className='close-menu'></div>

          <li>about</li>
          <li>soldiers</li>
          <li>timeline</li>
          <li>remember</li>
        </ul>

      </nav>
    </header>

  )
}

export default Header
