const tracker = document.getElementById('tracker');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  tracker.innerText = `Mouse X: ${x}px, Mouse Y: ${y}px`;
});
