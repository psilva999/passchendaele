import { useEffect } from 'react'
import Logo from '../assets/svg/0-logo.svg'

import Face from '../assets/svg/1-face.svg'
import Insta from '../assets/svg/2-insta.svg'
import Tw from '../assets/svg/3-tw.svg'

import Visa from '../assets/images/8-visa.png'
import Master from '../assets/images/9-master.png'
import Pay from '../assets/images/10-pay.png'
import Discover from '../assets/images/11-discover.png'

import scrollReveal from '../events/scrollReveal'

const Footer = () => {
  useEffect(() =>
    window.addEventListener('scroll', () => 
    scrollReveal(document.querySelector('footer'), undefined)))

  return (

    <footer>
      <section>

        <article>
          <div className='ypres'>
            <img src={ Logo } alt="logo"/>
          </div>

          <p>
            The men crawled the general called and the killing carried on
          </p> 
        </article>

        <article> <h2>Main Menu</h2>
          <ul>
            <li>About</li>
            <li>Soldiers</li>
            <li>Timeline</li>
            <li>Remember</li>
          </ul>
        </article>

        <article> <h2>Information</h2>
          <ul>
            <li>Contact</li>
            <li>Numbers</li>
            <li>Videos</li>
            <li>Others Battles</li>
          </ul>
        </article>

        <article> <h2>Adress</h2>
          <ul>
            <li>North Atlantic, 1942</li>
            <li>Bismarck 124</li>
          </ul>
        </article>

        <article> <h2>Social Media</h2>
          <div className='social'>
            <img src={ Face } alt="face"/>
            <img src={ Insta } alt="insta"/>
            <img src={ Tw } alt="twitter"/>
          </div>
        </article>
      </section>

      <article className='copy'>
        <p>&copy; Copyright Passchendaele, all rights reserved.</p>

        <div>
          <img src={ Visa } alt="visa"/>
          <img src={ Master } alt="mastercard"/>
          <img src={ Pay } alt="paypal"/>
          <img src={ Discover } alt="discover"/>
        </div>

      </article>
    </footer>
  )
}

export default Footer