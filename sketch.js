let nV = 0
let fuente1 = './fuentes/Karrik-Regular.woff'

let acerca = ['Hola', 'mi', 'nombre', 'es', 'Óscar', 'A.','Montiel.', 'Bienvenido', 'a', 'mi', 'sitio']
let acercaIndice = 0

function preload(){
  fuenteLack = loadFont(fuente1)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {

  renderName()
  renderMouseText()

}

function windowResized(){
  createCanvas(windowWidth, windowHeight)
}

function renderName( ){
  push()
  textFont(fuenteLack)
  textAlign(CENTER)
  fill(255)
  textSize(30)
  text("Oscar.OOO",windowWidth/2, windowHeight/2)
  pop()
}

function renderMouseText(){
  push()
  acercaIndice = Math.floor(map(mouseX, 0, width, 0, acerca.length))
  noFill()
  stroke(255,0,0)
  strokeWeight(1)
  textSize(windowWidth/ 12)
  textAlign(CENTER)
  text(acerca[acercaIndice], mouseX, mouseY)
  pop()

  push()
  strokeWeight(1)
  stroke(Math.floor(sin(nV)*255))
  fill(0, (Math.floor(sin(nV)*255))*-1)
  textSize(windowWidth/ 24)
  text(acerca[acercaIndice], mouseX, mouseY)
  nV+=0.1
  pop()
}