function setup() {
  createCanvas(400, 400); // Create a canvas of 400x400 pixels
  noLoop();               // Ensures the draw loop runs only once
  
  drawGradientBackground(); // Draw the gradient background
  drawHorizontalLines();    // Draw the light blue horizontal lines
}

function drawGradientBackground() {
  for (let y = 0; y < height; y++) {
    // Create a gradient from dark blue to light blue
    let gradientColor = lerpColor(color(0, 0, 139), color(135, 206, 250), y / height);
    stroke(gradientColor);
    line(0, y, width, y); // Draw each line of the gradient
  }
}

function drawHorizontalLines() {
  for (let i = 0; i < 30; i++) {
    let y = random(height);       // Random y-coordinate for the horizontal line
    stroke(173, 216, 230, 150);   // Light blue color with some transparency
    strokeWeight(random(1, 3));   // Random stroke thickness between 1 and 3
    line(0, y, width, y);         // Draw a horizontal line
  }
}


