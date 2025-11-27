// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealElements[i].getBoundingClientRect().top;
    let revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Parallax Effect
const parallaxElements = document.querySelectorAll('[data-speed]');
window.addEventListener('scroll', () => {
  parallaxElements.forEach(el => {
    const speed = el.getAttribute('data-speed');
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });

  // Header logo shrink & glow
  const logo = document.getElementById('logo');
  let shrink = Math.min(1, 1 - window.scrollY/1000);
  logo.style.transform = `scale(${shrink}) rotate(${window.scrollY/200}deg)`;
  logo.style.boxShadow = `0 0 ${30*shrink}px rgba(0,255,255,${shrink})`;
});

// Particle Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 160;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*2 + 1,
    dx: (Math.random()-0.5)*0.6,
    dy: (Math.random()-0.5)*0.6
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "rgba(0,255,255,0.5)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if(p.x <0 || p.x>canvas.width) p.dx *= -1;
    if(p.y <0 || p.y>canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
