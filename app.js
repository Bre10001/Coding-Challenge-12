// Task 2: Configure the JavaScript for Drawing Context

// Get the 2D canvas drawing context

const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

// Track user input to draw shapes dynamically.
let isDrawing = false;
let startX, startY;
let currentShape = 'line';
let selectedColor = '#000000';

// Add event listeners for mouse events to handle drawing.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// drawing
function startDrawing(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}