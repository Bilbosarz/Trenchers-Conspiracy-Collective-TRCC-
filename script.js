window.addEventListener('DOMContentLoaded', function() {
  // Lizard wiggle and burst animation
  var lizards = document.querySelectorAll('.lizard');
  lizards.forEach(function(lizard, i) {
    setTimeout(function() {
      lizard.style.transform = `scale(1.44) rotate(${(i-2)*16}deg)`;
      lizard.style.filter = "brightness(2.25) drop-shadow(0 0 210px #ffd700)";
      setTimeout(function() {
        lizard.style.transform = "";
        lizard.style.filter = "";
      }, 650);
    }, 180 + i * 153);
  });
  const centerLizard = lizards[2];
  if(centerLizard) {
    let up = true;
    setInterval(function() {
      centerLizard.style.transform = up ? "scale(1.22) rotate(-12deg)" : "scale(1.28) rotate(14deg)";
      centerLizard.style.filter = up ? "brightness(2.00) drop-shadow(0 0 120px #e6242e)" : "brightness(2.21) drop-shadow(0 0 140px #ffd700)";
      up = !up;
    }, 1350);
  }
  // Buttons wiggle and glow
  var heroBtns = document.querySelectorAll('.hero-btn');
  heroBtns.forEach(function(btn, i){
    let tick=0;
    setInterval(function(){
      btn.style.transform = `scale(1.${tick%3+2}) rotate(${(tick%14)-7}deg)`;
      btn.style.boxShadow = tick%2==0 ?
        "0 0 62px 23px #ffd700, 0 0 40px 7px #e6242e" :
        "0 0 120px 45px #1fe6ff, 0 0 24px 5px #ffd700";
      btn.style.filter = (tick%2==0)? "brightness(1.38)" : "brightness(1.50)";
      tick++;
    }, 420 + i*90);
  });
  // FAQ modal logic
  var faqBtn = document.getElementById('faqBtn');
  var faqModal = document.getElementById('faqModal');
  var closeFaq = document.getElementById('closeFaq');
  faqBtn.onclick = function() {
    faqModal.classList.add('active');
    document.body.style.overflow='hidden';
  };
  closeFaq.onclick = function() {
    faqModal.classList.remove('active');
    document.body.style.overflow='';
  };
  faqModal.onclick = function(e){
    if(e.target === faqModal){
      faqModal.classList.remove('active');
      document.body.style.overflow='';
    }
  };
  // Marquee flip
  var marquee = document.querySelector('.marquee');
  if(marquee){
    let flip=false;
    setInterval(function() {
      marquee.style.transform = flip ? "scaleY(-1)" : "";
      flip = !flip;
    }, 2460);
  }
  // Marching lizards animation
  function marchLizards(selector) {
    var list = document.querySelectorAll(selector);
    let big = true;
    setInterval(function(){
      list.forEach(function(span){
        span.style.fontSize = big ? "2em" : "1.4em";
      });
      big = !big;
    }, 600);
  }
  marchLizards('.marching-lizards');
  marchLizards('.marching-lizards-footer span');
});
