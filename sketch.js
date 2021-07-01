let x

function setup() {
  createCanvas(400, 400);
  x = new Circle(150, 50)

}

function draw() {
  background(220);
  ellipse(50, 50, 50)
  x.display()
}
