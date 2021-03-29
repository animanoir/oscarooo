let nV = 0
let fuente1 = './fuentes/Karrik-Regular.woff'
let fuente1Italic = './fuentes/Karrik-Italic.woff'

const acerca = [
  'Computers',
  `aren't`,
  `just`,
  `inventions.`,
  `They`,
  `are`,
  'fundamental',
  'feature',
  'of',
  'the',
  'universe.',
  'idm',
  'art',
  'ghosts',
  'español',
  'digital art',
  'interactive',
  'design',
  'freelance web developer',
  'desarrollo web',
  'diseño interactivo',
  'web interactiva',
  'programador',
  'cyberpunk',
  'futurism',
]
let menu = ['.about', '.works', '.contact', 'mx.qro 2021']
let acercaIndice = 0
let menuIndice = 0
let menuY

function preload() {
  fuenteLack = loadFont(fuente1)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  menuY = Math.floor(map(mouseY, 0, height, 0, menu.length))
  console.log(menuY)

  renderName()
  renderMouseText()
  renderRectMenu()

}

function windowResized() {
  createCanvas(windowWidth, windowHeight)
}

function renderName() {
  push()
  noStroke()
  textFont(fuenteLack)
  textAlign(CENTER)
  fill(255)
  textSize(windowWidth / 16)

  text("Oscar.OOO", windowWidth / 4, windowHeight / 2)
  textSize(windowWidth / 42)

  text("{meta}works & ideas by Óscar A. Montiel", windowWidth / 4, (windowHeight / 2) + 40)
  pop()
}

function renderMouseText() {
  push()
  cursor(CROSS)
  acercaIndice = Math.floor(map(mouseX, 0, windowWidth / 2, 0, acerca.length))
  noFill()
  stroke(255, 0, 0)
  fill(0, (Math.floor(sin(nV / 2) * 255)) * -1)

  strokeWeight(1)
  textSize(windowWidth / 12)
  if (mouseX > windowWidth / 4 && mouseX < windowWidth / 2) {
    textAlign(CENTER)
  }
  if (mouseX > windowWidth / 3 && mouseX < windowWidth / 2) {
    textAlign(RIGHT)
  }
  if (mouseX > windowWidth / 2) {
    text('.', mouseX, mouseY)
  } else {
    text(acerca[acercaIndice], mouseX, mouseY)
  }
  pop()

  push()
  strokeWeight(1)
  stroke(Math.floor(sin(nV) * 255))
  fill(0, (Math.floor(sin(nV / 2) * 255)) * -1)
  textSize(windowWidth / 26)
  if (mouseX > windowWidth / 4 && mouseX < windowWidth / 2) {
    textAlign(CENTER)
  }
  if (mouseX > windowWidth / 3 && mouseX < windowWidth / 2) {
    textAlign(RIGHT)
  }
  text(acerca[acercaIndice], mouseX, mouseY)
  nV += 0.1
  pop()
}

function renderRectMenu() {
  push()
  noStroke()
  fill(255)
  rect(windowWidth / 2, 0, windowWidth / 2, windowHeight)
  if (mouseX >= windowWidth / 2) {
    push()
    cursor(HAND)
    noFill()
    stroke(0)
    strokeWeight(1)
    textSize(windowWidth / 16)
    menuIndice = Math.floor(map(mouseY, 0, height, 0, menu.length))
    text(menu[menuIndice], mouseX, mouseY)
    pop()
  }
  pop()
}

function mouseClicked() {
  if (menuY === 0) {
    window.alert('Work in progress = )')
  } else if (menuY === 1) {
    window.alert('Work in progress = )')
  } else if (menuY === 2) {
    window.open('https://linktr.ee/animanoir')
  }
}