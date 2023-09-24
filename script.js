const tracker = document.getElementById('tracker');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');
const lineThickness = document.getElementById('lineThickness');

let isDrawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw(x, y) {
  if (!isDrawing) return;

  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = lineThickness.value;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
});

canvas.addEventListener('mousemove', (e) => {
  draw(e.clientX, e.clientY);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  tracker.innerText = `Mouse X: ${x}px, Mouse Y: ${y}px`;
});
