class Circle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.c = color || {r: 134, g: 206, b: 203}

    this.initSize = 20
    this.maxSize = 100
    this.initFade = 255 //full opacity
    this.appear = true
    this.s = this.initSize
    this.fade = this.initFade
  }

  initialize() {
    this.appear === true ? this.display() : this.hide()
  }

  display() {
    noStroke()
    fill(this.c.r, this.c.g, this.c.b, this.fade)
    ellipse(this.x, this.y, this.s)
    this.expand()
    this.changeOpacity()
  }

  hide() {
    noFill()
  }

  expand() {
    this.s <= this.maxSize ? this.s += 1.2 : this.s = this.initSize
  }

  changeOpacity() {
    let delay = (this.maxSize - this.initSize)*0.0625
    this.fade = map(this.s, this.initSize + delay, this.maxSize, 255, 0)
  }
}
