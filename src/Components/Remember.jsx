import { useEffect } from 'react'

import { textBackground } from '../events/highlighter'
import scrollReveal from '../events/scrollReveal'

const Remember = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => { 
      textBackground(1, 'rgba(9,8,9,0)', 'rgba(9,8,9,.6)')
      textBackground(2, 'rgba(9,8,9,0)', 'rgba(9,8,9,.6)')
      scrollReveal(document.querySelector('.remember'))
    })
  })

  return (
    <section id='remember' className='remember'>
      <h1>Remember</h1>

      <div className='facts'>
        <article> <h2>Centenary</h2>
          <p>
            2017 marked the centenary of the Battle of <a className='background-detail'>Passchendaele</a> with events taking place in Belgium in July.
          </p>
        </article>

        <article> <h2>Western Front</h2>
          <p>
            The battle took place on the Western Front, from July to November 1917, for control of land south and east of the Belgian city of Ypres in West Flanders.
          </p>
        </article>

        <article> <h2>Third Battle of Ypres</h2>
          <p>
            The battle which was also known as The Third Battle of Ypres was one of the largest battles Britain’s Armed Forces have ever fought.
          </p>
        </article>

        <article> <h2>30 years</h2>
          <p>
            Within a few days of the battle the heaviest rain for 30 years had turned the soil into a quagmire, producing thick mud.
          </p>
        </article>

        <article> <h2>From mud</h2>
          <p>
            The colours represented the struggle of the Corps — ‘From mud, through blood to the green fields beyond’.
          </p>
        </article>

        <article> <h2>A fateful number</h2>
          <p>
            Around 325,000 Allied and 260,000 German soldiers died in the Battle. Some <a className='background-detail'>42,000 bodies</a> have never been recovered.
          </p>
        </article>

      </div>
    </section>

  )
}

export default Remember