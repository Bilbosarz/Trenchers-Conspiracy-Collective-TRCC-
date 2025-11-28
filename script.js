// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero buttons hover glow effect (additional to CSS)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = '0 0 100px #00ffff';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = '';
    });
});

/* Optional: Countdown timer example
const countdown = document.createElement('div');
countdown.id = 'countdown';
countdown.style.textAlign = 'center';
countdown.style.color = '#00ffff';
countdown.style.fontSize = '1.2rem';
countdown.style.marginTop = '1rem';
document.body.prepend(countdown);

let count = 10; // example countdown seconds
setInterval(() => {
    countdown.textContent = `Next pump in: ${count} sec`;
    count--;
    if(count < 0) count = 10;
}, 1000);
*/
