export default class Slide {

  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }

  onStart(e) {
    e.preventDefault()
    console.log('mousedown')

    this.wrapper.addEventListener('pointermove', this.onMove)
  }

  onMove() {
    console.log('moveu')
  }

  //quando terminar o evento
  onEnd() {
    console.log("cabou")
  
    this.wrapper.removeEventListener('pointermove', this.onMove)
  }

  //para adicionar cada evento do slide
  addSlideEvents() {
    this.wrapper.addEventListener('pointerdown', this.onStart)
    
    this.wrapper.addEventListener('pointerup', this.onEnd)
    document.addEventListener('pointerup', this.onEnd)
    document.addEventListener('touchend', this.onEnd)
  }

  //bind events para fazer referencia ao objeto
  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)

    this.onEnd = this.onEnd.bind(this)
  }

  init() {
    this.bindEvents()
    
    this.addSlideEvents()

    return this
  }
}
