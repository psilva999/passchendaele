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
  }
 
  //atualiza posiçao do mouse/touch
  updatePosition(clientX) {
    //movimento com velocidade de 1.6
    this.dist.movement = (this.dist.startX - clientX) * 1.6

    let position = this.dist.finalPosition - this.dist.movement

    return position
  }

  onStart(e) {
    let movetype

    if (e.type === 'pointerdown') {
      e.preventDefault()

      //pra saber a posição do mouse
      this.dist.startX = e.clientX
      movetype = 'pointermove'
    }
    
    //evento mobile
    else {
      this.dist.startX = e.changedTouches[0].clientX
      movetype = 'touchmove'
    }

    this.wrapper.addEventListener(movetype, this.onMove)
  }

  onMove(e) {
    //define se é pointer ou touch
    const pointerPosition = (e.type === 'pointermove')?
    e.clientX : e.changedTouches[0].clientX

    //ativando o updatePosition
    const finalPosition = this.updatePosition(pointerPosition)

    this.moveSlide(finalPosition)
  }

  onEnd(e) {
    const movetype = (e.type === 'pointerup')? 'pointermove' : 'touchmove'

    this.wrapper.removeEventListener(movetype, this.onMove)

    //salvar o distX
    this.dist.finalPosition = this.dist.movePosition
  }

  addSlideEvents() {
    //eventos de pointer e touch
    this.wrapper.addEventListener('pointerdown', this.onStart)
    this.wrapper.addEventListener('touchstart', this.onStart)

    this.wrapper.addEventListener('pointerup', this.onEnd)
    this.wrapper.addEventListener('touchend', this.onEnd)
    // document.addEventListener('pointerup', this.onEnd)
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
