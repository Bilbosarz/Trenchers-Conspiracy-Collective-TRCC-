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
