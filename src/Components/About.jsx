import Death from '../assets/images/1-death.jpg'
import Troops from '../assets/images/2-troops.jpg'
import Horses from '../assets/images/3-horses.jpg'

const About = () => {
  return (

    <section id='about' className='active'>
      <article>
        <h1>About</h1>

        <div>
          <p>
            The Third Battle of Ypres was a campaign of the First World War, fought by the Allies against the German Empire.
          </p>

          <p>
            The battle took place on the Western Front, from July to November 1917, for control of the ridges south and east of the Belgian.
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
