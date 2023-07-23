import { useEffect } from "react"
import scrollReveal from "../events/scrollReveal"

const Timeline = () => {
  useEffect(() => 
  window.addEventListener("scroll", () => 
  scrollReveal(document.querySelector('.timeline'), 300, 1)))

  return (

    <section id='timeline' className='timeline'>
      <h1>Timeline</h1>

      <div>
        <ul>
          <article> <h2>July-August</h2>
            <p>
              The attack was not planned as a breakthrough operation and Flandern I Stellung, the fourth German defensive position.
            </p>
          </article>
          
          <article> <h2>Weather</h2>
            <p>
              Once the Autumn rains set in difficulties would be greatly enhanced....Unfortunately, there now set in the wettest August for thirty years.
            </p>
          </article>
          
          <article> <h2>November</h2>
            <p>
              German artillery began a bombardment between the Menin road.
            </p>
          </article>
        </ul>
        
        <span>
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>

          <li className='line'></li>
        </span>

        <ul>
          <article> <h2>Local attacks</h2>
            <p>
              On the higher ground, the Germans continued to inflict many losses on the British divisions beyond Langemarck but on 19 August.
            </p>
          </article>

          <article> <h2>September–October</h2>
            <p>
              The 4th Army had held on to the Gheluvelt Plateau in August but its casualties worsened the German manpower shortage.
            </p>
          </article>
        </ul>

      </div>
    </section>

  )
}

export default Timeline