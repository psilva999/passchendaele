import news from '../assets/images/7-newsletter.jpg'

const Newsletter = () => {
  return (

    <section id='newsletter' className='newsletter'>
      <img src={ news }/>

      <article>
        <h1>Newsletter</h1>

        <form>
          <input type="email" id='email' placeholder='E-mail'/>
          <button>SUBSCRIBE</button>
        </form>

      </article>
    </section>

  )
}

export default Newsletter