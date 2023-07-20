//export da class principal
export default class Slide {

  //constructor do slide
  constructor(slide, wrapper) {
    //chamando os containers com o 'this'
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }

  //remover evento padrao
  onStart(e) {
    e.preventDefault()
    console.log('mousedown')

    //so move quando iniciar
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  //quando mover o slide
  onMove() {
    console.log('moveu')
  }

  //quando terminar o evento
  onEnd() {
    console.log("cabou")
    //remove mousemove quando acabar
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  //para adicionar cada evento do slide
  addSlideEvents() {
    //evento de mouse down
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
  }

  //bind events para fazer referencia ao objeto
  bindEvents() {
    //impede que retorne o elemento quando tiver mousedown
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)

    this.onEnd = this.onEnd.bind(this)
  }

  //quando o slide iniciar
  init() {
    //começando pelo bind
    this.bindEvents()
    
    //depois os outros eventos
    this.addSlideEvents()

    //retorna a funçao addSlideEvents
    return this
  }
}
