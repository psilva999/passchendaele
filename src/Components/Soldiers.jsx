import { useEffect } from 'react'

import fig1 from '../assets/images/slide/fig1.jpg'
import fig2 from '../assets/images/slide/fig2.jpg'
import fig3 from '../assets/images/slide/fig3.jpg'

import fig4 from '../assets/images/slide/fig4.jpg'
import fig5 from '../assets/images/slide/fig5.jpg'
import fig6 from '../assets/images/slide/fig6.jpg'

import SlideMin from '../events/slideMinifier'
import scrollReveal from '../events/scrollReveal'
// import Slide from '../events/slide'

const Soldiers = () => {
  useEffect(() =>
    window.addEventListener('scroll', () =>
    scrollReveal(document.querySelector('.soldiers'), 200)))

  useEffect(() => initSlide)

  function initSlide() {
    const handleSlide = new SlideMin('.slide', '.slide-wrapper')

    handleSlide.init()
  }

  return (

    <section id='soldiers' className='soldiers'>
      <h1>Soldiers</h1>

      <article className='slide-wrapper'>
        <div className='slide'>
          <figure> <img src={ fig2 } alt="tank"/>

            <figcaption>Dreams of freedom turn to dust</figcaption>
          </figure>

          <figure> <img src={ fig1 } alt="price of a mile"/>

            <figcaption>The price of a mile</figcaption>
          </figure>

          <figure> <img src={ fig3 } alt="fade"/>

            <figcaption>An army in dispair</figcaption>
          </figure>

          <figure> <img src={ fig4 } alt="away"/>

            <figcaption>How many wasted their lives</figcaption>
          </figure>

          <figure> <img src={ fig5 } alt="broken"/>

            <figcaption>How many dreams fade away</figcaption>
          </figure>

          <figure> <img src={ fig6 } alt="dreams"/>

            <figcaption>They wont be coming home</figcaption>
          </figure>

        </div>
      </article>
    </section>

  )
}

export default Soldiers