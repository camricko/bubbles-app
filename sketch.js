let x
let y
let z
let timerX = false
let timerY = false
let timerZ = false

function setup() {
  createCanvas(400, 400);
  x = new Circle(150, 50)
  y = new Circle(250, 50)
  z = new Circle(250, 150)
  setTimeout(() => timerX = true, 1000)
  setTimeout(() => timerY = true, 1000)
  setTimeout(() => timerZ = true, 2000)

}

function draw() {

  background(220);
  ellipse(50, 50, 50)

  if (timerX === true) {
    x.getFrameCount();
    x.display();
  }

  timerY === true ? y.display() : null
  timerZ === true ? z.display() : null
}
