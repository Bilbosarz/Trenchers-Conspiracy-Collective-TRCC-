// Particle Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<200;i++){
  particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(0,255,255,0.5)";
    ctx.fill();
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

// Window resize
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

// Floating lizard parallax
const lizards = document.querySelectorAll('.float-img');
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  lizards.forEach((img,i)=>{
    img.style.transform=`translateY(${Math.sin(scroll/100+i)*15}px) translateZ(${i*4}px) rotate(${scroll/500}deg)`;
  });
});
