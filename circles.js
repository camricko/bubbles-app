class Circle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.c = color || {r: 134, g: 206, b: 203}

    this.initSize = 20
    this.maxSize = 100
    this.initFade = 255 //full opacity


    // don't chagne these
    this.appear = true //make this "appear || false" later
    this.s = this.initSize
    this.fade = this.initFade

    this.runFrameCount = true
    this.runFrameCount1 = true
    this.runFrameCount2 = true

    this.initFrameCount = null
    this.finalFrameCount = null
    this.durationInFrames = null
  }

  initialize() {
    this.appear === true ? this.display() : this.hide()
  }

// getFrameCount is a function that only runs once. It's purpose is to
// determine how long it takes, in frames, for this.Circle to get from
// initSize to maxSize and store that time value
  getFrameCount() {
    if (this.runFrameCount === true) {

      if (this.runFrameCount1 === true) {
        console.log("Initial frame count is " + frameCount);
        this.initFrameCount = frameCount
        this.runFrameCount1 = false
      }
      console.log("we returned " + this.initFrameCount)

      if (this.runFrameCount2 === true) {
        if (this.s > 50) {
          console.log("End frame count is" + frameCount)
          this.finalFrameCount = frameCount
          this.runFrameCount2 = false
          console.log(`initFrame = ${this.initFrameCount}, lastFrame = ${this.finalFrameCount}`)
          this.durationInFrames = this.finalFrameCount - this.initFrameCount
          console.log("duration is " + this.durationInFrames)
          this.runFrameCount = false
        }
      }
    }
  }

  display() {
    noStroke()
    fill(this.c.r, this.c.g, this.c.b, this.fade)
    ellipse(this.x, this.y, this.s)
    this.expand()
    // this.changeOpacity()
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
