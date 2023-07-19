import fig1 from '../assets/images/slide/fig1.jpg'
// import fig2 from '../assets/images/slide/fig2.jpg'

// import fig3 from '../assets/images/slide/fig3.jpg'
// import fig4 from '../assets/images/slide/fig4.jpg'
// import fig5 from '../assets/images/slide/fig5.jpg'

const Soldiers = () => {
  return (

    <section id='soldiers'>
      <h1>Soldiers</h1>

      <div className='slide'>
        <figure> <img src={ fig1 } alt="Canadian prisioners"/>

          <figcaption>Canadian prisioners in Passchendaele</figcaption>
        </figure>

        {/* <figure> <img src={ fig2 } alt="Canadian prisioners"/>

          <figcaption>The price of a mile</figcaption>
        </figure>

        <figure> <img src={ fig3 } alt="Canadian prisioners"/>

          <figcaption>Dreams of freedom turn to dust</figcaption>
        </figure>

        <figure> <img src={ fig4 } alt="Canadian prisioners"/>

          <figcaption>How many wasted their lives</figcaption>
        </figure>

        <figure> <img src={ fig5 } alt="Canadian prisioners"/>

          <figcaption>How many dreams fade away</figcaption>
        </figure> */}

      </div>
    </section>

  )
}

export default Soldiers