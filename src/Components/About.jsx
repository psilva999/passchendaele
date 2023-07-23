import { useEffect } from 'react'

import Death from '../assets/images/1-death.jpg'
import Troops from '../assets/images/2-troops.jpg'
import Horses from '../assets/images/3-horses.jpg'

import { textBackground } from '../events/highlighter'
import scrollReveal from '../events/scrollReveal'

const About = () => {
  useEffect(() => { 
    window.addEventListener('scroll', () => { 
      textBackground(0, 'rgba(166,150,88,0)', 'rgba(166,150,88,.6)')
      scrollReveal(document.querySelector('.about'), 200, 0)
    })
  })

  return (

    <section id='about' className='about'>
      <article>
        <h1>About</h1>

        <div>
          <p>
            The Third Battle of Ypres was a campaign of the First World War, fought by the Allies against the German Empire.
          </p>

          <p>
            The battle took place on the Western Front, from July to November 1917, for control of the ridges <a className='background-detail'>south and east of the Belgian.</a>
          </p>

          <p>
            Further operations and a British supporting attack along the Belgian coast.
          </p>
        </div>
      </article>

      <div className='imgs'>
        <img src={ Death } alt="death of a soldier"/>
        <img src={ Troops } alt="troops"/>
        <img src={ Horses } alt="a soldier in a horse"/>
      </div>
    </section>
  )
}

export default About
