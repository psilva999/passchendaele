import debounce from './debounce.js'

export default class Slide {
  
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)

    //distancia
    this.dist = { finalPosition: 0, startX: 0, movement: 0 }
    this.activeClass = 'active'
  }

  transition(active) {
    this.slide.style.transition = active? 'transform .2s' : ''
  }

  //metodo para mover o slide
  moveSlide(distX) {
    //salvar o distX
    this.dist.movePosition = distX

    //mudar o transform 
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`
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
    this.transition(false)
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

    this.transition(true)
    this.changeSlideOnEnd()
  }

  //mover o slide caso mexa um pouco na prox img
  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide()
    }

    else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide()
    }

    else {
      this.changeSlide(this.index.active)
    }
  }

  addSlideEvents() {
    //eventos de pointer e touch
    this.wrapper.addEventListener('pointerdown', this.onStart)
    this.wrapper.addEventListener('touchstart', this.onStart)

    this.wrapper.addEventListener('pointerup', this.onEnd)
    this.wrapper.addEventListener('touchend', this.onEnd)
    // document.addEventListener('pointerup', this.onEnd)
  }

  //slide position: deixar o container no centro da tela
  slidePosition(slide) {
    //calcular o tamanho da tela e do container
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2

    return -(slide.offsetLeft - margin)
  }

  //slide config para salvar cada posiçao
  slideConfig() {
    //acessar os filhos do container e a posição de cada um
    this.slideArray = [...this.slide.children].map(element => {
      const position = this.slidePosition(element)

      return { position, element }
    })
  }

  //saber o proximo elemento do slide
  slideIndexNav(index) {
    const last = this.slideArray.length - 1

    this.index = {
      prev: index? index - 1 : undefined,
      active: index,
      next: index === last? undefined : index + 1, 
    }
  }

  //muda o slide de acordo com o index
  changeSlide(index) { 
    const activeSlide = this.slideArray[index]

    this.moveSlide(activeSlide.position)
    this.slideIndexNav(index)

    //navegar a partir do item selecionado
    this.dist.finalPosition = activeSlide.position
    this.changeActiveClass()
  }

  changeActiveClass() {
    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass))

    this.slideArray[this.index.active].element.classList.add(this.activeClass)
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev)
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next)
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig()
      this.changeSlide(this.index.active)
    }, 1000)
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)

    this.onEnd = this.onEnd.bind(this)
    this.onResize = debounce(this.onResize.bind(this), 50)
  }

  init() {
    this.bindEvents()
    this.transition(true)
    this.addSlideEvents()

    this.slideConfig()
    this.addResizeEvent()
    this.changeSlide(1)

    return this
  }
}
