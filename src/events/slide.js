export default class Slide {

  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)

    //distancia
    this.dist = { finalPosition: 0, startX: 0, movement: 0 }
  }

  //metodo para mover o slide
  moveSlide(distX) {
    //salvar o distX
    this.dist.movePosition = distX

    //mudar o transform 
    this.wrapper.style.transform = 
    `translate3d(${distX}px, 0, 0)`

    console.log(this.slide)
  }
 
  //atualiza posiçao do mouse/touch
  updatePosition(clientX) {
    //movimento com velocidade de 1.6
    this.dist.movement = (this.dist.startX - clientX) * 1.6

    let position = this.dist.finalPosition - this.dist.movement

    return position
  }

  onStart(e) {
    e.preventDefault()

    //pra saber a posição do mouse
    this.dist.startX = e.clientX
    this.wrapper.addEventListener('pointermove', this.onMove)
  }

  onMove(e) {
    //ativando o updatePosition
    const finalPosition = this.updatePosition(e.clientX)

    this.moveSlide(finalPosition)
  }

  onEnd() {
    this.wrapper.removeEventListener('pointermove', this.onMove)

    //salvar o distX
    this.dist.finalPosition = this.dist.movePosition
  }

  addSlideEvents() {
    this.wrapper.addEventListener('pointerdown', this.onStart)
    
    this.wrapper.addEventListener('pointerup', this.onEnd)
    // document.addEventListener('pointerup', this.onEnd)
    // document.addEventListener('touchend', this.onEnd)
  }

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
