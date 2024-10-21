const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveAmplitude = 30; 
let waveFrequency = 0.01; 
let waveSpeed = 0.05; 
let offset = 0; 

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + waveAmplitude * Math.sin(waveFrequency * x + offset);
        ctx.lineTo(x, y);
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#61dafb';
    ctx.stroke();
}

function animate() {
    drawWave();
    offset += waveSpeed; 
    requestAnimationFrame(animate); 
}

animate();
