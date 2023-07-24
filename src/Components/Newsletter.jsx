import { useEffect } from 'react'

import news from '../assets/images/7-newsletter.jpg'
import scrollReveal from '../events/scrollReveal'


const Newsletter = () => {
  useEffect(() => { 
    document.querySelector('form button').addEventListener('click', handleEmail)

    window.addEventListener('scroll', () => 
    scrollReveal(document.querySelector('.newsletter'), undefined))
  })

  function regex() {
    const input = document.querySelector('#email'),
          button = document.querySelector('form button'),

          regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

    if (input.value.match(regex)) button.disabled = false

    else button.disabled = true
  }

  function handleEmail(e) {
    const input = document.querySelector('#email'),
          button = document.querySelector('form button')

    e.preventDefault()

    if (button.disabled === false) {
      input.disabled = true
      button.disabled = true
    }
  }

  return (
    <section id='newsletter' className='newsletter'>
      <img src={ news }/>

      <article>
        <h1>Newsletter</h1>

        <form>
          <input 
            type="email" 
            id='email' 
            placeholder='E-mail'
            onInput={ regex }/>

          <button disabled>SUBSCRIBE</button>
        </form>

      </article>
    </section>

  )
}

export default Newsletter