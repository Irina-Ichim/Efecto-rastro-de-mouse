//console.log("Hola Irina"); funciona

let positions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  // Establece el fondo blanco
  background(10);
  
  let newMousePosition = createVector(mouseX, mouseY);
  positions.push(newMousePosition);
  
  if (positions.length > 50) {
    positions.shift();
  }
  
  let radius = 5;
  
  for (let i = 0; i < positions.length; i++) {
    fill(color('#00ffe7'), i / positions.length * 255, i / positions.length * 255);
    let position = positions[i];
    ellipse(position.x, position.y, radius, radius);
    radius *= 0.95;
  }
}
